/*
  Warnings:

  - The primary key for the `monitoring` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `motoringId` on the `monitoring` table. All the data in the column will be lost.
  - The required column `monitoringId` was added to the `monitoring` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "monitoring" DROP CONSTRAINT "monitoring_pkey",
DROP COLUMN "motoringId",
ADD COLUMN     "monitoringId" TEXT NOT NULL,
ADD CONSTRAINT "monitoring_pkey" PRIMARY KEY ("monitoringId");
