"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createRecord = async (formData: FormData) => {
  const newCarrier = formData.get("rental-carrier") as string;
  const newName = formData.get("rental-customerName") as string;
  const newPetName = formData.get("rental-petName") as string;
  const newPetType = formData.get("rental-petType") as string;
  const newPetBreed = formData.get("rental-petBreed") as string;

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

  revalidatePath("rentals");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("rental-id") as string;
  const newCarrier = formData.get("rental-carrier") as string;
  const newName = formData.get("rental-customerName") as string;
  const newPetName = formData.get("rental-petName") as string;
  const newPetType = formData.get("rental-petType") as string;
  const newPetBreed = formData.get("rental-petBreed") as string;

  await prisma.rentals.update({
    where: { rentalId: id },
    data: {
      carrierName: newCarrier,
      customerName: newName,
      petName: newPetName,
      petType: newPetType,
      petBreed: newPetBreed,
    },
  });

  revalidatePath("rentals");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("rental-id") as string;

  await prisma.rentals.delete({
    where: { rentalId: id },
  });

  revalidatePath("rentals");
};

export const markAsReturned = async (id: string) => {
  const updatedRentalEndTime = new Date();

  await prisma.rentals.update({
    where: {
      rentalId: id,
    },
    data: {
      rentalEndTime: updatedRentalEndTime,
    },
  });

  revalidatePath("rentals");
};
