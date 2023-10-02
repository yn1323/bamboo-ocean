import { insertAbility } from './data/ability'
import { insertAttackType } from './data/attackType'
import { insertForm } from './data/form'
import { insertItem } from './data/item'
import { insertMove } from './data/moves'
import { insertNature } from './data/nature'
import { insertPokemon } from './data/pokemons'
import { insertRanking } from './data/ranking'
import { insertType } from './data/type'
import { insertTypeRelation } from './data/typeRelation'

export default async () => {
  await insertType()
  await insertTypeRelation()
  await insertAttackType()
  await insertItem()
  await insertAbility()
  await insertNature()
  await insertForm()
  await insertMove()
  await insertPokemon()

  await insertRanking()
}
