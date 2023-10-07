import type {
  AttackTypeRelationResolvers,
  MutationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const attackTypes: QueryResolvers['attackTypes'] = () => {
  return db.attackType.findMany()
}

export const attackType: QueryResolvers['attackType'] = ({ id }) => {
  return db.attackType.findUnique({
    where: { id },
  })
}

export const createAttackType: MutationResolvers['createAttackType'] = ({
  input,
}) => {
  return db.attackType.create({
    data: input,
  })
}

export const updateAttackType: MutationResolvers['updateAttackType'] = ({
  id,
  input,
}) => {
  return db.attackType.update({
    data: input,
    where: { id },
  })
}

export const deleteAttackType: MutationResolvers['deleteAttackType'] = ({
  id,
}) => {
  return db.attackType.delete({
    where: { id },
  })
}

export const AttackType: AttackTypeRelationResolvers = {
  moves: (_obj, { root }) => {
    return db.attackType.findUnique({ where: { id: root?.id } }).moves()
  },
}
