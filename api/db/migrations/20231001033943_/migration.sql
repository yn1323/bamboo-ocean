/*
  Warnings:

  - You are about to drop the column `dateAt` on the `BattleIndex` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `BattleIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAt` to the `BattleIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BattleIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `BattleIndex` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BattleIndex" DROP COLUMN "dateAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;
