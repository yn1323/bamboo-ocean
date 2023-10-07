import type { BattleData } from '@prisma/client'

import {
  battleData,
  battleDatas,
  createBattleData,
  deleteBattleData,
  updateBattleData,
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
        no: 'String',
        rank: 54907,
      },
    })

    expect(result.battleIndexId).toEqual(scenario.battleData.two.battleIndexId)
    expect(result.pokemonId).toEqual(scenario.battleData.two.pokemonId)
    expect(result.no).toEqual('String')
    expect(result.rank).toEqual(54907)
  })

  scenario('updates a battleData', async (scenario: StandardScenario) => {
    const original = (await battleData({
      id: scenario.battleData.one.id,
    })) as BattleData
    const result = await updateBattleData({
      id: original.id,
      input: { no: 'String2' },
    })

    expect(result.no).toEqual('String2')
  })

  scenario('deletes a battleData', async (scenario: StandardScenario) => {
    const original = (await deleteBattleData({
      id: scenario.battleData.one.id,
    })) as BattleData
    const result = await battleData({ id: original.id })

    expect(result).toEqual(null)
  })
})
