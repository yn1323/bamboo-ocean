import type {
  MutationResolvers,
  MyPartyTagRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myPartyTags: QueryResolvers['myPartyTags'] = () => {
  return db.myPartyTag.findMany()
}

export const myPartyTag: QueryResolvers['myPartyTag'] = ({ id }) => {
  return db.myPartyTag.findUnique({
    where: { id },
  })
}

export const createMyPartyTag: MutationResolvers['createMyPartyTag'] = ({
  input,
}) => {
  return db.myPartyTag.create({
    data: input,
  })
}

export const updateMyPartyTag: MutationResolvers['updateMyPartyTag'] = ({
  id,
  input,
}) => {
  return db.myPartyTag.update({
    data: input,
    where: { id },
  })
}

export const deleteMyPartyTag: MutationResolvers['deleteMyPartyTag'] = ({
  id,
}) => {
  return db.myPartyTag.delete({
    where: { id },
  })
}

export const MyPartyTag: MyPartyTagRelationResolvers = {
  myParty: (_obj, { root }) => {
    return db.myPartyTag.findUnique({ where: { id: root?.id } }).myParty()
  },
  user: (_obj, { root }) => {
    return db.myPartyTag.findUnique({ where: { id: root?.id } }).user()
  },
}
