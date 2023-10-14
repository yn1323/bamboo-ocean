-- AlterTable
ALTER TABLE "Move" ADD COLUMN     "MyEnemyId" TEXT;

-- CreateTable
CREATE TABLE "Evolution" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "preEvolutionId" TEXT NOT NULL,
    "postEvolutionId" TEXT NOT NULL,

    CONSTRAINT "Evolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyEnemyTag" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "memo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MyEnemyTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyEnemy" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "evH" INTEGER NOT NULL,
    "evA" INTEGER NOT NULL,
    "evB" INTEGER NOT NULL,
    "evC" INTEGER NOT NULL,
    "evD" INTEGER NOT NULL,
    "evS" INTEGER NOT NULL,
    "memo" TEXT NOT NULL,
    "pokemonId" TEXT NOT NULL,
    "itemId" TEXT,
    "abilityId" TEXT,
    "natureId" TEXT NOT NULL,
    "terastalId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MyEnemy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyPokemonPros" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "myPokemonId" TEXT NOT NULL,
    "myEnemyId" TEXT NOT NULL,

    CONSTRAINT "MyPokemonPros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyPokemonCons" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "myPokemonId" TEXT NOT NULL,
    "myEnemyId" TEXT NOT NULL,

    CONSTRAINT "MyPokemonCons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MyEnemyToMyEnemyTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MyEnemyToMyEnemyTag_AB_unique" ON "_MyEnemyToMyEnemyTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MyEnemyToMyEnemyTag_B_index" ON "_MyEnemyToMyEnemyTag"("B");

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_MyEnemyId_fkey" FOREIGN KEY ("MyEnemyId") REFERENCES "MyEnemy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_preEvolutionId_fkey" FOREIGN KEY ("preEvolutionId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_postEvolutionId_fkey" FOREIGN KEY ("postEvolutionId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemyTag" ADD CONSTRAINT "MyEnemyTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemy" ADD CONSTRAINT "MyEnemy_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemy" ADD CONSTRAINT "MyEnemy_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemy" ADD CONSTRAINT "MyEnemy_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemy" ADD CONSTRAINT "MyEnemy_natureId_fkey" FOREIGN KEY ("natureId") REFERENCES "Nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemy" ADD CONSTRAINT "MyEnemy_terastalId_fkey" FOREIGN KEY ("terastalId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEnemy" ADD CONSTRAINT "MyEnemy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemonPros" ADD CONSTRAINT "MyPokemonPros_myPokemonId_fkey" FOREIGN KEY ("myPokemonId") REFERENCES "MyPokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemonPros" ADD CONSTRAINT "MyPokemonPros_myEnemyId_fkey" FOREIGN KEY ("myEnemyId") REFERENCES "MyEnemy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemonCons" ADD CONSTRAINT "MyPokemonCons_myPokemonId_fkey" FOREIGN KEY ("myPokemonId") REFERENCES "MyPokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemonCons" ADD CONSTRAINT "MyPokemonCons_myEnemyId_fkey" FOREIGN KEY ("myEnemyId") REFERENCES "MyEnemy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyEnemyToMyEnemyTag" ADD CONSTRAINT "_MyEnemyToMyEnemyTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MyEnemy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyEnemyToMyEnemyTag" ADD CONSTRAINT "_MyEnemyToMyEnemyTag_B_fkey" FOREIGN KEY ("B") REFERENCES "MyEnemyTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
