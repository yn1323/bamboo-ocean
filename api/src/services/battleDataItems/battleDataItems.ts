import type {
  QueryResolvers,
  MutationResolvers,
  BattleDataItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleDataItems: QueryResolvers['battleDataItems'] = () => {
  return db.battleDataItem.findMany()
}

export const battleDataItem: QueryResolvers['battleDataItem'] = ({ id }) => {
  return db.battleDataItem.findUnique({
    where: { id },
  })
}

export const createBattleDataItem: MutationResolvers['createBattleDataItem'] =
  ({ input }) => {
    return db.battleDataItem.create({
      data: input,
    })
  }

export const updateBattleDataItem: MutationResolvers['updateBattleDataItem'] =
  ({ id, input }) => {
    return db.battleDataItem.update({
      data: input,
      where: { id },
    })
  }

export const deleteBattleDataItem: MutationResolvers['deleteBattleDataItem'] =
  ({ id }) => {
    return db.battleDataItem.delete({
      where: { id },
    })
  }

export const BattleDataItem: BattleDataItemRelationResolvers = {
  Item: (_obj, { root }) => {
    return db.battleDataItem.findUnique({ where: { id: root?.id } }).Item()
  },
  battleData: (_obj, { root }) => {
    return db.battleDataItem
      .findUnique({ where: { id: root?.id } })
      .battleData()
  },
}
