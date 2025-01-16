"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const editRecord = async (formData: FormData) => {
  const id = formData.get("payment-id") as string;
  const newName = formData.get("payment-customerName") as string;
  const newPaymentMethod = formData.get("payment-method") as string;
  const newPenalty = formData.get("payment-penalty") as string;
  const newPenaltyAmount = Number(formData.get("payment-penaltyAmount"));

  await prisma.payments.update({
    where: { paymentId: id },
    data: {
      customerName: newName,
      paymentMethod: newPaymentMethod,
      penalty: newPenalty,
      penaltyAmount: newPenaltyAmount,
    },
  });

  revalidatePath("payments");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("payment-id") as string;

  await prisma.payments.delete({
    where: { paymentId: id },
  });

  revalidatePath("payments");
};

export const markAsPaid = async (id: string) => {
  await prisma.payments.update({
    where: {
      paymentId: id,
    },
    data: {
      paymentStatus: true,
    },
  });

  revalidatePath("payments");
};
