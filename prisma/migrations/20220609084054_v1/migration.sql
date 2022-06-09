/*
  Warnings:

  - You are about to drop the column `published` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `LandLord` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mobileNo]` on the table `LandLord` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LandLord_email_key";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "published";

-- AlterTable
ALTER TABLE "LandLord" DROP COLUMN "email",
ADD COLUMN     "mobileNo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "LandLord_mobileNo_key" ON "LandLord"("mobileNo");
