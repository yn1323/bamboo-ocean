import type {
  BattleDataAbilityRelationResolvers,
  MutationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const battleDataAbilities: QueryResolvers['battleDataAbilities'] =
  () => {
    return db.battleDataAbility.findMany()
  }

export const battleDataAbility: QueryResolvers['battleDataAbility'] = ({
  id,
}) => {
  return db.battleDataAbility.findUnique({
    where: { id },
  })
}

export const createBattleDataAbility: MutationResolvers['createBattleDataAbility'] =
  ({ input }) => {
    return db.battleDataAbility.create({
      data: input,
    })
  }

export const updateBattleDataAbility: MutationResolvers['updateBattleDataAbility'] =
  ({ id, input }) => {
    return db.battleDataAbility.update({
      data: input,
      where: { id },
    })
  }

export const deleteBattleDataAbility: MutationResolvers['deleteBattleDataAbility'] =
  ({ id }) => {
    return db.battleDataAbility.delete({
      where: { id },
    })
  }

export const BattleDataAbility: BattleDataAbilityRelationResolvers = {
  ability: (_obj, { root }) => {
    return db.battleDataAbility
      .findUnique({ where: { id: root?.id } })
      .ability()
  },
  battleData: (_obj, { root }) => {
    return db.battleDataAbility
      .findUnique({ where: { id: root?.id } })
      .battleData()
  },
}
