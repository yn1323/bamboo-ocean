import type {
  QueryResolvers,
  MutationResolvers,
  EvolutionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const evolutions: QueryResolvers['evolutions'] = () => {
  return db.evolution.findMany()
}

export const evolution: QueryResolvers['evolution'] = ({ id }) => {
  return db.evolution.findUnique({
    where: { id },
  })
}

export const createEvolution: MutationResolvers['createEvolution'] = ({
  input,
}) => {
  return db.evolution.create({
    data: input,
  })
}

export const updateEvolution: MutationResolvers['updateEvolution'] = ({
  id,
  input,
}) => {
  return db.evolution.update({
    data: input,
    where: { id },
  })
}

export const deleteEvolution: MutationResolvers['deleteEvolution'] = ({
  id,
}) => {
  return db.evolution.delete({
    where: { id },
  })
}

export const Evolution: EvolutionRelationResolvers = {
  pokemon: (_obj, { root }) => {
    return db.evolution.findUnique({ where: { id: root?.id } }).pokemon()
  },
  from: (_obj, { root }) => {
    return db.evolution.findUnique({ where: { id: root?.id } }).from()
  },
  to: (_obj, { root }) => {
    return db.evolution.findUnique({ where: { id: root?.id } }).to()
  },
}
