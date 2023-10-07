import type { BattleDataItem, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataItemCreateArgs>({
  battleDataItem: {
    one: {
      data: {
        rate: 7397589.291135,
        Item: {
          create: { name: 'String', detail: 'String', battleIndex: 'String' },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 7833851,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:39.942Z',
                startAt: '2023-10-04T13:43:39.942Z',
                endAt: '2023-10-04T13:43:39.942Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 'String',
                height: 1288634.9107313,
                weight: 1519999.806663,
                statusH: 846051,
                statusA: 8198504,
                statusB: 9692921,
                statusC: 6548760,
                statusD: 531716,
                statusS: 4560869,
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
        rate: 4825762.298516,
        Item: {
          create: { name: 'String', detail: 'String', battleIndex: 'String' },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 7814757,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:39.942Z',
                startAt: '2023-10-04T13:43:39.942Z',
                endAt: '2023-10-04T13:43:39.942Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 'String',
                height: 1431113.21713,
                weight: 4849585.814161,
                statusH: 2711587,
                statusA: 5911650,
                statusB: 9003283,
                statusC: 3846999,
                statusD: 1413594,
                statusS: 6320770,
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
