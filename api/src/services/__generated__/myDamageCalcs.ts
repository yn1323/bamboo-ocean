import type {
  QueryResolvers,
  MutationResolvers,
  MyDamageCalcRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myDamageCalcs: QueryResolvers['myDamageCalcs'] = () => {
  return db.myDamageCalc.findMany()
}

export const myDamageCalc: QueryResolvers['myDamageCalc'] = ({ id }) => {
  return db.myDamageCalc.findUnique({
    where: { id },
  })
}

export const createMyDamageCalc: MutationResolvers['createMyDamageCalc'] = ({
  input,
}) => {
  return db.myDamageCalc.create({
    data: input,
  })
}

export const updateMyDamageCalc: MutationResolvers['updateMyDamageCalc'] = ({
  id,
  input,
}) => {
  return db.myDamageCalc.update({
    data: input,
    where: { id },
  })
}

export const deleteMyDamageCalc: MutationResolvers['deleteMyDamageCalc'] = ({
  id,
}) => {
  return db.myDamageCalc.delete({
    where: { id },
  })
}

export const MyDamageCalc: MyDamageCalcRelationResolvers = {
  myDamageCalcIndex: (_obj, { root }) => {
    return db.myDamageCalc
      .findUnique({ where: { id: root?.id } })
      .myDamageCalcIndex()
  },
  pokemon: (_obj, { root }) => {
    return db.myDamageCalc.findUnique({ where: { id: root?.id } }).pokemon()
  },
  item: (_obj, { root }) => {
    return db.myDamageCalc.findUnique({ where: { id: root?.id } }).item()
  },
  ability: (_obj, { root }) => {
    return db.myDamageCalc.findUnique({ where: { id: root?.id } }).ability()
  },
  nature: (_obj, { root }) => {
    return db.myDamageCalc.findUnique({ where: { id: root?.id } }).nature()
  },
  terastal: (_obj, { root }) => {
    return db.myDamageCalc.findUnique({ where: { id: root?.id } }).terastal()
  },
  moves: (_obj, { root }) => {
    return db.myDamageCalc.findUnique({ where: { id: root?.id } }).moves()
  },
}
