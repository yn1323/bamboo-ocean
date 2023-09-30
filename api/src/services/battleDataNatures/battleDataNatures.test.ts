import type { BattleDataNature } from '@prisma/client'

import {
  battleDataNature,
  battleDataNatures,
  createBattleDataNature,
  deleteBattleDataNature,
  updateBattleDataNature,
} from './battleDataNatures'
import type { StandardScenario } from './battleDataNatures.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleDataNatures', () => {
  scenario(
    'returns all battleDataNatures',
    async (scenario: StandardScenario) => {
      const result = await battleDataNatures()

      expect(result.length).toEqual(
        Object.keys(scenario.battleDataNature).length
      )
    }
  )

  scenario(
    'returns a single battleDataNature',
    async (scenario: StandardScenario) => {
      const result = await battleDataNature({
        id: scenario.battleDataNature.one.id,
      })

      expect(result).toEqual(scenario.battleDataNature.one)
    }
  )

  scenario('creates a battleDataNature', async (scenario: StandardScenario) => {
    const result = await createBattleDataNature({
      input: {
        natureId: scenario.battleDataNature.two.natureId,
        rate: 109351.57606692,
        battleDataId: scenario.battleDataNature.two.battleDataId,
      },
    })

    expect(result.natureId).toEqual(scenario.battleDataNature.two.natureId)
    expect(result.rate).toEqual(109351.57606692)
    expect(result.battleDataId).toEqual(
      scenario.battleDataNature.two.battleDataId
    )
  })

  scenario('updates a battleDataNature', async (scenario: StandardScenario) => {
    const original = (await battleDataNature({
      id: scenario.battleDataNature.one.id,
    })) as BattleDataNature
    const result = await updateBattleDataNature({
      id: original.id,
      input: { rate: 7639718.3477257 },
    })

    expect(result.rate).toEqual(7639718.3477257)
  })

  scenario('deletes a battleDataNature', async (scenario: StandardScenario) => {
    const original = (await deleteBattleDataNature({
      id: scenario.battleDataNature.one.id,
    })) as BattleDataNature
    const result = await battleDataNature({ id: original.id })

    expect(result).toEqual(null)
  })
})
