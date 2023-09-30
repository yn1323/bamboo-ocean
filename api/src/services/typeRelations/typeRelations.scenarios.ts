import type { Prisma, TypeRelation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TypeRelationCreateArgs>({
  typeRelation: {
    one: {
      data: {
        rate: 6460255.789654629,
        from: { create: { name: 'String', battleIndex: 'String' } },
        to: { create: { name: 'String', battleIndex: 'String' } },
      },
    },
    two: {
      data: {
        rate: 6078302.246691143,
        from: { create: { name: 'String', battleIndex: 'String' } },
        to: { create: { name: 'String', battleIndex: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TypeRelation, 'typeRelation'>
