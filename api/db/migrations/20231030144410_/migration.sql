/*
  Warnings:

  - You are about to drop the `_EvolutionFrom` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fromId]` on the table `Evolution` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_EvolutionFrom" DROP CONSTRAINT "_EvolutionFrom_A_fkey";

-- DropForeignKey
ALTER TABLE "_EvolutionFrom" DROP CONSTRAINT "_EvolutionFrom_B_fkey";

-- AlterTable
ALTER TABLE "Evolution" ADD COLUMN     "fromId" TEXT;

-- DropTable
DROP TABLE "_EvolutionFrom";

-- CreateIndex
CREATE UNIQUE INDEX "Evolution_fromId_key" ON "Evolution"("fromId");

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
