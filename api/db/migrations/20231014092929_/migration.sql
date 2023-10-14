/*
  Warnings:

  - Added the required column `imageLargeUrl` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSmallUrl` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageLargeUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSmallUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "imageLargeUrl" TEXT NOT NULL,
ADD COLUMN     "imageSmallUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "imageLargeUrl" TEXT NOT NULL,
ADD COLUMN     "imageSmallUrl" TEXT NOT NULL;
