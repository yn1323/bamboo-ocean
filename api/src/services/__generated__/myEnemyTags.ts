import type {
  QueryResolvers,
  MutationResolvers,
  MyEnemyTagRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myEnemyTags: QueryResolvers['myEnemyTags'] = () => {
  return db.myEnemyTag.findMany()
}

export const myEnemyTag: QueryResolvers['myEnemyTag'] = ({ id }) => {
  return db.myEnemyTag.findUnique({
    where: { id },
  })
}

export const createMyEnemyTag: MutationResolvers['createMyEnemyTag'] = ({
  input,
}) => {
  return db.myEnemyTag.create({
    data: input,
  })
}

export const updateMyEnemyTag: MutationResolvers['updateMyEnemyTag'] = ({
  id,
  input,
}) => {
  return db.myEnemyTag.update({
    data: input,
    where: { id },
  })
}

export const deleteMyEnemyTag: MutationResolvers['deleteMyEnemyTag'] = ({
  id,
}) => {
  return db.myEnemyTag.delete({
    where: { id },
  })
}

export const MyEnemyTag: MyEnemyTagRelationResolvers = {
  myEnemy: (_obj, { root }) => {
    return db.myEnemyTag.findUnique({ where: { id: root?.id } }).myEnemy()
  },
  user: (_obj, { root }) => {
    return db.myEnemyTag.findUnique({ where: { id: root?.id } }).user()
  },
}
