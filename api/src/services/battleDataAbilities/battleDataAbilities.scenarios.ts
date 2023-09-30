import type { Prisma, BattleDataAbility } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleDataAbilityCreateArgs>({
  battleDataAbility: {
    one: {
      data: {
        rate: 351386.2053243333,
        ability: { create: { name: 'String', detail: 'String' } },
        battleData: {
          create: {
            rank: 7828051,
            form: 8309674,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:16.893Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 1052410,
                height: 4090068.021322626,
                weight: 968420.4937520869,
                statusH: 5611392,
                statusA: 1935376,
                statusB: 382876,
                statusC: 5128521,
                statusD: 7105359,
                statusS: 3927009,
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
        rate: 8919066.079857478,
        ability: { create: { name: 'String', detail: 'String' } },
        battleData: {
          create: {
            rank: 1995169,
            form: 9556078,
            BattleIndex: { create: { dateAt: '2023-09-30T15:43:16.893Z' } },
            pokemon: {
              create: {
                name: 'String',
                form: 'String',
                no: 9857241,
                height: 3197636.375708459,
                weight: 139520.09949755206,
                statusH: 5606604,
                statusA: 1826503,
                statusB: 2823045,
                statusC: 7477028,
                statusD: 7422568,
                statusS: 9470872,
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
  BattleDataAbility,
  'battleDataAbility'
>
