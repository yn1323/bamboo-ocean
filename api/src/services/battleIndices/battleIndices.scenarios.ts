import type { Prisma, BattleIndex } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BattleIndexCreateArgs>({
  battleIndex: {
    one: { data: { dateAt: '2023-09-30T15:43:05.186Z' } },
    two: { data: { dateAt: '2023-09-30T15:43:05.186Z' } },
  },
})

export type StandardScenario = ScenarioData<BattleIndex, 'battleIndex'>
