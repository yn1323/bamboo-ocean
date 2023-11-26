/*
  Warnings:

  - Added the required column `order` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyDamageCalc" ADD COLUMN     "order" INTEGER NOT NULL;
