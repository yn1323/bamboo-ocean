import type {
  QueryResolvers,
  MutationResolvers,
  BattleDataTerastalRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleDataTerastals: QueryResolvers['battleDataTerastals'] =
  () => {
    return db.battleDataTerastal.findMany()
  }

export const battleDataTerastal: QueryResolvers['battleDataTerastal'] = ({
  id,
}) => {
  return db.battleDataTerastal.findUnique({
    where: { id },
  })
}

export const createBattleDataTerastal: MutationResolvers['createBattleDataTerastal'] =
  ({ input }) => {
    return db.battleDataTerastal.create({
      data: input,
    })
  }

export const updateBattleDataTerastal: MutationResolvers['updateBattleDataTerastal'] =
  ({ id, input }) => {
    return db.battleDataTerastal.update({
      data: input,
      where: { id },
    })
  }

export const deleteBattleDataTerastal: MutationResolvers['deleteBattleDataTerastal'] =
  ({ id }) => {
    return db.battleDataTerastal.delete({
      where: { id },
    })
  }

export const BattleDataTerastal: BattleDataTerastalRelationResolvers = {
  type: (_obj, { root }) => {
    return db.battleDataTerastal.findUnique({ where: { id: root?.id } }).type()
  },
  battleData: (_obj, { root }) => {
    return db.battleDataTerastal
      .findUnique({ where: { id: root?.id } })
      .battleData()
  },
}
