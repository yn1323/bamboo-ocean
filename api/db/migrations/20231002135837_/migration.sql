-- CreateTable
CREATE TABLE "BattleRanking" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "battleIndexId" TEXT,
    "pokemonId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "BattleRanking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BattleRanking" ADD CONSTRAINT "BattleRanking_battleIndexId_fkey" FOREIGN KEY ("battleIndexId") REFERENCES "BattleIndex"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRanking" ADD CONSTRAINT "BattleRanking_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
