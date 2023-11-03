/*
  Warnings:

  - You are about to drop the column `fromId` on the `Evolution` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evolution" DROP CONSTRAINT "Evolution_fromId_fkey";

-- DropIndex
DROP INDEX "Evolution_fromId_key";

-- AlterTable
ALTER TABLE "Evolution" DROP COLUMN "fromId";

-- CreateTable
CREATE TABLE "_EvolutionFrom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EvolutionFrom_AB_unique" ON "_EvolutionFrom"("A", "B");

-- CreateIndex
CREATE INDEX "_EvolutionFrom_B_index" ON "_EvolutionFrom"("B");

-- AddForeignKey
ALTER TABLE "_EvolutionFrom" ADD CONSTRAINT "_EvolutionFrom_A_fkey" FOREIGN KEY ("A") REFERENCES "Evolution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionFrom" ADD CONSTRAINT "_EvolutionFrom_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
