import type { Nature, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NatureCreateArgs>({
  nature: {
    one: {
      data: {
        name: 'String',
        battleIndex: 'String',
        increase: 'String',
        decrease: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        battleIndex: 'String',
        increase: 'String',
        decrease: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Nature, 'nature'>
