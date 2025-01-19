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
  const newName = formData.get("complaint-customerName") as string;
  const newDescription = formData.get("complaint-description") as string;

  try {
    await prisma.complaints.create({
      data: {
        customerName: newName,
        description: newDescription,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("complaints");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("complaint-id") as string;
  const newName = formData.get("complaint-customerName") as string;
  const newDescription = formData.get("complaint-description") as string;
  const updatedDate = new Date();

  try {
    await prisma.complaints.update({
      where: { complaintId: id },
      data: {
        customerName: newName,
        description: newDescription,
        complaintStatus: false,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("complaints");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("complaint-id") as string;

  try {
    await prisma.complaints.delete({
      where: { complaintId: id },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("complaints");
};

export const markAsResolved = async (id: string) => {
  const updatedDateResolved = new Date();
  const updatedDate = new Date();

  try {
    await prisma.complaints.update({
      where: {
        complaintId: id,
      },
      data: {
        complaintStatus: true,
        dateResolved: updatedDateResolved,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("complaints");
};
