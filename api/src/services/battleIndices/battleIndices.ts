import type {
  QueryResolvers,
  MutationResolvers,
  BattleIndexRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleIndices: QueryResolvers['battleIndices'] = () => {
  return db.battleIndex.findMany()
}

export const battleIndex: QueryResolvers['battleIndex'] = ({ id }) => {
  return db.battleIndex.findUnique({
    where: { id },
  })
}

export const createBattleIndex: MutationResolvers['createBattleIndex'] = ({
  input,
}) => {
  return db.battleIndex.create({
    data: input,
  })
}

export const updateBattleIndex: MutationResolvers['updateBattleIndex'] = ({
  id,
  input,
}) => {
  return db.battleIndex.update({
    data: input,
    where: { id },
  })
}

export const deleteBattleIndex: MutationResolvers['deleteBattleIndex'] = ({
  id,
}) => {
  return db.battleIndex.delete({
    where: { id },
  })
}

export const BattleIndex: BattleIndexRelationResolvers = {
  battleData: (_obj, { root }) => {
    return db.battleIndex.findUnique({ where: { id: root?.id } }).battleData()
  },
}
