"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createRecord = async (formData: FormData) => {
  const newName = formData.get("carrier-name") as string;

  await prisma.petCarriers.create({
    data: {
      carrierName: newName,
    },
  });

  revalidatePath("/pet-carriers");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("carrier-id") as string;
  const newName = formData.get("carrier-name") as string;

  await prisma.petCarriers.update({
    where: { carrierId: id },
    data: {
      carrierName: newName,
    },
  });

  revalidatePath("/pet-carriers");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("carrier-id") as string;

  await prisma.petCarriers.delete({
    where: { carrierId: id },
  });

  revalidatePath("/pet-carriers");
};
