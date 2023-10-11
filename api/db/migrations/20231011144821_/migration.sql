/*
  Warnings:

  - Added the required column `imageUrl` to the `AttackType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terastalImageUrl` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textImageUrl` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AttackType" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "terastalImageUrl" TEXT NOT NULL,
ADD COLUMN     "textImageUrl" TEXT NOT NULL;
