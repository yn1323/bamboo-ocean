import type { Move, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MoveCreateArgs>({
  move: {
    one: {
      data: {
        target: 'String',
        detail: 'String',
        name: 'String',
        power: 3469855,
        accuracy: 2666625,
        pp: 6056571,
        isTouchable: true,
        enableProtect: true,
        battleIndex: 'String',
      },
    },
    two: {
      data: {
        target: 'String',
        detail: 'String',
        name: 'String',
        power: 8122339,
        accuracy: 5346031,
        pp: 7630682,
        isTouchable: true,
        enableProtect: true,
        battleIndex: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Move, 'move'>
