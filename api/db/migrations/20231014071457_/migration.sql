/*
  Warnings:

  - You are about to drop the column `MyEnemyId` on the `Move` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Move" DROP CONSTRAINT "Move_MyEnemyId_fkey";

-- AlterTable
ALTER TABLE "Move" DROP COLUMN "MyEnemyId";

-- CreateTable
CREATE TABLE "_MoveToMyEnemy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToMyEnemy_AB_unique" ON "_MoveToMyEnemy"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToMyEnemy_B_index" ON "_MoveToMyEnemy"("B");

-- AddForeignKey
ALTER TABLE "_MoveToMyEnemy" ADD CONSTRAINT "_MoveToMyEnemy_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyEnemy" ADD CONSTRAINT "_MoveToMyEnemy_B_fkey" FOREIGN KEY ("B") REFERENCES "MyEnemy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
