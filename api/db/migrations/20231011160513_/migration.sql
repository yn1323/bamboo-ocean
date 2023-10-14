/*
  Warnings:

  - You are about to drop the column `enableProtect` on the `Move` table. All the data in the column will be lost.
  - You are about to drop the column `isTouchable` on the `Move` table. All the data in the column will be lost.
  - You are about to drop the column `target` on the `Move` table. All the data in the column will be lost.
  - Added the required column `isBullet` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isChangeable` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isContact` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCut` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDance` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDelay` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isJaw` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isMultipleAttack` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isMustCritical` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPowder` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPunch` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isQuick` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSound` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isWave` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isWind` to the `Move` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Move" DROP COLUMN "enableProtect",
DROP COLUMN "isTouchable",
DROP COLUMN "target",
ADD COLUMN     "isBullet" BOOLEAN NOT NULL,
ADD COLUMN     "isChangeable" BOOLEAN NOT NULL,
ADD COLUMN     "isContact" BOOLEAN NOT NULL,
ADD COLUMN     "isCut" BOOLEAN NOT NULL,
ADD COLUMN     "isDance" BOOLEAN NOT NULL,
ADD COLUMN     "isDelay" BOOLEAN NOT NULL,
ADD COLUMN     "isJaw" BOOLEAN NOT NULL,
ADD COLUMN     "isMultipleAttack" BOOLEAN NOT NULL,
ADD COLUMN     "isMustCritical" BOOLEAN NOT NULL,
ADD COLUMN     "isPowder" BOOLEAN NOT NULL,
ADD COLUMN     "isPunch" BOOLEAN NOT NULL,
ADD COLUMN     "isQuick" BOOLEAN NOT NULL,
ADD COLUMN     "isSound" BOOLEAN NOT NULL,
ADD COLUMN     "isWave" BOOLEAN NOT NULL,
ADD COLUMN     "isWind" BOOLEAN NOT NULL;
