import type { Item, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: { data: { name: 'String', detail: 'String', battleIndex: 'String' } },
    two: { data: { name: 'String', detail: 'String', battleIndex: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Item, 'item'>
