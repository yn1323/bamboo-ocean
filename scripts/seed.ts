// import { getAssetNames } from 'api/src/external/api/coconut/sv/getAssetNames'

import { insertAbility } from './data/ability'
import { insertAttackType } from './data/attackType'
import { insertItem } from './data/item'
import { insertNature } from './data/nature'
import { insertType } from './data/type'
import { insertTypeRelation } from './data/typeRelation'

export default async () => {
  await insertType()
  await insertTypeRelation()
  await insertAttackType()
  await insertItem()
  await insertAbility()
  await insertNature()

  // console.log(await getAssetNames())
}
