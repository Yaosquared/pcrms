/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `settings` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "pet_carriers" ADD COLUMN     "batteryPercentage" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "settings_code_key" ON "settings"("code");
