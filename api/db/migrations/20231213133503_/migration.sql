-- AlterTable
ALTER TABLE "MyPokemon" ADD COLUMN     "myTeamId" TEXT;

-- CreateTable
CREATE TABLE "MyTeam" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "teamId" TEXT NOT NULL,
    "memo" TEXT NOT NULL,

    CONSTRAINT "MyTeam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_myTeamId_fkey" FOREIGN KEY ("myTeamId") REFERENCES "MyTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;
