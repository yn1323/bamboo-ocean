import { insertType } from './data/type'
import { insertTypeRelation } from './data/typeRelation'

const allSeedActions = [insertType, insertTypeRelation]

export default async () => {
  allSeedActions.forEach(async (func) => {
    await func()
  })
}
