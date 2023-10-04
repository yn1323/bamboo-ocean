import type { BattleData, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataCreateArgs>({
  battleData: {
    one: {
      data: {
        no: 'String',
        rank: 7153971,
        battleIndex: {
          create: {
            capturedAt: '2023-10-04T13:43:29.920Z',
            startAt: '2023-10-04T13:43:29.920Z',
            endAt: '2023-10-04T13:43:29.920Z',
            name: 'String',
          },
        },
        pokemon: {
          create: {
            name: 'String',
            form: 'String',
            no: 'String',
            height: 520290.6604524,
            weight: 6414338.9635898,
            statusH: 2107642,
            statusA: 1342317,
            statusB: 1095597,
            statusC: 2236178,
            statusD: 2342949,
            statusS: 9288727,
            base64Image: 'String',
            url: 'String',
            battleIndex: 'String',
            battleFormIndex: 'String',
          },
        },
      },
    },
    two: {
      data: {
        no: 'String',
        rank: 3162681,
        battleIndex: {
          create: {
            capturedAt: '2023-10-04T13:43:29.920Z',
            startAt: '2023-10-04T13:43:29.920Z',
            endAt: '2023-10-04T13:43:29.920Z',
            name: 'String',
          },
        },
        pokemon: {
          create: {
            name: 'String',
            form: 'String',
            no: 'String',
            height: 2857594.5305823,
            weight: 4857092.704429,
            statusH: 4415443,
            statusA: 5012334,
            statusB: 8492795,
            statusC: 8209259,
            statusD: 5801545,
            statusS: 8221925,
            base64Image: 'String',
            url: 'String',
            battleIndex: 'String',
            battleFormIndex: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<BattleData, 'battleData'>
