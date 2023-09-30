import type { Prisma, BattleDataMove } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataMoveCreateArgs>({
  battleDataMove: {
    one: {
      data: {
        rate: 870762.4146233428,
        move: {
          create: {
            target: 'String',
            detail: 'String',
            name: 'String',
            power: 1639329,
            hitRange: 1945887,
            pp: 2436980,
            isTouchable: true,
            enableProtect: true,
            battleIndex: 'String',
            type: { create: { name: 'String', battleIndex: 'String' } },
            attackType: { create: { name: 'String' } },
          },
        },
        battleData: {
          create: {
            rank: 4750434,
            form: 9665099,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:15.180Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 8551814,
                height: 3896034.4121656097,
                weight: 5380791.60355041,
                statusH: 202769,
                statusA: 3761787,
                statusB: 5333746,
                statusC: 1521695,
                statusD: 669008,
                statusS: 1659984,
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
        rate: 7686830.6690542875,
        move: {
          create: {
            target: 'String',
            detail: 'String',
            name: 'String',
            power: 6858269,
            hitRange: 424194,
            pp: 3304916,
            isTouchable: true,
            enableProtect: true,
            battleIndex: 'String',
            type: { create: { name: 'String', battleIndex: 'String' } },
            attackType: { create: { name: 'String' } },
          },
        },
        battleData: {
          create: {
            rank: 8367846,
            form: 5465876,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:15.180Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 9832626,
                height: 6406722.7604417475,
                weight: 3949632.830198431,
                statusH: 5590133,
                statusA: 5639680,
                statusB: 6885693,
                statusC: 4846164,
                statusD: 723171,
                statusS: 742373,
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

export type StandardScenario = ScenarioData<BattleDataMove, 'battleDataMove'>
