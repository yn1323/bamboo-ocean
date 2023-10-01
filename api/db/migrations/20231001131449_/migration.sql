/*
  Warnings:

  - Added the required column `formType2` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "formType2" TEXT NOT NULL;
