import type { Prisma, BattleData } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataCreateArgs>({
  battleData: {
    one: {
      data: {
        rank: 1024150,
        form: 9011117,
        BattleIndex: { create: { dateAt: '2023-09-30T15:43:13.346Z' } },
        pokemon: {
          create: {
            name: 'String',
            form: 'String',
            no: 6387324,
            height: 7505158.310878015,
            weight: 873883.3809175551,
            statusH: 5912462,
            statusA: 4571123,
            statusB: 1080933,
            statusC: 2264486,
            statusD: 2657398,
            statusS: 2784996,
            imageUrl: 'String',
            base64Image: 'String',
            url: 'String',
            battleIndex: 'String',
          },
        },
      },
    },
    two: {
      data: {
        rank: 9340793,
        form: 7561586,
        BattleIndex: { create: { dateAt: '2023-09-30T15:43:13.346Z' } },
        pokemon: {
          create: {
            name: 'String',
            form: 'String',
            no: 1076419,
            height: 8766818.383444924,
            weight: 6436737.375984807,
            statusH: 6519435,
            statusA: 4471393,
            statusB: 4405310,
            statusC: 601125,
            statusD: 1524096,
            statusS: 5786621,
            imageUrl: 'String',
            base64Image: 'String',
            url: 'String',
            battleIndex: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<BattleData, 'battleData'>
