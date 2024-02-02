-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,
    "textImageUrl" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "terastalImageUrl" TEXT NOT NULL,

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
    "base64Image" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageSmallUrl" TEXT NOT NULL,
    "imageLargeUrl" TEXT NOT NULL,

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
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "AttackType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "detail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeId" TEXT,
    "attackTypeId" TEXT,
    "power" INTEGER NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "pp" INTEGER NOT NULL,
    "isContact" BOOLEAN NOT NULL,
    "isQuick" BOOLEAN NOT NULL,
    "isDelay" BOOLEAN NOT NULL,
    "isChangeable" BOOLEAN NOT NULL,
    "isMultipleAttack" BOOLEAN NOT NULL,
    "isMustCritical" BOOLEAN NOT NULL,
    "isPunch" BOOLEAN NOT NULL,
    "isSound" BOOLEAN NOT NULL,
    "isPowder" BOOLEAN NOT NULL,
    "isWave" BOOLEAN NOT NULL,
    "isJaw" BOOLEAN NOT NULL,
    "isBullet" BOOLEAN NOT NULL,
    "isDance" BOOLEAN NOT NULL,
    "isWind" BOOLEAN NOT NULL,
    "isCut" BOOLEAN NOT NULL,
    "battleIndex" TEXT NOT NULL,
    "myDamageCalcId" TEXT,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "form" TEXT NOT NULL,
    "no" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "statusH" INTEGER NOT NULL,
    "statusA" INTEGER NOT NULL,
    "statusB" INTEGER NOT NULL,
    "statusC" INTEGER NOT NULL,
    "statusD" INTEGER NOT NULL,
    "statusS" INTEGER NOT NULL,
    "base64Image" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageSmallUrl" TEXT NOT NULL,
    "imageLargeUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "battleIndex" TEXT NOT NULL,
    "battleFormIndex" TEXT NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evolution" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "pokemonId" TEXT NOT NULL,

    CONSTRAINT "Evolution_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "BattleIndex" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "capturedAt" TIMESTAMP(3) NOT NULL,
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
    "ivH" INTEGER NOT NULL,
    "ivA" INTEGER NOT NULL,
    "ivB" INTEGER NOT NULL,
    "ivC" INTEGER NOT NULL,
    "ivD" INTEGER NOT NULL,
    "ivS" INTEGER NOT NULL,
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
    "ivH" INTEGER NOT NULL,
    "ivA" INTEGER NOT NULL,
    "ivB" INTEGER NOT NULL,
    "ivC" INTEGER NOT NULL,
    "ivD" INTEGER NOT NULL,
    "ivS" INTEGER NOT NULL,
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
CREATE TABLE "MyParty" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "memo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MyParty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyDamageCalcIndex" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "memo" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "MyDamageCalcIndex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyDamageCalc" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "clientId" TEXT NOT NULL,
    "myDamageCalcIndexId" TEXT,
    "pokemonId" TEXT NOT NULL,
    "itemId" TEXT,
    "abilityId" TEXT,
    "natureId" TEXT NOT NULL,
    "terastalId" TEXT,
    "evH" INTEGER NOT NULL,
    "evA" INTEGER NOT NULL,
    "evB" INTEGER NOT NULL,
    "evC" INTEGER NOT NULL,
    "evD" INTEGER NOT NULL,
    "evS" INTEGER NOT NULL,
    "ivH" INTEGER NOT NULL,
    "ivA" INTEGER NOT NULL,
    "ivB" INTEGER NOT NULL,
    "ivC" INTEGER NOT NULL,
    "ivD" INTEGER NOT NULL,
    "ivS" INTEGER NOT NULL,
    "rankA" INTEGER NOT NULL,
    "rankB" INTEGER NOT NULL,
    "rankC" INTEGER NOT NULL,
    "rankD" INTEGER NOT NULL,
    "rankS" INTEGER NOT NULL,
    "side" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "MyDamageCalc_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "_MoveToMyPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MoveToMyEnemy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EvolutionFrom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EvolutionTo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MyPokemonToMyPokemonTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MyEnemyToMyEnemyTag" (
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
CREATE UNIQUE INDEX "_AbilityToPokemon_AB_unique" ON "_AbilityToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "_AbilityToPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToPokemon_AB_unique" ON "_MoveToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToPokemon_B_index" ON "_MoveToPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToMyPokemon_AB_unique" ON "_MoveToMyPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToMyPokemon_B_index" ON "_MoveToMyPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToMyEnemy_AB_unique" ON "_MoveToMyEnemy"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToMyEnemy_B_index" ON "_MoveToMyEnemy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EvolutionFrom_AB_unique" ON "_EvolutionFrom"("A", "B");

