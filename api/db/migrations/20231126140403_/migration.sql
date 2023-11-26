/*
  Warnings:

  - You are about to drop the column `damageRatio` on the `MyDamageCalc` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `MyDamageCalc` table. All the data in the column will be lost.
  - Added the required column `rankA` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankB` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankC` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankD` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankS` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyDamageCalc" DROP COLUMN "damageRatio",
DROP COLUMN "rank",
ADD COLUMN     "rankA" INTEGER NOT NULL,
ADD COLUMN     "rankB" INTEGER NOT NULL,
ADD COLUMN     "rankC" INTEGER NOT NULL,
ADD COLUMN     "rankD" INTEGER NOT NULL,
ADD COLUMN     "rankS" INTEGER NOT NULL;
