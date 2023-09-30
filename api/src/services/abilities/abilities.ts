import type {
  QueryResolvers,
  MutationResolvers,
  AbilityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const abilities: QueryResolvers['abilities'] = () => {
  return db.ability.findMany()
}

export const ability: QueryResolvers['ability'] = ({ id }) => {
  return db.ability.findUnique({
    where: { id },
  })
}

export const createAbility: MutationResolvers['createAbility'] = ({
  input,
}) => {
  return db.ability.create({
    data: input,
  })
}

export const updateAbility: MutationResolvers['updateAbility'] = ({
  id,
  input,
}) => {
  return db.ability.update({
    data: input,
    where: { id },
  })
}

export const deleteAbility: MutationResolvers['deleteAbility'] = ({ id }) => {
  return db.ability.delete({
    where: { id },
  })
}

export const Ability: AbilityRelationResolvers = {
  pokemons: (_obj, { root }) => {
    return db.ability.findUnique({ where: { id: root?.id } }).pokemons()
  },
  battleDataAbilities: (_obj, { root }) => {
    return db.ability
      .findUnique({ where: { id: root?.id } })
      .battleDataAbilities()
  },
}
