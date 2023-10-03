-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeRelation" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TypeRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttackType" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "AttackType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "target" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeId" TEXT,
    "attackTypeId" TEXT,
    "power" INTEGER NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "pp" INTEGER NOT NULL,
    "isTouchable" BOOLEAN NOT NULL,
    "enableProtect" BOOLEAN NOT NULL,
    "battleIndex" TEXT NOT NULL,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "form" TEXT NOT NULL,
    "no" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "statusH" INTEGER NOT NULL,
    "statusA" INTEGER NOT NULL,
    "statusB" INTEGER NOT NULL,
    "statusC" INTEGER NOT NULL,
    "statusD" INTEGER NOT NULL,
    "statusS" INTEGER NOT NULL,
    "base64Image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,
    "battleFormIndex" TEXT NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nature" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,
    "increase" TEXT NOT NULL,
    "decrease" TEXT NOT NULL,

    CONSTRAINT "Nature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "no" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "formType2" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleRanking" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "battleIndexId" TEXT,
    "pokemonId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "BattleRanking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleIndex" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BattleIndex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleData" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "battleIndexId" TEXT NOT NULL,
    "pokemonId" TEXT NOT NULL,
    "no" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "formId" TEXT,

    CONSTRAINT "BattleData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleDataMove" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "moveId" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "battleDataId" TEXT NOT NULL,

    CONSTRAINT "BattleDataMove_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleDataAbility" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "abilityId" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "battleDataId" TEXT NOT NULL,

    CONSTRAINT "BattleDataAbility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleDataNature" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "natureId" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "battleDataId" TEXT NOT NULL,

    CONSTRAINT "BattleDataNature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleDataItem" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "itemId" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "battleDataId" TEXT NOT NULL,

    CONSTRAINT "BattleDataItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleDataTerastal" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "typeId" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "battleDataId" TEXT NOT NULL,

    CONSTRAINT "BattleDataTerastal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AbilityToPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MoveToPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToPokemon_AB_unique" ON "_AbilityToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "_AbilityToPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToPokemon_AB_unique" ON "_MoveToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToPokemon_B_index" ON "_MoveToPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- AddForeignKey
ALTER TABLE "TypeRelation" ADD CONSTRAINT "TypeRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeRelation" ADD CONSTRAINT "TypeRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_attackTypeId_fkey" FOREIGN KEY ("attackTypeId") REFERENCES "AttackType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRanking" ADD CONSTRAINT "BattleRanking_battleIndexId_fkey" FOREIGN KEY ("battleIndexId") REFERENCES "BattleIndex"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRanking" ADD CONSTRAINT "BattleRanking_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleData" ADD CONSTRAINT "BattleData_battleIndexId_fkey" FOREIGN KEY ("battleIndexId") REFERENCES "BattleIndex"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleData" ADD CONSTRAINT "BattleData_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleData" ADD CONSTRAINT "BattleData_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataMove" ADD CONSTRAINT "BattleDataMove_moveId_fkey" FOREIGN KEY ("moveId") REFERENCES "Move"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataMove" ADD CONSTRAINT "BattleDataMove_battleDataId_fkey" FOREIGN KEY ("battleDataId") REFERENCES "BattleData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataAbility" ADD CONSTRAINT "BattleDataAbility_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataAbility" ADD CONSTRAINT "BattleDataAbility_battleDataId_fkey" FOREIGN KEY ("battleDataId") REFERENCES "BattleData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataNature" ADD CONSTRAINT "BattleDataNature_natureId_fkey" FOREIGN KEY ("natureId") REFERENCES "Nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataNature" ADD CONSTRAINT "BattleDataNature_battleDataId_fkey" FOREIGN KEY ("battleDataId") REFERENCES "BattleData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataItem" ADD CONSTRAINT "BattleDataItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataItem" ADD CONSTRAINT "BattleDataItem_battleDataId_fkey" FOREIGN KEY ("battleDataId") REFERENCES "BattleData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataTerastal" ADD CONSTRAINT "BattleDataTerastal_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleDataTerastal" ADD CONSTRAINT "BattleDataTerastal_battleDataId_fkey" FOREIGN KEY ("battleDataId") REFERENCES "BattleData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToPokemon" ADD CONSTRAINT "_MoveToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToPokemon" ADD CONSTRAINT "_MoveToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
