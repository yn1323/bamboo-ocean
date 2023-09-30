import type {
  QueryResolvers,
  MutationResolvers,
  PokemonRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pokemons: QueryResolvers['pokemons'] = () => {
  return db.pokemon.findMany()
}

export const pokemon: QueryResolvers['pokemon'] = ({ id }) => {
  return db.pokemon.findUnique({
    where: { id },
  })
}

export const createPokemon: MutationResolvers['createPokemon'] = ({
  input,
}) => {
  return db.pokemon.create({
    data: input,
  })
}

export const updatePokemon: MutationResolvers['updatePokemon'] = ({
  id,
  input,
}) => {
  return db.pokemon.update({
    data: input,
    where: { id },
  })
}

export const deletePokemon: MutationResolvers['deletePokemon'] = ({ id }) => {
  return db.pokemon.delete({
    where: { id },
  })
}

export const Pokemon: PokemonRelationResolvers = {
  types: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).types()
  },
  abilities: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).abilities()
  },
  moves: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).moves()
  },
  battleData: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).battleData()
  },
}
