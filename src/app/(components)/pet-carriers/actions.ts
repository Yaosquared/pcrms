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

export const fetchRecords = async (search?: string) => {
  const petCarriersData = await prisma.petCarriers.findMany({
    where: {
      carrierName: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return petCarriersData;
};

export const createRecord = async (formData: FormData) => {
  const newName = formData.get("carrier-name") as string;

  try {
    await prisma.petCarriers.create({
      data: {
        carrierName: newName,
        updatedAt: null,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/pet-carriers");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("carrier-id") as string;
  const newName = formData.get("carrier-name") as string;
  const updatedDate = new Date();

  try {
    await prisma.petCarriers.update({
      where: { carrierId: id },
      data: {
        carrierName: newName,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/pet-carriers");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("carrier-id") as string;

  try {
    const rentalCount = await prisma.rentals.count({
      where: { carrierId: id },
    });
    if (rentalCount > 0) {
      return { error: "Delete linked rental record first" };
    }

    await prisma.petCarriers.delete({
      where: { carrierId: id },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/pet-carriers");
};
