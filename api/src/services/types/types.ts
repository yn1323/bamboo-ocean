import type {
  QueryResolvers,
  MutationResolvers,
  TypeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const types: QueryResolvers['types'] = () => {
  return db.type.findMany()
}

export const type: QueryResolvers['type'] = ({ id }) => {
  return db.type.findUnique({
    where: { id },
  })
}

export const createType: MutationResolvers['createType'] = ({ input }) => {
  return db.type.create({
    data: input,
  })
}

export const updateType: MutationResolvers['updateType'] = ({ id, input }) => {
  return db.type.update({
    data: input,
    where: { id },
  })
}

export const deleteType: MutationResolvers['deleteType'] = ({ id }) => {
  return db.type.delete({
    where: { id },
  })
}

export const Type: TypeRelationResolvers = {
  fromTypes: (_obj, { root }) => {
    return db.type.findUnique({ where: { id: root?.id } }).fromTypes()
  },
  toTypes: (_obj, { root }) => {
    return db.type.findUnique({ where: { id: root?.id } }).toTypes()
  },
  moves: (_obj, { root }) => {
    return db.type.findUnique({ where: { id: root?.id } }).moves()
  },
  pokemons: (_obj, { root }) => {
    return db.type.findUnique({ where: { id: root?.id } }).pokemons()
  },
  battleDataTerastal: (_obj, { root }) => {
    return db.type.findUnique({ where: { id: root?.id } }).battleDataTerastal()
  },
}
