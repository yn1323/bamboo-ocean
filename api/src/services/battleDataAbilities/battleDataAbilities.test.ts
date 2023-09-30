import type { BattleDataAbility } from '@prisma/client'

import {
  battleDataAbilities,
  battleDataAbility,
  createBattleDataAbility,
  deleteBattleDataAbility,
  updateBattleDataAbility,
} from './battleDataAbilities'
import type { StandardScenario } from './battleDataAbilities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleDataAbilities', () => {
  scenario(
    'returns all battleDataAbilities',
    async (scenario: StandardScenario) => {
      const result = await battleDataAbilities()

      expect(result.length).toEqual(
        Object.keys(scenario.battleDataAbility).length
      )
    }
  )

  scenario(
    'returns a single battleDataAbility',
    async (scenario: StandardScenario) => {
      const result = await battleDataAbility({
        id: scenario.battleDataAbility.one.id,
      })

      expect(result).toEqual(scenario.battleDataAbility.one)
    }
  )

  scenario(
    'creates a battleDataAbility',
    async (scenario: StandardScenario) => {
      const result = await createBattleDataAbility({
        input: {
          abilityId: scenario.battleDataAbility.two.abilityId,
          rate: 3288068.602784,
          battleDataId: scenario.battleDataAbility.two.battleDataId,
        },
      })

      expect(result.abilityId).toEqual(scenario.battleDataAbility.two.abilityId)
      expect(result.rate).toEqual(3288068.602784)
      expect(result.battleDataId).toEqual(
        scenario.battleDataAbility.two.battleDataId
      )
    }
  )

  scenario(
    'updates a battleDataAbility',
    async (scenario: StandardScenario) => {
      const original = (await battleDataAbility({
        id: scenario.battleDataAbility.one.id,
      })) as BattleDataAbility
      const result = await updateBattleDataAbility({
        id: original.id,
        input: { rate: 3359155.8244899 },
      })

      expect(result.rate).toEqual(3359155.8244899)
    }
  )

  scenario(
    'deletes a battleDataAbility',
    async (scenario: StandardScenario) => {
      const original = (await deleteBattleDataAbility({
        id: scenario.battleDataAbility.one.id,
      })) as BattleDataAbility
      const result = await battleDataAbility({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
