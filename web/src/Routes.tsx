// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="BattleDataTerastals" titleTo="battleDataTerastals" buttonLabel="New BattleDataTerastal" buttonTo="newBattleDataTerastal">
        <Route path="/battle-data-terastals/new" page={BattleDataTerastalNewBattleDataTerastalPage} name="newBattleDataTerastal" />
        <Route path="/battle-data-terastals/{id}/edit" page={BattleDataTerastalEditBattleDataTerastalPage} name="editBattleDataTerastal" />
        <Route path="/battle-data-terastals/{id}" page={BattleDataTerastalBattleDataTerastalPage} name="battleDataTerastal" />
        <Route path="/battle-data-terastals" page={BattleDataTerastalBattleDataTerastalsPage} name="battleDataTerastals" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataItems" titleTo="battleDataItems" buttonLabel="New BattleDataItem" buttonTo="newBattleDataItem">
        <Route path="/battle-data-items/new" page={BattleDataItemNewBattleDataItemPage} name="newBattleDataItem" />
        <Route path="/battle-data-items/{id}/edit" page={BattleDataItemEditBattleDataItemPage} name="editBattleDataItem" />
        <Route path="/battle-data-items/{id}" page={BattleDataItemBattleDataItemPage} name="battleDataItem" />
        <Route path="/battle-data-items" page={BattleDataItemBattleDataItemsPage} name="battleDataItems" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataNatures" titleTo="battleDataNatures" buttonLabel="New BattleDataNature" buttonTo="newBattleDataNature">
        <Route path="/battle-data-natures/new" page={BattleDataNatureNewBattleDataNaturePage} name="newBattleDataNature" />
        <Route path="/battle-data-natures/{id}/edit" page={BattleDataNatureEditBattleDataNaturePage} name="editBattleDataNature" />
        <Route path="/battle-data-natures/{id}" page={BattleDataNatureBattleDataNaturePage} name="battleDataNature" />
        <Route path="/battle-data-natures" page={BattleDataNatureBattleDataNaturesPage} name="battleDataNatures" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataAbilities" titleTo="battleDataAbilities" buttonLabel="New BattleDataAbility" buttonTo="newBattleDataAbility">
        <Route path="/battle-data-abilities/new" page={BattleDataAbilityNewBattleDataAbilityPage} name="newBattleDataAbility" />
        <Route path="/battle-data-abilities/{id}/edit" page={BattleDataAbilityEditBattleDataAbilityPage} name="editBattleDataAbility" />
        <Route path="/battle-data-abilities/{id}" page={BattleDataAbilityBattleDataAbilityPage} name="battleDataAbility" />
        <Route path="/battle-data-abilities" page={BattleDataAbilityBattleDataAbilitiesPage} name="battleDataAbilities" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataMoves" titleTo="battleDataMoves" buttonLabel="New BattleDataMove" buttonTo="newBattleDataMove">
        <Route path="/battle-data-moves/new" page={BattleDataMoveNewBattleDataMovePage} name="newBattleDataMove" />
        <Route path="/battle-data-moves/{id}/edit" page={BattleDataMoveEditBattleDataMovePage} name="editBattleDataMove" />
        <Route path="/battle-data-moves/{id}" page={BattleDataMoveBattleDataMovePage} name="battleDataMove" />
        <Route path="/battle-data-moves" page={BattleDataMoveBattleDataMovesPage} name="battleDataMoves" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDatas" titleTo="battleDatas" buttonLabel="New BattleData" buttonTo="newBattleData">
        <Route path="/battle-datas/new" page={BattleDataNewBattleDataPage} name="newBattleData" />
        <Route path="/battle-datas/{id}/edit" page={BattleDataEditBattleDataPage} name="editBattleData" />
        <Route path="/battle-datas/{id}" page={BattleDataBattleDataPage} name="battleData" />
        <Route path="/battle-datas" page={BattleDataBattleDatasPage} name="battleDatas" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleIndices" titleTo="battleIndices" buttonLabel="New BattleIndex" buttonTo="newBattleIndex">
        <Route path="/battle-indices/new" page={BattleIndexNewBattleIndexPage} name="newBattleIndex" />
        <Route path="/battle-indices/{id}/edit" page={BattleIndexEditBattleIndexPage} name="editBattleIndex" />
        <Route path="/battle-indices/{id}" page={BattleIndexBattleIndexPage} name="battleIndex" />
        <Route path="/battle-indices" page={BattleIndexBattleIndicesPage} name="battleIndices" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Forms" titleTo="forms" buttonLabel="New Form" buttonTo="newForm">
        <Route path="/forms/new" page={FormNewFormPage} name="newForm" />
        <Route path="/forms/{id}/edit" page={FormEditFormPage} name="editForm" />
        <Route path="/forms/{id}" page={FormFormPage} name="form" />
        <Route path="/forms" page={FormFormsPage} name="forms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Natures" titleTo="natures" buttonLabel="New Nature" buttonTo="newNature">
        <Route path="/natures/new" page={NatureNewNaturePage} name="newNature" />
        <Route path="/natures/{id}/edit" page={NatureEditNaturePage} name="editNature" />
        <Route path="/natures/{id}" page={NatureNaturePage} name="nature" />
        <Route path="/natures" page={NatureNaturesPage} name="natures" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Pokemons" titleTo="pokemons" buttonLabel="New Pokemon" buttonTo="newPokemon">
        <Route path="/pokemons/new" page={PokemonNewPokemonPage} name="newPokemon" />
        <Route path="/pokemons/{id}/edit" page={PokemonEditPokemonPage} name="editPokemon" />
        <Route path="/pokemons/{id}" page={PokemonPokemonPage} name="pokemon" />
        <Route path="/pokemons" page={PokemonPokemonsPage} name="pokemons" />
      </Set>
      <Set wrap={ScaffoldLayout} title="AttackTypes" titleTo="attackTypes" buttonLabel="New AttackType" buttonTo="newAttackType">
        <Route path="/attack-types/new" page={AttackTypeNewAttackTypePage} name="newAttackType" />
        <Route path="/attack-types/{id}/edit" page={AttackTypeEditAttackTypePage} name="editAttackType" />
        <Route path="/attack-types/{id}" page={AttackTypeAttackTypePage} name="attackType" />
        <Route path="/attack-types" page={AttackTypeAttackTypesPage} name="attackTypes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Abilities" titleTo="abilities" buttonLabel="New Ability" buttonTo="newAbility">
        <Route path="/abilities/new" page={AbilityNewAbilityPage} name="newAbility" />
        <Route path="/abilities/{id}/edit" page={AbilityEditAbilityPage} name="editAbility" />
        <Route path="/abilities/{id}" page={AbilityAbilityPage} name="ability" />
        <Route path="/abilities" page={AbilityAbilitiesPage} name="abilities" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/items/new" page={ItemNewItemPage} name="newItem" />
        <Route path="/items/{id}/edit" page={ItemEditItemPage} name="editItem" />
        <Route path="/items/{id}" page={ItemItemPage} name="item" />
        <Route path="/items" page={ItemItemsPage} name="items" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TypeRelations" titleTo="typeRelations" buttonLabel="New TypeRelation" buttonTo="newTypeRelation">
        <Route path="/type-relations/new" page={TypeRelationNewTypeRelationPage} name="newTypeRelation" />
        <Route path="/type-relations/{id}/edit" page={TypeRelationEditTypeRelationPage} name="editTypeRelation" />
        <Route path="/type-relations/{id}" page={TypeRelationTypeRelationPage} name="typeRelation" />
        <Route path="/type-relations" page={TypeRelationTypeRelationsPage} name="typeRelations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Types" titleTo="types" buttonLabel="New Type" buttonTo="newType">
        <Route path="/types/new" page={TypeNewTypePage} name="newType" />
        <Route path="/types/{id}/edit" page={TypeEditTypePage} name="editType" />
        <Route path="/types/{id}" page={TypeTypePage} name="type" />
        <Route path="/types" page={TypeTypesPage} name="types" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Moves" titleTo="moves" buttonLabel="New Move" buttonTo="newMove">
        <Route path="/moves/new" page={MoveNewMovePage} name="newMove" />
        <Route path="/moves/{id}/edit" page={MoveEditMovePage} name="editMove" />
        <Route path="/moves/{id}" page={MoveMovePage} name="move" />
        <Route path="/moves" page={MoveMovesPage} name="moves" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
