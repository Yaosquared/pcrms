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

export const fetchRecords = async () => {
  const monitoringData = await prisma.monitoring.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return monitoringData;
};

export const fetchSelectedCarrier = async () => {
  const monitoringData = await prisma.monitoring.findMany({
    select: {
      monitoringId: true,
      carrierName: true,
      deviceStatus: true,
      rangeStatus: true,
      latitude: true,
      longitude: true,
    },
    where: {
      isCarrierSelected: true,
    },
  });

  return monitoringData;
};

export const editSelectedCarrier = async (formData: FormData) => {
  const id = formData.get("monitor-id") as string;
  const updatedDate = new Date();

  try {
    await prisma.monitoring.updateMany({
      where: {
        isCarrierSelected: true,
      },
      data: {
        isCarrierSelected: false,
      },
    });

    await prisma.monitoring.update({
      where: {
        monitoringId: id,
      },
      data: {
        isCarrierSelected: true,
        updatedAt: updatedDate,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("/pet-carriers/monitor");
};
