/*
  Warnings:

  - Added the required column `base64Image` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "base64Image" TEXT NOT NULL;
