import type { Country, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CountryCreateArgs>({
  country: {
    one: { data: { name: 'String191118' } },
    two: { data: { name: 'String1904578' } },
  },
})

export type StandardScenario = ScenarioData<Country, 'country'>
