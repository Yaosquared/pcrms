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
  const newName = formData.get("customer-name") as string;
  const newEmail = formData.get("email") as string;
  const newpPhoneNumber = formData.get("phone-number") as string;
  const newBirthDate = new Date(formData.get("birthdate") as string);
  const newIdType = formData.get("id-type") as string;
  const newIdNumber = formData.get("id-number") as string;

  try {
    await prisma.customers.create({
      data: {
        customerName: newName,
        email: newEmail,
        phoneNumber: newpPhoneNumber,
        birthDate: newBirthDate,
        idType: newIdType,
        idNumber: newIdNumber,
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
