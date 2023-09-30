import type { Prisma, TypeRelation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TypeRelationCreateArgs>({
  typeRelation: {
    one: {
      data: {
        ratio: 4819441.544852352,
        from: { create: { name: 'String' } },
        to: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        ratio: 8150161.654600609,
        from: { create: { name: 'String' } },
        to: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TypeRelation, 'typeRelation'>
