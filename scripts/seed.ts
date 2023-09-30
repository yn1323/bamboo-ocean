import { insertType } from './data/type'
import { insertTypeRelation } from './data/typeRelation'

export default async () => {
  await insertType()
  await insertTypeRelation()
}
