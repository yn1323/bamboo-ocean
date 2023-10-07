import type { BattleDataTerastal, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataTerastalCreateArgs>({
  battleDataTerastal: {
    one: {
      data: {
        rate: 6458319.981417,
        type: { create: { name: 'String', battleIndex: 'String' } },
        battleData: {
          create: {
            no: 'String',
            rank: 5210340,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:42.579Z',
                startAt: '2023-10-04T13:43:42.579Z',
                endAt: '2023-10-04T13:43:42.579Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 'String',
                height: 9750082.187862,
                weight: 7739654.241943,
                statusH: 1726874,
                statusA: 8829214,
                statusB: 2654038,
                statusC: 994603,
                statusD: 6974618,
                statusS: 1295559,
                base64Image: 'String',
                url: 'String',
                battleIndex: 'String',
                battleFormIndex: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        rate: 2104775.9470869,
        type: { create: { name: 'String', battleIndex: 'String' } },
        battleData: {
          create: {
            no: 'String',
            rank: 6216979,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:42.579Z',
                startAt: '2023-10-04T13:43:42.579Z',
                endAt: '2023-10-04T13:43:42.579Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 'String',
                height: 7654872.018394,
                weight: 5544011.60666,
                statusH: 8598672,
                statusA: 4392808,
                statusB: 6977375,
                statusC: 8034166,
                statusD: 3527532,
                statusS: 379825,
                base64Image: 'String',
                url: 'String',
                battleIndex: 'String',
                battleFormIndex: 'String',
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
