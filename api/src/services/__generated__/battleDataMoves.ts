import type {
  QueryResolvers,
  MutationResolvers,
  BattleDataMoveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleDataMoves: QueryResolvers['battleDataMoves'] = () => {
  return db.battleDataMove.findMany()
}

export const battleDataMove: QueryResolvers['battleDataMove'] = ({ id }) => {
  return db.battleDataMove.findUnique({
    where: { id },
  })
}

export const createBattleDataMove: MutationResolvers['createBattleDataMove'] =
  ({ input }) => {
    return db.battleDataMove.create({
      data: input,
    })
  }

export const updateBattleDataMove: MutationResolvers['updateBattleDataMove'] =
  ({ id, input }) => {
    return db.battleDataMove.update({
      data: input,
      where: { id },
    })
  }

export const deleteBattleDataMove: MutationResolvers['deleteBattleDataMove'] =
  ({ id }) => {
    return db.battleDataMove.delete({
      where: { id },
    })
  }

export const BattleDataMove: BattleDataMoveRelationResolvers = {
  move: (_obj, { root }) => {
    return db.battleDataMove.findUnique({ where: { id: root?.id } }).move()
  },
  battleData: (_obj, { root }) => {
    return db.battleDataMove
      .findUnique({ where: { id: root?.id } })
      .battleData()
  },
}
