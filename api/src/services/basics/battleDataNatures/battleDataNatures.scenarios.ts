import type { BattleDataNature, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataNatureCreateArgs>({
  battleDataNature: {
    one: {
      data: {
        rate: 1867561.1663607,
        nature: {
          create: {
            name: 'String',
            battleIndex: 'String',
            increase: 'String',
            decrease: 'String',
          },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 1837972,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:37.308Z',
                startAt: '2023-10-04T13:43:37.308Z',
                endAt: '2023-10-04T13:43:37.308Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 4762204.828089,
                weight: 9584337.791496,
                statusH: 6081469,
                statusA: 1533266,
                statusB: 7885905,
                statusC: 7408677,
                statusD: 5460907,
                statusS: 8783180,
                base64Image: 'String',
                imageUrl: 'String',
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
        rate: 1012769.7997973,
        nature: {
          create: {
            name: 'String',
            battleIndex: 'String',
            increase: 'String',
            decrease: 'String',
          },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 619104,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:37.308Z',
                startAt: '2023-10-04T13:43:37.308Z',
                endAt: '2023-10-04T13:43:37.308Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 301367.10053455,
                weight: 477697.16443686,
                statusH: 1185754,
                statusA: 2387587,
                statusB: 4789524,
                statusC: 3454087,
                statusD: 9620753,
                statusS: 1693870,
                base64Image: 'String',
                imageUrl: 'String',
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
  BattleDataNature,
  'battleDataNature'
>
