import type {
  MutationResolvers,
  NatureRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const natures: QueryResolvers['natures'] = () => {
  return db.nature.findMany()
}

export const nature: QueryResolvers['nature'] = ({ id }) => {
  return db.nature.findUnique({
    where: { id },
  })
}

export const createNature: MutationResolvers['createNature'] = ({ input }) => {
  return db.nature.create({
    data: input,
  })
}

export const updateNature: MutationResolvers['updateNature'] = ({
  id,
  input,
}) => {
  return db.nature.update({
    data: input,
    where: { id },
  })
}

export const deleteNature: MutationResolvers['deleteNature'] = ({ id }) => {
  return db.nature.delete({
    where: { id },
  })
}

export const Nature: NatureRelationResolvers = {
  battleDataNature: (_obj, { root }) => {
    return db.nature.findUnique({ where: { id: root?.id } }).battleDataNature()
  },
  myPokemon: (_obj, { root }) => {
    return db.nature.findUnique({ where: { id: root?.id } }).myPokemon()
  },
  myEnemy: (_obj, { root }) => {
    return db.nature.findUnique({ where: { id: root?.id } }).myEnemy()
  },
}
