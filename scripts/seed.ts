import { insertAbility } from './data/ability'
import { insertAttackType } from './data/attackType'
import { insertForm } from './data/form'
import { insertItem } from './data/item'
import { insertMove } from './data/moves'
import { insertMyCalc } from './data/myCalc'
import { insertMyData } from './data/myData'
import { insertMyTags } from './data/myTags'
import { insertNature } from './data/nature'
import { insertPokemon } from './data/pokemons'
import { insertRanking } from './data/ranking'
import { insertType } from './data/type'
import { insertTypeRelation } from './data/typeRelation'
import { insertUser } from './data/user'

export default async () => {
  await insertType()
  await insertTypeRelation()
  await insertAttackType()

  await Promise.all([
    insertItem(),
    insertAbility(),
    insertNature(),
    insertForm(),
    insertMove(),
  ])

  await insertPokemon()

  await Promise.all([insertRanking(), insertRanking()])

  await insertUser()
  await insertMyTags()
  await insertMyData()
  await insertMyCalc()
}
