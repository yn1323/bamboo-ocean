import type { BattleData } from '@prisma/client'

import {
  battleDatas,
  battleData,
  createBattleData,
  updateBattleData,
  deleteBattleData,
} from './battleDatas'
import type { StandardScenario } from './battleDatas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleDatas', () => {
  scenario('returns all battleDatas', async (scenario: StandardScenario) => {
    const result = await battleDatas()

    expect(result.length).toEqual(Object.keys(scenario.battleData).length)
  })

  scenario(
    'returns a single battleData',
    async (scenario: StandardScenario) => {
      const result = await battleData({ id: scenario.battleData.one.id })

      expect(result).toEqual(scenario.battleData.one)
    }
  )

  scenario('creates a battleData', async (scenario: StandardScenario) => {
    const result = await createBattleData({
      input: {
        battleIndexId: scenario.battleData.two.battleIndexId,
        pokemonId: scenario.battleData.two.pokemonId,
        rank: 8585648,
        form: 8452477,
      },
    })

    expect(result.battleIndexId).toEqual(scenario.battleData.two.battleIndexId)
    expect(result.pokemonId).toEqual(scenario.battleData.two.pokemonId)
    expect(result.rank).toEqual(8585648)
    expect(result.form).toEqual(8452477)
  })

  scenario('updates a battleData', async (scenario: StandardScenario) => {
    const original = (await battleData({
      id: scenario.battleData.one.id,
    })) as BattleData
    const result = await updateBattleData({
      id: original.id,
      input: { rank: 8252506 },
    })

    expect(result.rank).toEqual(8252506)
  })

  scenario('deletes a battleData', async (scenario: StandardScenario) => {
    const original = (await deleteBattleData({
      id: scenario.battleData.one.id,
    })) as BattleData
    const result = await battleData({ id: original.id })

    expect(result).toEqual(null)
  })
})
