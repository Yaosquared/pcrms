/*
  Warnings:

  - Added the required column `carrierId` to the `rentals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rentals" ADD COLUMN     "carrierId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "pet_carriers"("carrierId") ON DELETE RESTRICT ON UPDATE CASCADE;
