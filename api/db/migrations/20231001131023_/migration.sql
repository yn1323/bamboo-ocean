/*
  Warnings:

  - You are about to drop the column `key` on the `Form` table. All the data in the column will be lost.
  - Added the required column `formType` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BattleData" ADD COLUMN     "formId" TEXT,
ALTER COLUMN "form" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Form" DROP COLUMN "key",
ADD COLUMN     "formType" TEXT NOT NULL,
ADD COLUMN     "no" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BattleData" ADD CONSTRAINT "BattleData_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;
