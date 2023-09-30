import type { BattleDataMove } from '@prisma/client'

import {
  battleDataMoves,
  battleDataMove,
  createBattleDataMove,
  updateBattleDataMove,
  deleteBattleDataMove,
} from './battleDataMoves'
import type { StandardScenario } from './battleDataMoves.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleDataMoves', () => {
  scenario(
    'returns all battleDataMoves',
    async (scenario: StandardScenario) => {
      const result = await battleDataMoves()

      expect(result.length).toEqual(Object.keys(scenario.battleDataMove).length)
    }
  )

  scenario(
    'returns a single battleDataMove',
    async (scenario: StandardScenario) => {
      const result = await battleDataMove({
        id: scenario.battleDataMove.one.id,
      })

      expect(result).toEqual(scenario.battleDataMove.one)
    }
  )

  scenario('creates a battleDataMove', async (scenario: StandardScenario) => {
    const result = await createBattleDataMove({
      input: {
        moveId: scenario.battleDataMove.two.moveId,
        rate: 8690915.968809983,
        battleDataId: scenario.battleDataMove.two.battleDataId,
      },
    })

    expect(result.moveId).toEqual(scenario.battleDataMove.two.moveId)
    expect(result.rate).toEqual(8690915.968809983)
    expect(result.battleDataId).toEqual(
      scenario.battleDataMove.two.battleDataId
    )
  })

  scenario('updates a battleDataMove', async (scenario: StandardScenario) => {
    const original = (await battleDataMove({
      id: scenario.battleDataMove.one.id,
    })) as BattleDataMove
    const result = await updateBattleDataMove({
      id: original.id,
      input: { rate: 8194890.009188653 },
    })

    expect(result.rate).toEqual(8194890.009188653)
  })

  scenario('deletes a battleDataMove', async (scenario: StandardScenario) => {
    const original = (await deleteBattleDataMove({
      id: scenario.battleDataMove.one.id,
    })) as BattleDataMove
    const result = await battleDataMove({ id: original.id })

    expect(result).toEqual(null)
  })
})
