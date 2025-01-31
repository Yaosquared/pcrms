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

  const complaintsData = await prisma.complaints.findMany({
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

  return complaintsData;
};

export const fetchAllRecordsCount = async (): Promise<number> => {
  return await prisma.complaints.count();
};

export const createRecord = async (formData: FormData) => {
  const newName = formData.get("complaint-customerName") as string;
  const newDescription = formData.get("complaint-description") as string;

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.complaints.create({
      data: {
        customerName: newName,
        description: newDescription,
        updatedAt: null,
        modifiedBy: modifierName,
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

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.complaints.update({
      where: { complaintId: id },
      data: {
        customerName: newName,
        description: newDescription,
        complaintStatus: false,
        updatedAt: updatedDate,
        modifiedBy: modifierName,
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

  const session = await auth();
  const modifierName = session?.user?.name || "";

  try {
    await prisma.complaints.update({
      where: {
        complaintId: id,
      },
      data: {
        complaintStatus: true,
        dateResolved: updatedDateResolved,
        updatedAt: updatedDate,
        modifiedBy: modifierName,
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidatePath("complaints");
};

export const fetchCustomers = async () => {
  const customerNames = await prisma.customers.findMany({
    select: {
      customerId: true,
      customerName: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return customerNames;
};
