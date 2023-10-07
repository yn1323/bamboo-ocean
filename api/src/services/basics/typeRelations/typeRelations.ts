import type {
  MutationResolvers,
  QueryResolvers,
  TypeRelationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const typeRelations: QueryResolvers['typeRelations'] = () => {
  return db.typeRelation.findMany()
}

export const typeRelation: QueryResolvers['typeRelation'] = ({ id }) => {
  return db.typeRelation.findUnique({
    where: { id },
  })
}

export const createTypeRelation: MutationResolvers['createTypeRelation'] = ({
  input,
}) => {
  return db.typeRelation.create({
    data: input,
  })
}

export const updateTypeRelation: MutationResolvers['updateTypeRelation'] = ({
  id,
  input,
}) => {
  return db.typeRelation.update({
    data: input,
    where: { id },
  })
}

export const deleteTypeRelation: MutationResolvers['deleteTypeRelation'] = ({
  id,
}) => {
  return db.typeRelation.delete({
    where: { id },
  })
}

export const TypeRelation: TypeRelationRelationResolvers = {
  from: (_obj, { root }) => {
    return db.typeRelation.findUnique({ where: { id: root?.id } }).from()
  },
  to: (_obj, { root }) => {
    return db.typeRelation.findUnique({ where: { id: root?.id } }).to()
  },
}
