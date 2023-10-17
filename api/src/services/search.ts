import type { QueryResolvers } from 'types/graphql'

import { cache } from 'src/lib/cache'
import { db } from 'src/lib/db'

export const battleDatasLatest: QueryResolvers['battleDatasLatest'] =
  async () => {
    const latest = await cache('battleDatasLatest-100', () =>
      db.battleIndex.findMany({
        take: 1,
        orderBy: { id: 'desc' },
      })
    )

    const latestBattleIndexId = latest[0].id

    const result = [
      async () =>
        await cache(
          `battleDatasLatest-2`,
          () =>
            db.battleData.findMany({
              where: {
                AND: [
                  { rank: { gt: 0 } },
                  { battleIndexId: latestBattleIndexId },
                ],
              },
              orderBy: { rank: 'asc' },
            }),
          { expires: 3600 }
        ),
      async () =>
        await cache(`battleDatasLatest-3`, () =>
          db.battleData.findMany({
            where: {
              AND: [
                { rank: { equals: -1 } },
                { battleIndexId: latestBattleIndexId },
              ],
            },
            orderBy: { no: 'asc' },
          })
        ),
    ]

    const [rank, outOfRange] = await Promise.all(result.map((fn) => fn()))

    return [...rank, ...outOfRange]
  }
