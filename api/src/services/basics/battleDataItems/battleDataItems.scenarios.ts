import type { BattleDataItem, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataItemCreateArgs>({
  battleDataItem: {
    one: {
      data: {
        rate: 8055544.953431,
        Item: {
          create: {
            name: 'String',
            detail: 'String',
            battleIndex: 'String',
            base64Image: 'String',
          },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 7917756,
            battleIndex: {
              create: {
                capturedAt: '2023-10-07T14:20:09.700Z',
                startAt: '2023-10-07T14:20:09.700Z',
                endAt: '2023-10-07T14:20:09.700Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 261090.46772089,
                weight: 812920.4850728,
                statusH: 9933351,
                statusA: 9666522,
                statusB: 2372580,
                statusC: 118306,
                statusD: 6989699,
                statusS: 8833594,
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
        rate: 3637889.9845446,
        Item: {
          create: {
            name: 'String',
            detail: 'String',
            battleIndex: 'String',
            base64Image: 'String',
          },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 3270443,
            battleIndex: {
              create: {
                capturedAt: '2023-10-07T14:20:09.700Z',
                startAt: '2023-10-07T14:20:09.700Z',
                endAt: '2023-10-07T14:20:09.700Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 548225.8831718,
                weight: 8878786.291464,
                statusH: 3762099,
                statusA: 4635773,
                statusB: 4462137,
                statusC: 6310365,
                statusD: 7937338,
                statusS: 6026606,
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

export type StandardScenario = ScenarioData<BattleDataItem, 'battleDataItem'>
