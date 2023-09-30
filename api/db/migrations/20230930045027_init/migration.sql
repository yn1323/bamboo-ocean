/*
  Warnings:

  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Country";

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeRelation" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,
    "powerRatio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TypeRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TypeRelation" ADD CONSTRAINT "TypeRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeRelation" ADD CONSTRAINT "TypeRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
