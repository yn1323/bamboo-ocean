import type { Prisma, BattleDataTerastal } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataTerastalCreateArgs>({
  battleDataTerastal: {
    one: {
      data: {
        rate: 9276366.290957993,
        type: { create: { name: 'String', battleIndex: 'String' } },
        battleData: {
          create: {
            rank: 7099661,
            form: 5482954,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:22.206Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 2045659,
                height: 3704862.0669249543,
                weight: 5114534.2501029,
                statusH: 7527465,
                statusA: 4744871,
                statusB: 379441,
                statusC: 4827662,
                statusD: 9669853,
                statusS: 7722505,
                imageUrl: 'String',
                base64Image: 'String',
                url: 'String',
                battleIndex: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        rate: 9137354.538929772,
        type: { create: { name: 'String', battleIndex: 'String' } },
        battleData: {
          create: {
            rank: 4971573,
            form: 7337679,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:22.206Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 286634,
                height: 2725678.2005004697,
                weight: 8987787.068533905,
                statusH: 8304319,
                statusA: 499479,
                statusB: 4149429,
                statusC: 1742467,
                statusD: 1424054,
                statusS: 6282,
                imageUrl: 'String',
                base64Image: 'String',
                url: 'String',
                battleIndex: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  BattleDataTerastal,
  'battleDataTerastal'
>
