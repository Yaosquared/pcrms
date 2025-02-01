/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hashedPasssword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "hashedPasssword" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "complaints" ADD COLUMN     "modifiedBy" TEXT NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "modifiedBy" TEXT NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE "monitoring" ADD COLUMN     "modifiedBy" TEXT NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "modifiedBy" TEXT NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE "pet_carriers" ADD COLUMN     "modifiedBy" TEXT NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE "rentals" ADD COLUMN     "modifiedBy" TEXT NOT NULL DEFAULT 'Admin';

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
