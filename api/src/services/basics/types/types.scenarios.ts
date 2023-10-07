import type { Prisma, Type } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TypeCreateArgs>({
  type: {
    one: { data: { name: 'String', battleIndex: 'String' } },
    two: { data: { name: 'String', battleIndex: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Type, 'type'>
