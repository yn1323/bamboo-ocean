/*
  Warnings:

  - You are about to drop the column `form` on the `BattleData` table. All the data in the column will be lost.
  - Added the required column `no` to the `BattleData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BattleData" DROP COLUMN "form",
ADD COLUMN     "no" TEXT NOT NULL;
