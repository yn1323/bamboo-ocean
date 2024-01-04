/*
  Warnings:

  - You are about to drop the column `myTeamId` on the `MyPokemon` table. All the data in the column will be lost.
  - You are about to drop the `MyTeam` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamId` to the `MyPartyTag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MyPokemon" DROP CONSTRAINT "MyPokemon_myTeamId_fkey";

-- AlterTable
ALTER TABLE "MyPartyTag" ADD COLUMN     "teamId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MyPokemon" DROP COLUMN "myTeamId";

-- DropTable
DROP TABLE "MyTeam";
