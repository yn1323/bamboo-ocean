import type {
  QueryResolvers,
  MutationResolvers,
  MoveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const moves: QueryResolvers['moves'] = () => {
  return db.move.findMany()
}

export const move: QueryResolvers['move'] = ({ id }) => {
  return db.move.findUnique({
    where: { id },
  })
}

export const createMove: MutationResolvers['createMove'] = ({ input }) => {
  return db.move.create({
    data: input,
  })
}

export const updateMove: MutationResolvers['updateMove'] = ({ id, input }) => {
  return db.move.update({
    data: input,
    where: { id },
  })
}

export const deleteMove: MutationResolvers['deleteMove'] = ({ id }) => {
  return db.move.delete({
    where: { id },
  })
}

export const Move: MoveRelationResolvers = {
  type: (_obj, { root }) => {
    return db.move.findUnique({ where: { id: root?.id } }).type()
  },
  attackType: (_obj, { root }) => {
    return db.move.findUnique({ where: { id: root?.id } }).attackType()
  },
  pokemons: (_obj, { root }) => {
    return db.move.findUnique({ where: { id: root?.id } }).pokemons()
  },
  battleDataMoves: (_obj, { root }) => {
    return db.move.findUnique({ where: { id: root?.id } }).battleDataMoves()
  },
}
