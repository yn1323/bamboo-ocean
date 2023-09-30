import type { BattleDataItem } from '@prisma/client'

import {
  battleDataItems,
  battleDataItem,
  createBattleDataItem,
  updateBattleDataItem,
  deleteBattleDataItem,
} from './battleDataItems'
import type { StandardScenario } from './battleDataItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleDataItems', () => {
  scenario(
    'returns all battleDataItems',
    async (scenario: StandardScenario) => {
      const result = await battleDataItems()

      expect(result.length).toEqual(Object.keys(scenario.battleDataItem).length)
    }
  )

  scenario(
    'returns a single battleDataItem',
    async (scenario: StandardScenario) => {
      const result = await battleDataItem({
        id: scenario.battleDataItem.one.id,
      })

      expect(result).toEqual(scenario.battleDataItem.one)
    }
  )

  scenario('creates a battleDataItem', async (scenario: StandardScenario) => {
    const result = await createBattleDataItem({
      input: {
        itemId: scenario.battleDataItem.two.itemId,
        rate: 4737700.653459467,
        battleDataId: scenario.battleDataItem.two.battleDataId,
      },
    })

    expect(result.itemId).toEqual(scenario.battleDataItem.two.itemId)
    expect(result.rate).toEqual(4737700.653459467)
    expect(result.battleDataId).toEqual(
      scenario.battleDataItem.two.battleDataId
    )
  })

  scenario('updates a battleDataItem', async (scenario: StandardScenario) => {
    const original = (await battleDataItem({
      id: scenario.battleDataItem.one.id,
    })) as BattleDataItem
    const result = await updateBattleDataItem({
      id: original.id,
      input: { rate: 6283696.432432135 },
    })

    expect(result.rate).toEqual(6283696.432432135)
  })

  scenario('deletes a battleDataItem', async (scenario: StandardScenario) => {
    const original = (await deleteBattleDataItem({
      id: scenario.battleDataItem.one.id,
    })) as BattleDataItem
    const result = await battleDataItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
