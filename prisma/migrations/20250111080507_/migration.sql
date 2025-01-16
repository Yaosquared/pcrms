/*
  Warnings:

  - You are about to drop the column `customerId` on the `complaints` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `complaints` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `overallPaymentAmount` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `carrierId` on the `rentals` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `rentals` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `rentals` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedAt` on the `settings` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `complaints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carrierName` to the `rentals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `rentals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "complaints" DROP CONSTRAINT "complaints_customerId_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_customerId_fkey";

-- DropForeignKey
ALTER TABLE "rentals" DROP CONSTRAINT "rentals_carrierId_fkey";

-- DropForeignKey
ALTER TABLE "rentals" DROP CONSTRAINT "rentals_customerId_fkey";

-- AlterTable
ALTER TABLE "complaints" DROP COLUMN "customerId",
DROP COLUMN "status",
ADD COLUMN     "complaintStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "birthDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "customerId",
DROP COLUMN "overallPaymentAmount",
DROP COLUMN "status",
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "paymentStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalAmount" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "pet_carriers" ADD COLUMN     "deviceStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "rentals" DROP COLUMN "carrierId",
DROP COLUMN "customerId",
DROP COLUMN "status",
ADD COLUMN     "carrierName" TEXT NOT NULL,
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "rentalStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "settings" DROP COLUMN "modifiedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3);
