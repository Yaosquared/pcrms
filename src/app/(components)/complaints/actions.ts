"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createRecord = async (formData: FormData) => {
  const newName = formData.get("complaint-customerName") as string;
  const newDescription = formData.get("complaint-description") as string;

  await prisma.complaints.create({
    data: {
      customerName: newName,
      description: newDescription,
    },
  });

  revalidatePath("complaints");
};

export const editRecord = async (formData: FormData) => {
  const id = formData.get("complaint-id") as string;
  const newName = formData.get("complaint-customerName") as string;
  const newDescription = formData.get("complaint-description") as string;

  await prisma.complaints.update({
    where: { complaintId: id },
    data: {
      customerName: newName,
      description: newDescription,
    },
  });

  revalidatePath("complaints");
};

export const deleteRecord = async (formData: FormData) => {
  const id = formData.get("complaint-id") as string;

  await prisma.complaints.delete({
    where: { complaintId: id },
  });

  revalidatePath("complaints");
};

export const markAsResolved = async (id: string) => {
  const updatedDateResolved = new Date();

  await prisma.complaints.update({
    where: {
      complaintId: id,
    },
    data: {
      dateResolved: updatedDateResolved,
    },
  });

  revalidatePath("complaints");
};
