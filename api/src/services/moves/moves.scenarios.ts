import type { Prisma, Move } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MoveCreateArgs>({
  move: {
    one: {
      data: {
        target: 'String',
        detail: 'String',
        name: 'String',
        power: 4178980,
        hitRange: 6518585,
        pp: 652089,
        isTouchable: true,
        enableProtect: true,
        battleIndex: 'String',
        type: { create: { name: 'String', battleIndex: 'String' } },
        attackType: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        target: 'String',
        detail: 'String',
        name: 'String',
        power: 2494460,
        hitRange: 4459862,
        pp: 5268045,
        isTouchable: true,
        enableProtect: true,
        battleIndex: 'String',
        type: { create: { name: 'String', battleIndex: 'String' } },
        attackType: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Move, 'move'>
