/*
  Warnings:

  - You are about to drop the column `hitRange` on the `Move` table. All the data in the column will be lost.
  - Added the required column `battleIndex` to the `Ability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accuracy` to the `Move` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ability" ADD COLUMN     "battleIndex" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Move" DROP COLUMN "hitRange",
ADD COLUMN     "accuracy" INTEGER NOT NULL;
