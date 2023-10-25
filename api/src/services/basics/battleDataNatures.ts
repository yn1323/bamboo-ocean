import type {
  QueryResolvers,
  MutationResolvers,
  BattleDataNatureRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleDataNatures: QueryResolvers['battleDataNatures'] = () => {
  return db.battleDataNature.findMany()
}

export const battleDataNature: QueryResolvers['battleDataNature'] = ({
  id,
}) => {
  return db.battleDataNature.findUnique({
    where: { id },
  })
}

export const createBattleDataNature: MutationResolvers['createBattleDataNature'] =
  ({ input }) => {
    return db.battleDataNature.create({
      data: input,
    })
  }

export const updateBattleDataNature: MutationResolvers['updateBattleDataNature'] =
  ({ id, input }) => {
    return db.battleDataNature.update({
      data: input,
      where: { id },
    })
  }

export const deleteBattleDataNature: MutationResolvers['deleteBattleDataNature'] =
  ({ id }) => {
    return db.battleDataNature.delete({
      where: { id },
    })
  }

export const BattleDataNature: BattleDataNatureRelationResolvers = {
  nature: (_obj, { root }) => {
    return db.battleDataNature.findUnique({ where: { id: root?.id } }).nature()
  },
  battleData: (_obj, { root }) => {
    return db.battleDataNature
      .findUnique({ where: { id: root?.id } })
      .battleData()
  },
}
