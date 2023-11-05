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
  const fixedMoves = moves.filter((move) => move)
  const fixedTypes = types.filter((type) => type)
  const fixedAbilities = abilities.filter((ability) => ability)

  const { condition, evolvedOnly }: PokemonSearchOption = options

  const operator = ['AND', 'OR'].includes(condition) ? condition : 'AND'

  const result = await db.pokemon.findMany({
    where: {
      ...(name ? { name: { contains: hiraToKana(name) } } : {}),
      ...(evolvedOnly ? { evolutionTo: { none: {} } } : {}),
      [operator]: {
        ...(fixedTypes.length === 1
          ? { types: { some: { name: fixedTypes[0] } } }
          : {}),
        ...(fixedTypes.length === 2 && {
          AND: [
            { types: { some: { name: fixedTypes[0] } } },
            { types: { some: { name: fixedTypes[1] } } },
          ],
        }),
        ...(fixedMoves.length === 1
          ? { moves: { some: { name: fixedMoves[0] } } }
          : {}),
        ...(fixedMoves.length === 2 && {
          AND: [
            { moves: { some: { name: fixedMoves[0] } } },
            { moves: { some: { name: fixedMoves[1] } } },
          ],
        }),
        ...(fixedMoves.length === 3 && {
          AND: [
            { moves: { some: { name: fixedMoves[0] } } },
            { moves: { some: { name: fixedMoves[1] } } },
            { moves: { some: { name: fixedMoves[2] } } },
          ],
        }),
        ...(fixedMoves.length === 4 && {
          AND: [
            { moves: { some: { name: fixedMoves[0] } } },
            { moves: { some: { name: fixedMoves[1] } } },
            { moves: { some: { name: fixedMoves[2] } } },
            { moves: { some: { name: fixedMoves[3] } } },
          ],
        }),
        ...(fixedAbilities.length
          ? { abilities: { some: { name: fixedAbilities[0] } } }
          : {}),
      },
    },
    orderBy: { no: 'asc' },
  })

  return result
}
