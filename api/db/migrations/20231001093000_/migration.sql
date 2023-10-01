/*
  Warnings:

  - Added the required column `decrease` to the `Nature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `increase` to the `Nature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nature" ADD COLUMN     "decrease" TEXT NOT NULL,
ADD COLUMN     "increase" TEXT NOT NULL;
