import type {
  MutationResolvers,
  MyPokemonRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myPokemons: QueryResolvers['myPokemons'] = () => {
  return db.myPokemon.findMany()
}

export const myPokemon: QueryResolvers['myPokemon'] = ({ id }) => {
  return db.myPokemon.findUnique({
    where: { id },
  })
}

export const createMyPokemon: MutationResolvers['createMyPokemon'] = ({
  input,
}) => {
  return db.myPokemon.create({
    data: input,
  })
}

export const updateMyPokemon: MutationResolvers['updateMyPokemon'] = ({
  id,
  input,
}) => {
  return db.myPokemon.update({
    data: input,
    where: { id },
  })
}

export const deleteMyPokemon: MutationResolvers['deleteMyPokemon'] = ({
  id,
}) => {
  return db.myPokemon.delete({
    where: { id },
  })
}

export const MyPokemon: MyPokemonRelationResolvers = {
  tag: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).tag()
  },
  pokemon: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).pokemon()
  },
  item: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).item()
  },
  ability: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).ability()
  },
  nature: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).nature()
  },
  terastal: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).terastal()
  },
  moves: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).moves()
  },
  myParty: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).myParty()
  },
  user: (_obj, { root }) => {
    return db.myPokemon.findUnique({ where: { id: root?.id } }).user()
  },
}
