/*
  Warnings:

  - Added the required column `extraDamageDisguise` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraDamageLifeOrb` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraDamageRockyHelmet` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraDamageStealthRock` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `field` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasLightScreen` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasReflect` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBurn` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCharge` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCritical` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weather` to the `MyDamageCalc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyDamageCalc" ADD COLUMN     "extraDamageDisguise" BOOLEAN NOT NULL,
ADD COLUMN     "extraDamageLifeOrb" BOOLEAN NOT NULL,
ADD COLUMN     "extraDamageRockyHelmet" BOOLEAN NOT NULL,
ADD COLUMN     "extraDamageStealthRock" BOOLEAN NOT NULL,
ADD COLUMN     "field" TEXT NOT NULL,
ADD COLUMN     "hasLightScreen" BOOLEAN NOT NULL,
ADD COLUMN     "hasReflect" BOOLEAN NOT NULL,
ADD COLUMN     "isBurn" BOOLEAN NOT NULL,
ADD COLUMN     "isCharge" BOOLEAN NOT NULL,
ADD COLUMN     "isCritical" BOOLEAN NOT NULL,
ADD COLUMN     "weather" TEXT NOT NULL;
