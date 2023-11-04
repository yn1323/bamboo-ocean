import type {
  PokemonSearchOption,
  QueryResolvers,
  QuerypokemonSearchArgs,
} from 'types/graphql'

import { hiraToKana } from 'src/helpers/string'
import { db } from 'src/lib/db'

export const battleDatasLatest: QueryResolvers['battleDatasLatest'] =
  async () => {
    const latest = await db.battleIndex.findMany({
      take: 1,
      orderBy: { id: 'desc' },
    })

    const latestBattleIndexId = latest[0].id

    const result = [
      async () =>
        await db.battleData.findMany({
          where: {
            AND: [{ rank: { gt: 0 } }, { battleIndexId: latestBattleIndexId }],
          },
          orderBy: { rank: 'asc' },
        }),
      async () =>
        await db.battleData.findMany({
          where: {
            AND: [
              { rank: { equals: -1 } },
              { battleIndexId: latestBattleIndexId },
            ],
          },
          orderBy: { no: 'asc' },
        }),
    ]

    const [rank, outOfRange] = await Promise.all(result.map((fn) => fn()))

    return [...rank, ...outOfRange]
  }

export const pokemonList: QueryResolvers['pokemonList'] = async (
  _,
  { info: { variableValues } }
) => {
  const {
    options = {
      evolvedOnly: true,
    },
  }: QuerypokemonSearchArgs = variableValues

  const { evolvedOnly }: PokemonSearchOption = options
  const result = await db.pokemon.findMany({
    where: {
      ...(evolvedOnly ? { evolutionTo: { none: {} } } : {}),
    },
    orderBy: { no: 'asc' },
  })
  return result
}

export const pokemonSearch: QueryResolvers['pokemonSearch'] = async (
  _,
  { info: { variableValues } }
) => {
  const {
    name,
    types = [],
    moves = [],
    abilities = [],
    options = {
      condition: 'AND',
      evolvedOnly: true,
    },
  }: QuerypokemonSearchArgs = variableValues

  const { condition, evolvedOnly }: PokemonSearchOption = options

  const operator = ['AND', 'OR'].includes(condition) ? condition : 'AND'

  const result = await db.pokemon.findMany({
    where: {
      ...(name ? { name: { contains: hiraToKana(name) } } : {}),
      ...(evolvedOnly ? { evolutionTo: { none: {} } } : {}),
      [operator]: {
        ...(types.length === 1
          ? { types: { every: { name: { in: types } } } }
          : {}),
        ...(types.length === 2 && {
          AND: [
            { types: { some: { name: types[0] } } },
            { types: { some: { name: types[1] } } },
          ],
        }),
        ...(moves.length === 1
          ? { moves: { some: { name: { in: moves } } } }
          : {}),
        ...(moves.length === 2 && {
          AND: [
            { moves: { some: { name: moves[0] } } },
            { moves: { some: { name: moves[1] } } },
          ],
        }),
        ...(moves.length === 3 && {
          AND: [
            { moves: { some: { name: moves[0] } } },
            { moves: { some: { name: moves[1] } } },
            { moves: { some: { name: moves[2] } } },
          ],
        }),
        ...(moves.length === 4 && {
          AND: [
            { moves: { some: { name: moves[0] } } },
            { moves: { some: { name: moves[1] } } },
            { moves: { some: { name: moves[2] } } },
            { moves: { some: { name: moves[3] } } },
          ],
        }),
        ...(abilities.length
          ? { abilities: { some: { name: { in: abilities } } } }
          : {}),
      },
    },
    orderBy: { no: 'asc' },
  })

  return result
}
