-- DropForeignKey
ALTER TABLE "Move" DROP CONSTRAINT "Move_attackTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Move" DROP CONSTRAINT "Move_typeId_fkey";

-- AlterTable
ALTER TABLE "Move" ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "attackTypeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_attackTypeId_fkey" FOREIGN KEY ("attackTypeId") REFERENCES "AttackType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
