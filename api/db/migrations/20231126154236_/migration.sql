/*
  Warnings:

  - You are about to drop the column `clientId` on the `MyDamageCalcIndex` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyDamageCalc" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MyDamageCalcIndex" DROP COLUMN "clientId";
