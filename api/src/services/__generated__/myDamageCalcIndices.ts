import type {
  QueryResolvers,
  MutationResolvers,
  MyDamageCalcIndexRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myDamageCalcIndices: QueryResolvers['myDamageCalcIndices'] =
  () => {
    return db.myDamageCalcIndex.findMany()
  }

export const myDamageCalcIndex: QueryResolvers['myDamageCalcIndex'] = ({
  id,
}) => {
  return db.myDamageCalcIndex.findUnique({
    where: { id },
  })
}

export const createMyDamageCalcIndex: MutationResolvers['createMyDamageCalcIndex'] =
  ({ input }) => {
    return db.myDamageCalcIndex.create({
      data: input,
    })
  }

export const updateMyDamageCalcIndex: MutationResolvers['updateMyDamageCalcIndex'] =
  ({ id, input }) => {
    return db.myDamageCalcIndex.update({
      data: input,
      where: { id },
    })
  }

export const deleteMyDamageCalcIndex: MutationResolvers['deleteMyDamageCalcIndex'] =
  ({ id }) => {
    return db.myDamageCalcIndex.delete({
      where: { id },
    })
  }

export const MyDamageCalcIndex: MyDamageCalcIndexRelationResolvers = {
  user: (_obj, { root }) => {
    return db.myDamageCalcIndex.findUnique({ where: { id: root?.id } }).user()
  },
  myDamageCalc: (_obj, { root }) => {
    return db.myDamageCalcIndex
      .findUnique({ where: { id: root?.id } })
      .myDamageCalc()
  },
}
