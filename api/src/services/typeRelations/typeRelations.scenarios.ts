import type { Prisma, TypeRelation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TypeRelationCreateArgs>({
  typeRelation: {
    one: {
      data: {
        ratio: 8031453.981173214,
        from: { create: { name: 'String' } },
        to: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        ratio: 6304109.735934756,
        from: { create: { name: 'String' } },
        to: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TypeRelation, 'typeRelation'>
