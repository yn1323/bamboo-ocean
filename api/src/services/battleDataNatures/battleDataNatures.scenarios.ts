import type { Prisma, BattleDataNature } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataNatureCreateArgs>({
  battleDataNature: {
    one: {
      data: {
        rate: 7118905.879487012,
        nature: { create: { name: 'String', battleIndex: 'String' } },
        battleData: {
          create: {
            rank: 7048661,
            form: 4146516,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:18.774Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 2065200,
                height: 9242353.243554376,
                weight: 2272415.394143337,
                statusH: 7256228,
                statusA: 7173607,
                statusB: 9435156,
                statusC: 3941132,
                statusD: 9898345,
                statusS: 7649198,
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
        rate: 5465876.362433493,
        nature: { create: { name: 'String', battleIndex: 'String' } },
        battleData: {
          create: {
            rank: 769522,
            form: 2819401,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:18.774Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 5266819,
                height: 4606921.731724758,
                weight: 3039882.844213344,
                statusH: 5460028,
                statusA: 1530330,
                statusB: 7353521,
                statusC: 2297607,
                statusD: 3293854,
                statusS: 5953809,
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
  BattleDataNature,
  'battleDataNature'
>
