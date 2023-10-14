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
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Pokemons" titleTo="pokemons" buttonLabel="New Pokemon" buttonTo="newPokemon">
        <Route path="/pokemons/new" page={PokemonNewPokemonPage} name="newPokemon" />
        <Route path="/pokemons/{id}/edit" page={PokemonEditPokemonPage} name="editPokemon" />
        <Route path="/pokemons/{id}" page={PokemonPokemonPage} name="pokemon" />
        <Route path="/pokemons" page={PokemonPokemonsPage} name="pokemons" />
      </Set>
      <Set wrap={ScaffoldLayout} title="MyPokemonTags" titleTo="myPokemonTags" buttonLabel="New MyPokemonTag" buttonTo="newMyPokemonTag">
        <Route path="/base/my-pokemon-tags/new" page={BaseMyPokemonTagMyPokemonTagsPage} name="newMyPokemonTag" />
        <Route path="/base/my-pokemon-tags/{id}/edit" page={BaseMyPokemonTagEditMyPokemonTagPage} name="editMyPokemonTag" />
        <Route path="/base/my-pokemon-tags/{id}" page={BaseMyPokemonTagMyPokemonTagPage} name="myPokemonTag" />
        <Route path="/base/my-pokemon-tags" page={BaseMyPokemonTagMyPokemonTagsPage} name="myPokemonTags" />
      </Set>
      <Set wrap={ScaffoldLayout} title="MyPartyTags" titleTo="myPartyTags" buttonLabel="New MyPartyTag" buttonTo="newMyPartyTag">
        <Route path="/base/my-party-tags/new" page={BaseMyPartyTagNewMyPartyTagPage} name="newMyPartyTag" />
        <Route path="/base/my-party-tags/{id}/edit" page={BaseMyPartyTagEditMyPartyTagPage} name="editMyPartyTag" />
        <Route path="/base/my-party-tags/{id}" page={BaseMyPartyTagMyPartyTagPage} name="myPartyTag" />
        <Route path="/base/my-party-tags" page={BaseMyPartyTagMyPartyTagsPage} name="myPartyTags" />
      </Set>
      <Set wrap={ScaffoldLayout} title="MyParties" titleTo="myParties" buttonLabel="New MyParty" buttonTo="newMyParty">
        <Route path="/base/my-parties/new" page={BaseMyPartyNewMyPartyPage} name="newMyParty" />
        <Route path="/base/my-parties/{id}/edit" page={BaseMyPartyEditMyPartyPage} name="editMyParty" />
        <Route path="/base/my-parties/{id}" page={BaseMyPartyMyPartyPage} name="myParty" />
        <Route path="/base/my-parties" page={BaseMyPartyMyPartiesPage} name="myParties" />
      </Set>
      <Set wrap={ScaffoldLayout} title="MyPokemons" titleTo="myPokemons" buttonLabel="New MyPokemon" buttonTo="newMyPokemon">
        <Route path="/base/my-pokemons/new" page={BaseMyPokemonNewMyPokemonPage} name="newMyPokemon" />
        <Route path="/base/my-pokemons/{id}/edit" page={BaseMyPokemonEditMyPokemonPage} name="editMyPokemon" />
        <Route path="/base/my-pokemons/{id}" page={BaseMyPokemonMyPokemonPage} name="myPokemon" />
        <Route path="/base/my-pokemons" page={BaseMyPokemonMyPokemonsPage} name="myPokemons" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/base/users/new" page={BaseUserNewUserPage} name="newUser" />
        <Route path="/base/users/{id}/edit" page={BaseUserEditUserPage} name="editUser" />
        <Route path="/base/users/{id}" page={BaseUserUserPage} name="user" />
        <Route path="/base/users" page={BaseUserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataTerastals" titleTo="battleDataTerastals" buttonLabel="New BattleDataTerastal" buttonTo="newBattleDataTerastal">
        <Route path="/base/battle-data-terastals/new" page={BaseBattleDataTerastalNewBattleDataTerastalPage} name="newBattleDataTerastal" />
        <Route path="/base/battle-data-terastals/{id}/edit" page={BaseBattleDataTerastalEditBattleDataTerastalPage} name="editBattleDataTerastal" />
        <Route path="/base/battle-data-terastals/{id}" page={BaseBattleDataTerastalBattleDataTerastalPage} name="battleDataTerastal" />
        <Route path="/base/battle-data-terastals" page={BaseBattleDataTerastalBattleDataTerastalsPage} name="battleDataTerastals" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataItems" titleTo="battleDataItems" buttonLabel="New BattleDataItem" buttonTo="newBattleDataItem">
        <Route path="/base/battle-data-items/new" page={BaseBattleDataItemNewBattleDataItemPage} name="newBattleDataItem" />
        <Route path="/base/battle-data-items/{id}/edit" page={BaseBattleDataItemEditBattleDataItemPage} name="editBattleDataItem" />
        <Route path="/base/battle-data-items/{id}" page={BaseBattleDataItemBattleDataItemPage} name="battleDataItem" />
        <Route path="/base/battle-data-items" page={BaseBattleDataItemBattleDataItemsPage} name="battleDataItems" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataNatures" titleTo="battleDataNatures" buttonLabel="New BattleDataNature" buttonTo="newBattleDataNature">
        <Route path="/base/battle-data-natures/new" page={BaseBattleDataNatureNewBattleDataNaturePage} name="newBattleDataNature" />
        <Route path="/base/battle-data-natures/{id}/edit" page={BaseBattleDataNatureEditBattleDataNaturePage} name="editBattleDataNature" />
        <Route path="/base/battle-data-natures/{id}" page={BaseBattleDataNatureBattleDataNaturePage} name="battleDataNature" />
        <Route path="/base/battle-data-natures" page={BaseBattleDataNatureBattleDataNaturesPage} name="battleDataNatures" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataAbilities" titleTo="battleDataAbilities" buttonLabel="New BattleDataAbility" buttonTo="newBattleDataAbility">
        <Route path="/base/battle-data-abilities/new" page={BaseBattleDataAbilityNewBattleDataAbilityPage} name="newBattleDataAbility" />
        <Route path="/base/battle-data-abilities/{id}/edit" page={BaseBattleDataAbilityEditBattleDataAbilityPage} name="editBattleDataAbility" />
        <Route path="/base/battle-data-abilities/{id}" page={BaseBattleDataAbilityBattleDataAbilityPage} name="battleDataAbility" />
        <Route path="/base/battle-data-abilities" page={BaseBattleDataAbilityBattleDataAbilitiesPage} name="battleDataAbilities" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDataMoves" titleTo="battleDataMoves" buttonLabel="New BattleDataMove" buttonTo="newBattleDataMove">
        <Route path="/base/battle-data-moves/new" page={BaseBattleDataMoveNewBattleDataMovePage} name="newBattleDataMove" />
        <Route path="/base/battle-data-moves/{id}/edit" page={BaseBattleDataMoveEditBattleDataMovePage} name="editBattleDataMove" />
        <Route path="/base/battle-data-moves/{id}" page={BaseBattleDataMoveBattleDataMovePage} name="battleDataMove" />
        <Route path="/base/battle-data-moves" page={BaseBattleDataMoveBattleDataMovesPage} name="battleDataMoves" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleDatas" titleTo="battleDatas" buttonLabel="New BattleData" buttonTo="newBattleData">
        <Route path="/base/battle-datas/new" page={BaseBattleDataNewBattleDataPage} name="newBattleData" />
        <Route path="/base/battle-datas/{id}/edit" page={BaseBattleDataEditBattleDataPage} name="editBattleData" />
        <Route path="/base/battle-datas/{id}" page={BaseBattleDataBattleDataPage} name="battleData" />
        <Route path="/base/battle-datas" page={BaseBattleDataBattleDatasPage} name="battleDatas" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BattleIndices" titleTo="battleIndices" buttonLabel="New BattleIndex" buttonTo="newBattleIndex">
        <Route path="/base/battle-indices/new" page={BaseBattleIndexNewBattleIndexPage} name="newBattleIndex" />
        <Route path="/base/battle-indices/{id}/edit" page={BaseBattleIndexEditBattleIndexPage} name="editBattleIndex" />
        <Route path="/base/battle-indices/{id}" page={BaseBattleIndexBattleIndexPage} name="battleIndex" />
        <Route path="/base/battle-indices" page={BaseBattleIndexBattleIndicesPage} name="battleIndices" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Forms" titleTo="forms" buttonLabel="New Form" buttonTo="newForm">
        <Route path="/base/forms/new" page={BaseFormNewFormPage} name="newForm" />
        <Route path="/base/forms/{id}/edit" page={BaseFormEditFormPage} name="editForm" />
        <Route path="/base/forms/{id}" page={BaseFormFormPage} name="form" />
        <Route path="/base/forms" page={BaseFormFormsPage} name="forms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Natures" titleTo="natures" buttonLabel="New Nature" buttonTo="newNature">
        <Route path="/base/natures/new" page={BaseNatureNewNaturePage} name="newNature" />
        <Route path="/base/natures/{id}/edit" page={BaseNatureEditNaturePage} name="editNature" />
        <Route path="/base/natures/{id}" page={BaseNatureNaturePage} name="nature" />
        <Route path="/base/natures" page={BaseNatureNaturesPage} name="natures" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Pokemons" titleTo="pokemons" buttonLabel="New Pokemon" buttonTo="newPokemon">
        <Route path="/base/pokemons/new" page={BasePokemonNewPokemonPage} name="newPokemon" />
        <Route path="/base/pokemons/{id}/edit" page={BasePokemonEditPokemonPage} name="editPokemon" />
        <Route path="/base/pokemons/{id}" page={BasePokemonPokemonPage} name="pokemon" />
        <Route path="/base/pokemons" page={BasePokemonPokemonsPage} name="pokemons" />
      </Set>
      <Set wrap={ScaffoldLayout} title="AttackTypes" titleTo="attackTypes" buttonLabel="New AttackType" buttonTo="newAttackType">
        <Route path="/base/attack-types/new" page={BaseAttackTypeNewAttackTypePage} name="newAttackType" />
        <Route path="/base/attack-types/{id}/edit" page={BaseAttackTypeEditAttackTypePage} name="editAttackType" />
        <Route path="/base/attack-types/{id}" page={BaseAttackTypeAttackTypePage} name="attackType" />
        <Route path="/base/attack-types" page={BaseAttackTypeAttackTypesPage} name="attackTypes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Abilities" titleTo="abilities" buttonLabel="New Ability" buttonTo="newAbility">
        <Route path="/base/abilities/new" page={BaseAbilityNewAbilityPage} name="newAbility" />
        <Route path="/base/abilities/{id}/edit" page={BaseAbilityEditAbilityPage} name="editAbility" />
        <Route path="/base/abilities/{id}" page={BaseAbilityAbilityPage} name="ability" />
        <Route path="/base/abilities" page={BaseAbilityAbilitiesPage} name="abilities" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/base/items/new" page={BaseItemNewItemPage} name="newItem" />
        <Route path="/base/items/{id}/edit" page={BaseItemEditItemPage} name="editItem" />
        <Route path="/base/items/{id}" page={BaseItemItemPage} name="item" />
        <Route path="/base/items" page={BaseItemItemsPage} name="items" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TypeRelations" titleTo="typeRelations" buttonLabel="New TypeRelation" buttonTo="newTypeRelation">
        <Route path="/base/type-relations/new" page={BaseTypeRelationNewTypeRelationPage} name="newTypeRelation" />
        <Route path="/base/type-relations/{id}/edit" page={BaseTypeRelationEditTypeRelationPage} name="editTypeRelation" />
        <Route path="/base/type-relations/{id}" page={BaseTypeRelationTypeRelationPage} name="typeRelation" />
        <Route path="/base/type-relations" page={BaseTypeRelationTypeRelationsPage} name="typeRelations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Types" titleTo="types" buttonLabel="New Type" buttonTo="newType">
        <Route path="/base/types/new" page={BaseTypeNewTypePage} name="newType" />
        <Route path="/base/types/{id}/edit" page={BaseTypeEditTypePage} name="editType" />
        <Route path="/base/types/{id}" page={BaseTypeTypePage} name="type" />
        <Route path="/base/types" page={BaseTypeTypesPage} name="types" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Moves" titleTo="moves" buttonLabel="New Move" buttonTo="newMove">
        <Route path="/base/moves/new" page={BaseMoveNewMovePage} name="newMove" />
        <Route path="/base/moves/{id}/edit" page={BaseMoveEditMovePage} name="editMove" />
        <Route path="/base/moves/{id}" page={BaseMoveMovePage} name="move" />
        <Route path="/base/moves" page={BaseMoveMovesPage} name="moves" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
