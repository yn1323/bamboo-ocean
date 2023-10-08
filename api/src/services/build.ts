import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const filterMyPokemons: QueryResolvers['filterMyPokemons'] = ({
  userId,
}) => {
  return db.myPokemon.findMany({ where: { userId } })
}

export const filterMyParties: QueryResolvers['filterMyParties'] = ({
  userId,
}) => {
  return db.myParty.findMany({ where: { userId } })
}

export const filterMyPokemonTags: QueryResolvers['filterMyPokemonTags'] = ({
  userId,
}) => {
  return db.myPokemonTag.findMany({ where: { userId } })
}

export const filterMyPartyTags: QueryResolvers['filterMyPartyTags'] = ({
  userId,
}) => {
  return db.myPartyTag.findMany({ where: { userId } })
}
