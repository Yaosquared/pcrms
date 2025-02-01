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

  const paymentsData = await prisma.payments.findMany({
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

  return paymentsData;
};

export const fetchAllRecordsCount = async (): Promise<number> => {
  return await prisma.payments.count();
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("payment-id") as string;
  const newName = formData.get("payment-customerName") as string;
  const newPaymentMethod = formData.get("payment-method") as string;
  const newPenalty = formData.get("payment-penalty") as string;
  const newPenaltyAmount = Number(formData.get("payment-penaltyAmount"));
  const updatedDate = new Date();

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.payments.update({
      where: { paymentId: id },
      data: {
        customerName: newName,
        paymentMethod: newPaymentMethod,
        penalty: newPenalty,
        penaltyAmount: newPenaltyAmount,
        updatedAt: updatedDate,
        modifiedBy: modifierName,
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

export const markAsPaid = async (paymentId: string) => {
  const updatedDate = new Date();

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    await prisma.payments.update({
      where: {
        paymentId: paymentId,
      },
      data: {
        paymentStatus: true,
        monthPaid: currentMonth,
        yearPaid: currentYear,
        updatedAt: updatedDate,
        modifiedBy: modifierName,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("payments");
};
