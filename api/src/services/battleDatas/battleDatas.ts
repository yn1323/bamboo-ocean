import type {
  QueryResolvers,
  MutationResolvers,
  BattleDataRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleDatas: QueryResolvers['battleDatas'] = () => {
  return db.battleData.findMany()
}

export const battleData: QueryResolvers['battleData'] = ({ id }) => {
  return db.battleData.findUnique({
    where: { id },
  })
}

export const createBattleData: MutationResolvers['createBattleData'] = ({
  input,
}) => {
  return db.battleData.create({
    data: input,
  })
}

export const updateBattleData: MutationResolvers['updateBattleData'] = ({
  id,
  input,
}) => {
  return db.battleData.update({
    data: input,
    where: { id },
  })
}

export const deleteBattleData: MutationResolvers['deleteBattleData'] = ({
  id,
}) => {
  return db.battleData.delete({
    where: { id },
  })
}

export const BattleData: BattleDataRelationResolvers = {
  BattleIndex: (_obj, { root }) => {
    return db.battleData.findUnique({ where: { id: root?.id } }).BattleIndex()
  },
  pokemon: (_obj, { root }) => {
    return db.battleData.findUnique({ where: { id: root?.id } }).pokemon()
  },
  battleDataMove: (_obj, { root }) => {
    return db.battleData
      .findUnique({ where: { id: root?.id } })
      .battleDataMove()
  },
  battleDataAbility: (_obj, { root }) => {
    return db.battleData
      .findUnique({ where: { id: root?.id } })
      .battleDataAbility()
  },
  battleDataNature: (_obj, { root }) => {
    return db.battleData
      .findUnique({ where: { id: root?.id } })
      .battleDataNature()
  },
  battleDataItem: (_obj, { root }) => {
    return db.battleData
      .findUnique({ where: { id: root?.id } })
      .battleDataItem()
  },
  battleDataTerastal: (_obj, { root }) => {
    return db.battleData
      .findUnique({ where: { id: root?.id } })
      .battleDataTerastal()
  },
}
