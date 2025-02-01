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

  const rentalsData = await prisma.rentals.findMany({
    where: {
      customerName: {
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

  return rentalsData;
};

export const fetchAllRecordsCount = async (): Promise<number> => {
  return await prisma.rentals.count();
};

export const createRecord = async (formData: FormData) => {
  const newCarrier = formData.get("rental-carrier") as string;
  const newName = formData.get("rental-customerName") as string;
  const newPetName = formData.get("rental-petName") as string;
  const newPetType = formData.get("rental-petType") as string;
  const newPetBreed = formData.get("rental-petBreed") as string;
  const carrierId = formData.get("carrier-id") as string;

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    const newRental = await prisma.rentals.create({
      data: {
        carrierName: newCarrier,
        customerName: newName,
        petName: newPetName,
        petType: newPetType,
        petBreed: newPetBreed,
        updatedAt: null,
        modifiedBy: modifierName,
        petCarriers: {
          connect: {
            carrierId,
          },
        },
      },
    });

    await prisma.payments.create({
      data: {
        rentalId: newRental.rentalId,
        customerName: newName,
        paymentStatus: false,
        updatedAt: null,
      },
    });

    await prisma.petCarriers.update({
      where: { carrierId: carrierId },
      data: {
        rentalStatus: true,
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

export const editRecord = async (formData: FormData) => {
  const id = formData.get("rental-id") as string;
  const newCarrier = formData.get("rental-carrier") as string;
  const newName = formData.get("rental-customerName") as string;
  const newPetName = formData.get("rental-petName") as string;
  const newPetType = formData.get("rental-petType") as string;
  const newPetBreed = formData.get("rental-petBreed") as string;
  const updatedDate = new Date();

  const session = await auth();
  const modifierName = session?.user?.name || "";

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

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("rental-id") as string;

  try {
    const paymentCount = await prisma.payments.count({
      where: { rentalId: id },
    });
    if (paymentCount > 0) {
      return { error: "Delete linked payment record first" };
    }

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

export const markAsReturned = async (rentalId: string, carrierId: string) => {
  const updatedRentalEndTime = new Date();
  const updatedDate = new Date();

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.rentals.update({
      where: {
        rentalId: rentalId,
      },
      data: {
        rentalStatus: true,
        rentalEndTime: updatedRentalEndTime,
        updatedAt: updatedDate,
        modifiedBy: modifierName,
      },
    });

    await prisma.petCarriers.update({
      where: { carrierId: carrierId },
      data: {
        rentalStatus: false,
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

export const fetchAvailableCarriers = async () => {
  const availableCarriers = await prisma.petCarriers.findMany({
    select: {
      carrierId: true,
      carrierName: true,
    },
    where: {
      rentalStatus: false,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return availableCarriers;
};

export const fetchCustomers = async () => {
  const customerNames = await prisma.customers.findMany({
    select: {
      customerId: true,
      customerName: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return customerNames;
};
