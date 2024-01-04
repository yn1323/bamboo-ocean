import type {
  QueryResolvers,
  MutationResolvers,
  MyPokemonConsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myPokemonConses: QueryResolvers['myPokemonConses'] = () => {
  return db.myPokemonCons.findMany()
}

export const myPokemonCons: QueryResolvers['myPokemonCons'] = ({ id }) => {
  return db.myPokemonCons.findUnique({
    where: { id },
  })
}

export const createMyPokemonCons: MutationResolvers['createMyPokemonCons'] = ({
  input,
}) => {
  return db.myPokemonCons.create({
    data: input,
  })
}

export const updateMyPokemonCons: MutationResolvers['updateMyPokemonCons'] = ({
  id,
  input,
}) => {
  return db.myPokemonCons.update({
    data: input,
    where: { id },
  })
}

export const deleteMyPokemonCons: MutationResolvers['deleteMyPokemonCons'] = ({
  id,
}) => {
  return db.myPokemonCons.delete({
    where: { id },
  })
}

export const MyPokemonCons: MyPokemonConsRelationResolvers = {
  myPokemon: (_obj, { root }) => {
    return db.myPokemonCons.findUnique({ where: { id: root?.id } }).myPokemon()
  },
  myEnemy: (_obj, { root }) => {
    return db.myPokemonCons.findUnique({ where: { id: root?.id } }).myEnemy()
  },
}
