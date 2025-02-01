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

  const customersData = await prisma.customers.findMany({
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

  return customersData;
};

export const fetchAllRecordsCount = async (): Promise<number> => {
  return await prisma.customers.count();
};

export const createRecord = async (formData: FormData) => {
  const newName = formData.get("customer-name") as string;
  const newEmail = formData.get("email") as string;
  const newpPhoneNumber = formData.get("phone-number") as string;
  const newBirthDate = new Date(formData.get("birthdate") as string);
  const newIdType = formData.get("id-type") as string;
  const newIdNumber = formData.get("id-number") as string;

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.customers.create({
      data: {
        customerName: newName,
        email: newEmail,
        phoneNumber: newpPhoneNumber,
        birthDate: newBirthDate,
        idType: newIdType,
        idNumber: newIdNumber,
        updatedAt: null,
        modifiedBy: modifierName,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/customers");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("customer-id") as string;
  const newName = formData.get("customer-name") as string;
  const newEmail = formData.get("customer-email") as string;
  const newPhoneNumber = formData.get("customer-phoneNumber") as string;
  const newBirthDate = new Date(formData.get("customer-birthDate") as string);
  const newIdType = formData.get("customer-idType") as string;
  const newIdNumber = formData.get("customer-idNumber") as string;
  const updatedDate = new Date();

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.customers.update({
      where: { customerId: id },
      data: {
        customerName: newName,
        email: newEmail,
        phoneNumber: newPhoneNumber,
        birthDate: newBirthDate,
        idType: newIdType,
        idNumber: newIdNumber,
        updatedAt: updatedDate,
        modifiedBy: modifierName,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/customers");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("customer-id") as string;

  try {
    await prisma.customers.delete({
      where: { customerId: id },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/customers");
};
