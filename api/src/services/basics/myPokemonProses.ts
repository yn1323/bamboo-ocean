import type {
  QueryResolvers,
  MutationResolvers,
  MyPokemonProsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myPokemonProses: QueryResolvers['myPokemonProses'] = () => {
  return db.myPokemonPros.findMany()
}

export const myPokemonPros: QueryResolvers['myPokemonPros'] = ({ id }) => {
  return db.myPokemonPros.findUnique({
    where: { id },
  })
}

export const createMyPokemonPros: MutationResolvers['createMyPokemonPros'] = ({
  input,
}) => {
  return db.myPokemonPros.create({
    data: input,
  })
}

export const updateMyPokemonPros: MutationResolvers['updateMyPokemonPros'] = ({
  id,
  input,
}) => {
  return db.myPokemonPros.update({
    data: input,
    where: { id },
  })
}

export const deleteMyPokemonPros: MutationResolvers['deleteMyPokemonPros'] = ({
  id,
}) => {
  return db.myPokemonPros.delete({
    where: { id },
  })
}

export const MyPokemonPros: MyPokemonProsRelationResolvers = {
  myPokemon: (_obj, { root }) => {
    return db.myPokemonPros.findUnique({ where: { id: root?.id } }).myPokemon()
  },
  myEnemy: (_obj, { root }) => {
    return db.myPokemonPros.findUnique({ where: { id: root?.id } }).myEnemy()
  },
}