-- CreateIndex
CREATE INDEX "_EvolutionFrom_B_index" ON "_EvolutionFrom"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EvolutionTo_AB_unique" ON "_EvolutionTo"("A", "B");

-- CreateIndex
CREATE INDEX "_EvolutionTo_B_index" ON "_EvolutionTo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyPokemonToMyPokemonTag_AB_unique" ON "_MyPokemonToMyPokemonTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MyPokemonToMyPokemonTag_B_index" ON "_MyPokemonToMyPokemonTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyEnemyToMyEnemyTag_AB_unique" ON "_MyEnemyToMyEnemyTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MyEnemyToMyEnemyTag_B_index" ON "_MyEnemyToMyEnemyTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyPartyToMyPartyTag_AB_unique" ON "_MyPartyToMyPartyTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MyPartyToMyPartyTag_B_index" ON "_MyPartyToMyPartyTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MyPartyToMyPokemon_AB_unique" ON "_MyPartyToMyPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MyPartyToMyPokemon_B_index" ON "_MyPartyToMyPokemon"("B");

-- AddForeignKey
ALTER TABLE "TypeRelation" ADD CONSTRAINT "TypeRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeRelation" ADD CONSTRAINT "TypeRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_attackTypeId_fkey" FOREIGN KEY ("attackTypeId") REFERENCES "AttackType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_myDamageCalcId_fkey" FOREIGN KEY ("myDamageCalcId") REFERENCES "MyDamageCalc"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "MyParty" ADD CONSTRAINT "MyParty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalcIndex" ADD CONSTRAINT "MyDamageCalcIndex_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_myDamageCalcIndexId_fkey" FOREIGN KEY ("myDamageCalcIndexId") REFERENCES "MyDamageCalcIndex"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_natureId_fkey" FOREIGN KEY ("natureId") REFERENCES "Nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyDamageCalc" ADD CONSTRAINT "MyDamageCalc_terastalId_fkey" FOREIGN KEY ("terastalId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToPokemon" ADD CONSTRAINT "_MoveToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToPokemon" ADD CONSTRAINT "_MoveToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyPokemon" ADD CONSTRAINT "_MoveToMyPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyPokemon" ADD CONSTRAINT "_MoveToMyPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyEnemy" ADD CONSTRAINT "_MoveToMyEnemy_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToMyEnemy" ADD CONSTRAINT "_MoveToMyEnemy_B_fkey" FOREIGN KEY ("B") REFERENCES "MyEnemy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionFrom" ADD CONSTRAINT "_EvolutionFrom_A_fkey" FOREIGN KEY ("A") REFERENCES "Evolution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionFrom" ADD CONSTRAINT "_EvolutionFrom_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionTo" ADD CONSTRAINT "_EvolutionTo_A_fkey" FOREIGN KEY ("A") REFERENCES "Evolution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvolutionTo" ADD CONSTRAINT "_EvolutionTo_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPokemonToMyPokemonTag" ADD CONSTRAINT "_MyPokemonToMyPokemonTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MyPokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPokemonToMyPokemonTag" ADD CONSTRAINT "_MyPokemonToMyPokemonTag_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPokemonTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyEnemyToMyEnemyTag" ADD CONSTRAINT "_MyEnemyToMyEnemyTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MyEnemy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyEnemyToMyEnemyTag" ADD CONSTRAINT "_MyEnemyToMyEnemyTag_B_fkey" FOREIGN KEY ("B") REFERENCES "MyEnemyTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPartyTag" ADD CONSTRAINT "_MyPartyToMyPartyTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MyParty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPartyTag" ADD CONSTRAINT "_MyPartyToMyPartyTag_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPartyTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPokemon" ADD CONSTRAINT "_MyPartyToMyPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "MyParty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MyPartyToMyPokemon" ADD CONSTRAINT "_MyPartyToMyPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "MyPokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
