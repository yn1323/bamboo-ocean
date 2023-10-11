import type {
  MutationResolvers,
  MyPartyRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myParties: QueryResolvers['myParties'] = () => {
  return db.myParty.findMany()
}

export const myParty: QueryResolvers['myParty'] = ({ id }) => {
  return db.myParty.findUnique({
    where: { id },
  })
}

export const createMyParty: MutationResolvers['createMyParty'] = ({
  input,
}) => {
  return db.myParty.create({
    data: input,
  })
}

export const updateMyParty: MutationResolvers['updateMyParty'] = ({
  id,
  input,
}) => {
  return db.myParty.update({
    data: input,
    where: { id },
  })
}

export const deleteMyParty: MutationResolvers['deleteMyParty'] = ({ id }) => {
  return db.myParty.delete({
    where: { id },
  })
}

export const MyParty: MyPartyRelationResolvers = {
  tag: (_obj, { root }) => {
    return db.myParty.findUnique({ where: { id: root?.id } }).tag()
  },
  user: (_obj, { root }) => {
    return db.myParty.findUnique({ where: { id: root?.id } }).user()
  },
  myPokemon: (_obj, { root }) => {
    return db.myParty.findUnique({ where: { id: root?.id } }).myPokemon()
  },
}
