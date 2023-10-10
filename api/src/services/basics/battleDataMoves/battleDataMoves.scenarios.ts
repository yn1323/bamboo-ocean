import type { BattleDataMove, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataMoveCreateArgs>({
  battleDataMove: {
    one: {
      data: {
        rate: 2092765.5381204,
        move: {
          create: {
            target: 'String',
            detail: 'String',
            name: 'String',
            power: 7868548,
            accuracy: 5502940,
            pp: 4444353,
            isTouchable: true,
            enableProtect: true,
            battleIndex: 'String',
          },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 9884390,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:32.248Z',
                startAt: '2023-10-04T13:43:32.248Z',
                endAt: '2023-10-04T13:43:32.248Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 4562489.437166,
                weight: 862085.5402,
                statusH: 2988674,
                statusA: 8221582,
                statusB: 9852201,
                statusC: 3965098,
                statusD: 8056893,
                statusS: 952092,
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
        rate: 5007823.942159329,
        move: {
          create: {
            target: 'String',
            detail: 'String',
            name: 'String',
            power: 6331076,
            accuracy: 1842498,
            pp: 9515180,
            isTouchable: true,
            enableProtect: true,
            battleIndex: 'String',
          },
        },
        battleData: {
          create: {
            no: 'String',
            rank: 4332744,
            battleIndex: {
              create: {
                capturedAt: '2023-10-04T13:43:32.248Z',
                startAt: '2023-10-04T13:43:32.248Z',
                endAt: '2023-10-04T13:43:32.248Z',
                name: 'String',
              },
            },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 11,
                height: 2026012.8150387579,
                weight: 1655712.4836376635,
                statusH: 4252673,
                statusA: 2190137,
                statusB: 4407439,
                statusC: 516628,
                statusD: 988073,
                statusS: 941002,
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

export type StandardScenario = ScenarioData<BattleDataMove, 'battleDataMove'>
