import type { Prisma, BattleIndex } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleIndexCreateArgs>({
  battleIndex: {
    one: {
      data: {
        capturedAt: '2023-10-04T14:07:20.506Z',
        startAt: '2023-10-04T14:07:20.506Z',
        endAt: '2023-10-04T14:07:20.506Z',
        name: 'String',
      },
    },
    two: {
      data: {
        capturedAt: '2023-10-04T14:07:20.506Z',
        startAt: '2023-10-04T14:07:20.506Z',
        endAt: '2023-10-04T14:07:20.506Z',
        name: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<BattleIndex, 'battleIndex'>
