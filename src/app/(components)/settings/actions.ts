"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

export const editRecord = async (formData: FormData) => {
  const id = formData.get("setting-id") as string;
  const newValue = Number(formData.get("setting-value"));

  try {
    await prisma.settings.update({
      where: { settingId: id },
      data: {
        value: newValue,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("rentals");
};
