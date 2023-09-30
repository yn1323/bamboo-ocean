import type { BattleDataTerastal } from '@prisma/client'

import {
  battleDataTerastal,
  battleDataTerastals,
  createBattleDataTerastal,
  deleteBattleDataTerastal,
  updateBattleDataTerastal,
} from './battleDataTerastals'
import type { StandardScenario } from './battleDataTerastals.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleDataTerastals', () => {
  scenario(
    'returns all battleDataTerastals',
    async (scenario: StandardScenario) => {
      const result = await battleDataTerastals()

      expect(result.length).toEqual(
        Object.keys(scenario.battleDataTerastal).length
      )
    }
  )

  scenario(
    'returns a single battleDataTerastal',
    async (scenario: StandardScenario) => {
      const result = await battleDataTerastal({
        id: scenario.battleDataTerastal.one.id,
      })

      expect(result).toEqual(scenario.battleDataTerastal.one)
    }
  )

  scenario(
    'creates a battleDataTerastal',
    async (scenario: StandardScenario) => {
      const result = await createBattleDataTerastal({
        input: {
          typeId: scenario.battleDataTerastal.two.typeId,
          rate: 3362927.2420049,
          battleDataId: scenario.battleDataTerastal.two.battleDataId,
        },
      })

      expect(result.typeId).toEqual(scenario.battleDataTerastal.two.typeId)
      expect(result.rate).toEqual(3362927.2420049)
      expect(result.battleDataId).toEqual(
        scenario.battleDataTerastal.two.battleDataId
      )
    }
  )

  scenario(
    'updates a battleDataTerastal',
    async (scenario: StandardScenario) => {
      const original = (await battleDataTerastal({
        id: scenario.battleDataTerastal.one.id,
      })) as BattleDataTerastal
      const result = await updateBattleDataTerastal({
        id: original.id,
        input: { rate: 1207169.9858884 },
      })

      expect(result.rate).toEqual(1207169.9858884)
    }
  )

  scenario(
    'deletes a battleDataTerastal',
    async (scenario: StandardScenario) => {
      const original = (await deleteBattleDataTerastal({
        id: scenario.battleDataTerastal.one.id,
      })) as BattleDataTerastal
      const result = await battleDataTerastal({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
