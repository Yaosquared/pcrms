/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rentalId]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rentalId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedPassword` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "rentalId" TEXT NOT NULL,
ALTER COLUMN "paymentMethod" DROP NOT NULL,
ALTER COLUMN "paymentStatus" DROP NOT NULL,
ALTER COLUMN "paymentStatus" DROP DEFAULT,
ALTER COLUMN "totalAmount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
ADD COLUMN     "hashedPassword" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payments_rentalId_key" ON "payments"("rentalId");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "rentals"("rentalId") ON DELETE RESTRICT ON UPDATE CASCADE;
