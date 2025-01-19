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
  const id = formData.get("payment-id") as string;
  const newName = formData.get("payment-customerName") as string;
  const newPaymentMethod = formData.get("payment-method") as string;
  const newPenalty = formData.get("payment-penalty") as string;
  const newPenaltyAmount = Number(formData.get("payment-penaltyAmount"));
  const updatedDate = new Date();

  try {
    await prisma.payments.update({
      where: { paymentId: id },
      data: {
        customerName: newName,
        paymentMethod: newPaymentMethod,
        penalty: newPenalty,
        penaltyAmount: newPenaltyAmount,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("payments");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("payment-id") as string;

  try {
    await prisma.payments.delete({
      where: { paymentId: id },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("payments");
};

export const markAsPaid = async (id: string) => {
  const updatedDate = new Date();

  try {
    await prisma.payments.update({
      where: {
        paymentId: id,
      },
      data: {
        paymentStatus: true,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("payments");
};
