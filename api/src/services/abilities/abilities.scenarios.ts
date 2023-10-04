import type { Ability, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AbilityCreateArgs>({
  ability: {
    one: { data: { name: 'String', detail: 'String', battleIndex: 'String' } },
    two: { data: { name: 'String', detail: 'String', battleIndex: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Ability, 'ability'>
