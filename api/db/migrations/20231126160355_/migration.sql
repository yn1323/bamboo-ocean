/*
  Warnings:

  - You are about to drop the column `clientId` on the `MyDamageCalc` table. All the data in the column will be lost.
  - Added the required column `client` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyDamageCalc" DROP COLUMN "clientId",
ADD COLUMN     "client" TEXT NOT NULL;
