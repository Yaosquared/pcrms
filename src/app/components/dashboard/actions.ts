"use server";

import prisma from "@/lib/prisma";

export const fetchPetCarrierMetrics = async () => {
  const petCarriersData = await prisma.petCarriers.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return petCarriersData;
};

export const fetchDailyRentedCarrier = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dailyPetCarriersData = await prisma.rentals.findMany({
    where: {
      updatedAt: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  return dailyPetCarriersData;
};

export const fetchDailyNewCustomerMetrics = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const customersData = await prisma.customers.findMany({
    where: {
      createdAt: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  return customersData;
};

export const fetchLatestRents = async () => {
  const rentalsData = await prisma.rentals.findMany({
    include: {
      payments: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return rentalsData;
};

export const fetchComplaintsData = async () => {
  const rentalsData = await prisma.complaints.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return rentalsData;
};

export const fetchMonthlyRevenue = async () => {
  const monthlyRevenue = await prisma.payments.groupBy({
    by: ["monthPaid"],
    where: {
      monthPaid: {
        not: null,
      },
    },
    _sum: {
      totalAmount: true,
    },
  });

  const months = Array(12).fill(0);

  monthlyRevenue.forEach((entry) => {
    const monthIndex = parseInt(String(entry.monthPaid) ?? "0") - 1;
    months[monthIndex] = entry._sum.totalAmount || 0;
  });

  return months;
};
