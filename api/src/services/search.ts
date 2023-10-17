import type { QueryResolvers } from 'types/graphql'

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
