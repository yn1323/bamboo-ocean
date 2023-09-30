import type { Prisma, BattleDataItem } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataItemCreateArgs>({
  battleDataItem: {
    one: {
      data: {
        rate: 7319331.368919866,
        Item: {
          create: { name: 'String', detail: 'String', battleIndex: 'String' },
        },
        battleData: {
          create: {
            rank: 6659767,
            form: 7096998,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:20.498Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 9573027,
                height: 9383134.214591622,
                weight: 3724984.2702306267,
                statusH: 6753223,
                statusA: 9477520,
                statusB: 98456,
                statusC: 590221,
                statusD: 4345378,
                statusS: 3353124,
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
        rate: 8253142.270359934,
        Item: {
          create: { name: 'String', detail: 'String', battleIndex: 'String' },
        },
        battleData: {
          create: {
            rank: 4991757,
            form: 6800438,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:20.498Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 5554949,
                height: 7573213.093465146,
                weight: 6318259.230027406,
                statusH: 4392366,
                statusA: 1474332,
                statusB: 5247665,
                statusC: 3685777,
                statusD: 2482155,
                statusS: 9020261,
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

export type StandardScenario = ScenarioData<BattleDataItem, 'battleDataItem'>
