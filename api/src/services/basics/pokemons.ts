import type {
  MutationResolvers,
  PokemonRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { cache } from 'src/lib/cache'
import { db } from 'src/lib/db'

export const pokemons: QueryResolvers['pokemons'] = () => {
  return cache(
    'pokemons',
    () =>
      db.pokemon.findMany({
        orderBy: { no: 'asc' },
      }),
    { expires: 3600 }
  )
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
  MyPokemon: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).MyPokemon()
  },
  myEnemy: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).myEnemy()
  },
  evolutionFrom: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).evolutionFrom()
  },
  evolutionTo: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).evolutionTo()
  },
  evolutions: (_obj, { root }) => {
    return db.pokemon.findUnique({ where: { id: root?.id } }).evolutions()
  },
}
