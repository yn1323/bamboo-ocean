import type {
  QueryResolvers,
  MutationResolvers,
  MyEnemyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const myEnemies: QueryResolvers['myEnemies'] = () => {
  return db.myEnemy.findMany()
}

export const myEnemy: QueryResolvers['myEnemy'] = ({ id }) => {
  return db.myEnemy.findUnique({
    where: { id },
  })
}

export const createMyEnemy: MutationResolvers['createMyEnemy'] = ({
  input,
}) => {
  return db.myEnemy.create({
    data: input,
  })
}

export const updateMyEnemy: MutationResolvers['updateMyEnemy'] = ({
  id,
  input,
}) => {
  return db.myEnemy.update({
    data: input,
    where: { id },
  })
}

export const deleteMyEnemy: MutationResolvers['deleteMyEnemy'] = ({ id }) => {
  return db.myEnemy.delete({
    where: { id },
  })
}

export const MyEnemy: MyEnemyRelationResolvers = {
  tag: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).tag()
  },
  pokemon: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).pokemon()
  },
  item: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).item()
  },
  ability: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).ability()
  },
  nature: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).nature()
  },
  terastal: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).terastal()
  },
  moves: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).moves()
  },
  user: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).user()
  },
  myPokemonPros: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).myPokemonPros()
  },
  myPokemonCons: (_obj, { root }) => {
    return db.myEnemy.findUnique({ where: { id: root?.id } }).myPokemonCons()
  },
}
