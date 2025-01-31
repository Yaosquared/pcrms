"use server";

import { signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { userSchema } from "@/lib/userSchema";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

interface AuthError {
  code: string;
}

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const githubSignIn = async () => {
  await signIn("github");
};

export const credentialSignIn = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  if (!name || (name as string).length < 1) {
    return { error: "Name cannot be blank" };
  }
  if (!password || password.length < 1) {
    return { error: "Password cannot be blank" };
  }

  try {
    await signIn("credentials", {
      redirect: false,
      name: name,
      password: password,
    });

    return { success: true };
  } catch (e: unknown) {
    if ((e as AuthError).code === "invalid_credentials") {
      return { error: "Invalid credentials. Please try again" };
    } else if ((e as AuthError).code === "too_small") {
      return { error: "Blank fields" };
    } else {
      return { error: "Something went wrong" };
    }
  }
};

export const credentialSignUp = async (formData: FormData) => {
  const name = formData.get("name");
  const password = formData.get("password") as string;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const validatedData = userSchema.parse({ name, hashedPassword });

    await prisma.user.create({
      data: {
        name: validatedData.name,
        hashedPassword: validatedData.hashedPassword as string,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  redirect("/sign-in");
};

export const generalSignOut = async () => {
  await signOut();
};
