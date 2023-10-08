import type { BattleDataAbility, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataAbilityCreateArgs>({
  battleDataAbility: {
    one: {
      data: {
        rate: 1186976.9148859,
        ability: {
          create: { name: 'String', detail: 'String', battleIndex: 'String' },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 8336253,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:34.772Z',
                startAt: '2023-10-04T13:43:34.772Z',
                endAt: '2023-10-04T13:43:34.772Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 6066244.582546,
                weight: 6078551.013512,
                statusH: 8998265,
                statusA: 203588,
                statusB: 7545553,
                statusC: 2080018,
                statusD: 5977034,
                statusS: 7476862,
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
        rate: 8686246.388593996,
        ability: {
          create: { name: 'String', detail: 'String', battleIndex: 'String' },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 1430240,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:34.772Z',
                startAt: '2023-10-04T13:43:34.772Z',
                endAt: '2023-10-04T13:43:34.772Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 1698856.2260872354,
                weight: 4302497.164322603,
                statusH: 611095,
                statusA: 4699401,
                statusB: 3353473,
                statusC: 4103862,
                statusD: 5416052,
                statusS: 955190,
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
  BattleDataAbility,
  'battleDataAbility'
>
