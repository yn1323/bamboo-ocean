/*
  Warnings:

  - Added the required column `ivA` to the `MyEnemy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivB` to the `MyEnemy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivC` to the `MyEnemy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivD` to the `MyEnemy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivH` to the `MyEnemy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivS` to the `MyEnemy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivA` to the `MyPokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivB` to the `MyPokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivC` to the `MyPokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivD` to the `MyPokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivH` to the `MyPokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ivS` to the `MyPokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Move" ADD COLUMN     "myDamageCalcId" TEXT;

-- AlterTable
ALTER TABLE "MyEnemy" ADD COLUMN     "ivA" INTEGER NOT NULL,
ADD COLUMN     "ivB" INTEGER NOT NULL,
ADD COLUMN     "ivC" INTEGER NOT NULL,
ADD COLUMN     "ivD" INTEGER NOT NULL,
ADD COLUMN     "ivH" INTEGER NOT NULL,
ADD COLUMN     "ivS" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MyPokemon" ADD COLUMN     "ivA" INTEGER NOT NULL,
ADD COLUMN     "ivB" INTEGER NOT NULL,
ADD COLUMN     "ivC" INTEGER NOT NULL,
ADD COLUMN     "ivD" INTEGER NOT NULL,
ADD COLUMN     "ivH" INTEGER NOT NULL,
ADD COLUMN     "ivS" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "MyDamageCalcIndex" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "userId" TEXT NOT NULL,
    "clinentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "memo" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "MyDamageCalcIndex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyDamageCalc" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "myDamageCalcIndexId" TEXT,
    "pokemonId" TEXT NOT NULL,
    "itemId" TEXT,
    "abilityId" TEXT,
    "natureId" TEXT NOT NULL,
    "terastalId" TEXT,
    "evH" INTEGER NOT NULL,
    "evA" INTEGER NOT NULL,
    "evB" INTEGER NOT NULL,
    "evC" INTEGER NOT NULL,
    "evD" INTEGER NOT NULL,
    "evS" INTEGER NOT NULL,
    "ivH" INTEGER NOT NULL,
    "ivA" INTEGER NOT NULL,
    "ivB" INTEGER NOT NULL,
    "ivC" INTEGER NOT NULL,
    "ivD" INTEGER NOT NULL,
    "ivS" INTEGER NOT NULL,
    "damageRatio" DOUBLE PRECISION NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "MyDamageCalc_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_myDamageCalcId_fkey" FOREIGN KEY ("myDamageCalcId") REFERENCES "MyDamageCalc"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalcIndex" ADD CONSTRAINT "MyDamageCalcIndex_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_myDamageCalcIndexId_fkey" FOREIGN KEY ("myDamageCalcIndexId") REFERENCES "MyDamageCalcIndex"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_natureId_fkey" FOREIGN KEY ("natureId") REFERENCES "Nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_terastalId_fkey" FOREIGN KEY ("terastalId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
