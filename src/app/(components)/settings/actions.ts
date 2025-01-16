"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const editRecord = async (formData: FormData) => {
  const id = formData.get("setting-id") as string;
  const newValue = Number(formData.get("setting-value"));

  await prisma.settings.update({
    where: { settingId: id },
    data: {
      value: newValue,
    },
  });

  revalidatePath("rentals");
};
