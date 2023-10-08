-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "createdUserAt" TIMESTAMP(3) NOT NULL,
    "updatedUserAt" TIMESTAMP(3) NOT NULL,
    "deletedUserAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyPartyTag" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "memo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MyPartyTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyPokemonTag" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "memo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MyPokemonTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyPokemon" (
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

    CONSTRAINT "MyPokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyParty" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "memo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MyParty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MoveToMyPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MyPokemonToMyPokemonTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MyPartyToMyPartyTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MyPartyToMyPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToMyPokemon_AB_unique" ON "_MoveToMyPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToMyPokemon_B_index" ON "_MoveToMyPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyPokemonToMyPokemonTag_AB_unique" ON "_MyPokemonToMyPokemonTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MyPokemonToMyPokemonTag_B_index" ON "_MyPokemonToMyPokemonTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyPartyToMyPartyTag_AB_unique" ON "_MyPartyToMyPartyTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MyPartyToMyPartyTag_B_index" ON "_MyPartyToMyPartyTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyPartyToMyPokemon_AB_unique" ON "_MyPartyToMyPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MyPartyToMyPokemon_B_index" ON "_MyPartyToMyPokemon"("B");

-- AddForeignKey
ALTER TABLE "MyPartyTag" ADD CONSTRAINT "MyPartyTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemonTag" ADD CONSTRAINT "MyPokemonTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_natureId_fkey" FOREIGN KEY ("natureId") REFERENCES "Nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_terastalId_fkey" FOREIGN KEY ("terastalId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyPokemon" ADD CONSTRAINT "MyPokemon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyParty" ADD CONSTRAINT "MyParty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyPokemon" ADD CONSTRAINT "_MoveToMyPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyPokemon" ADD CONSTRAINT "_MoveToMyPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPokemonToMyPokemonTag" ADD CONSTRAINT "_MyPokemonToMyPokemonTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MyPokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPokemonToMyPokemonTag" ADD CONSTRAINT "_MyPokemonToMyPokemonTag_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPokemonTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPartyTag" ADD CONSTRAINT "_MyPartyToMyPartyTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MyParty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPartyTag" ADD CONSTRAINT "_MyPartyToMyPartyTag_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPartyTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPokemon" ADD CONSTRAINT "_MyPartyToMyPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "MyParty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPokemon" ADD CONSTRAINT "_MyPartyToMyPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
