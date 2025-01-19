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

export const createRecord = async (formData: FormData) => {
  const newCarrier = formData.get("rental-carrier") as string;
  const newName = formData.get("rental-customerName") as string;
  const newPetName = formData.get("rental-petName") as string;
  const newPetType = formData.get("rental-petType") as string;
  const newPetBreed = formData.get("rental-petBreed") as string;

  try {
    const newRental = await prisma.rentals.create({
      data: {
        carrierName: newCarrier,
        customerName: newName,
        petName: newPetName,
        petType: newPetType,
        petBreed: newPetBreed,
      },
    });

    await prisma.payments.create({
      data: {
        rentalId: newRental.rentalId,
        customerName: newName,
        paymentStatus: false,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("rentals");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("rental-id") as string;
  const newCarrier = formData.get("rental-carrier") as string;
  const newName = formData.get("rental-customerName") as string;
  const newPetName = formData.get("rental-petName") as string;
  const newPetType = formData.get("rental-petType") as string;
  const newPetBreed = formData.get("rental-petBreed") as string;
  const updatedDate = new Date();

  try {
    await prisma.rentals.update({
      where: { rentalId: id },
      data: {
        carrierName: newCarrier,
        customerName: newName,
        petName: newPetName,
        petType: newPetType,
        petBreed: newPetBreed,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("rentals");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("rental-id") as string;

  try {
    await prisma.rentals.delete({
      where: { rentalId: id },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("rentals");
};

export const markAsReturned = async (id: string) => {
  const updatedRentalEndTime = new Date();
  const updatedDate = new Date();

  try {
    await prisma.rentals.update({
      where: {
        rentalId: id,
      },
      data: {
        rentalStatus: true,
        rentalEndTime: updatedRentalEndTime,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("rentals");
};
