"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

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

export const fetchRecords = async (search?: string, page?: string) => {
  const parsedPage = parseInt(page || "1");
  const pageNumber = 15;
  const skipValue = (parsedPage - 1) * pageNumber;

  const settingsData = await prisma.settings.findMany({
    where: {
      code: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    skip: skipValue,
    take: pageNumber,
  });

  return settingsData;
};

export const fetchAllRecordsCount = async (): Promise<number> => {
  return await prisma.settings.count();
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("setting-id") as string;
  const newValue = Number(formData.get("setting-value"));

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.settings.update({
      where: { settingId: id },
      data: {
        value: newValue,
        modifiedBy: modifierName,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("rentals");
};
