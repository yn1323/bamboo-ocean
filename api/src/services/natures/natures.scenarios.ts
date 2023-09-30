import type { Prisma, Nature } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NatureCreateArgs>({
  nature: {
    one: { data: { name: 'String', battleIndex: 'String' } },
    two: { data: { name: 'String', battleIndex: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Nature, 'nature'>
