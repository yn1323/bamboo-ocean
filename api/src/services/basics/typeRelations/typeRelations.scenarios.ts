import type { Prisma, TypeRelation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TypeRelationCreateArgs>({
  typeRelation: {
    one: {
      data: {
        rate: 7253025.52264,
        from: { create: { name: 'String', battleIndex: 'String' } },
        to: { create: { name: 'String', battleIndex: 'String' } },
      },
    },
    two: {
      data: {
        rate: 1739095.3584044,
        from: { create: { name: 'String', battleIndex: 'String' } },
        to: { create: { name: 'String', battleIndex: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TypeRelation, 'typeRelation'>
