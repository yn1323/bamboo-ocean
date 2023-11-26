/*
  Warnings:

  - Added the required column `side` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyDamageCalc" ADD COLUMN     "side" TEXT NOT NULL;
