/*
  Warnings:

  - You are about to drop the column `postEvolutionId` on the `Evolution` table. All the data in the column will be lost.
  - You are about to drop the column `preEvolutionId` on the `Evolution` table. All the data in the column will be lost.
  - Added the required column `pokemonId` to the `Evolution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Evolution" DROP CONSTRAINT "Evolution_postEvolutionId_fkey";

-- DropForeignKey
ALTER TABLE "Evolution" DROP CONSTRAINT "Evolution_preEvolutionId_fkey";

-- AlterTable
ALTER TABLE "Evolution" DROP COLUMN "postEvolutionId",
DROP COLUMN "preEvolutionId",
ADD COLUMN     "pokemonId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_EvolutionFrom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EvolutionTo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EvolutionFrom_AB_unique" ON "_EvolutionFrom"("A", "B");

-- CreateIndex
CREATE INDEX "_EvolutionFrom_B_index" ON "_EvolutionFrom"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EvolutionTo_AB_unique" ON "_EvolutionTo"("A", "B");

-- CreateIndex
CREATE INDEX "_EvolutionTo_B_index" ON "_EvolutionTo"("B");

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionFrom" ADD CONSTRAINT "_EvolutionFrom_A_fkey" FOREIGN KEY ("A") REFERENCES "Evolution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionFrom" ADD CONSTRAINT "_EvolutionFrom_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionTo" ADD CONSTRAINT "_EvolutionTo_A_fkey" FOREIGN KEY ("A") REFERENCES "Evolution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionTo" ADD CONSTRAINT "_EvolutionTo_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
