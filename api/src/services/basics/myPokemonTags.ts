import type {
  MutationResolvers,
  MyPokemonTagRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myPokemonTags: QueryResolvers['myPokemonTags'] = () => {
  return db.myPokemonTag.findMany()
}

export const myPokemonTag: QueryResolvers['myPokemonTag'] = ({ id }) => {
  return db.myPokemonTag.findUnique({
    where: { id },
  })
}

export const createMyPokemonTag: MutationResolvers['createMyPokemonTag'] = ({
  input,
}) => {
  return db.myPokemonTag.create({
    data: input,
  })
}

export const updateMyPokemonTag: MutationResolvers['updateMyPokemonTag'] = ({
  id,
  input,
}) => {
  return db.myPokemonTag.update({
    data: input,
    where: { id },
  })
}

export const deleteMyPokemonTag: MutationResolvers['deleteMyPokemonTag'] = ({
  id,
}) => {
  return db.myPokemonTag.delete({
    where: { id },
  })
}

export const MyPokemonTag: MyPokemonTagRelationResolvers = {
  myPokemon: (_obj, { root }) => {
    return db.myPokemonTag.findUnique({ where: { id: root?.id } }).myPokemon()
  },
  user: (_obj, { root }) => {
    return db.myPokemonTag.findUnique({ where: { id: root?.id } }).user()
  },
}
