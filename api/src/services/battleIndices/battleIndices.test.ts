import type { BattleIndex } from '@prisma/client'

import {
  battleIndices,
  battleIndex,
  createBattleIndex,
  updateBattleIndex,
  deleteBattleIndex,
} from './battleIndices'
import type { StandardScenario } from './battleIndices.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('battleIndices', () => {
  scenario('returns all battleIndices', async (scenario: StandardScenario) => {
    const result = await battleIndices()

    expect(result.length).toEqual(Object.keys(scenario.battleIndex).length)
  })

  scenario(
    'returns a single battleIndex',
    async (scenario: StandardScenario) => {
      const result = await battleIndex({ id: scenario.battleIndex.one.id })

      expect(result).toEqual(scenario.battleIndex.one)
    }
  )

  scenario('creates a battleIndex', async () => {
    const result = await createBattleIndex({
      input: {
        capturedAt: '2023-10-04T14:07:20.500Z',
        startAt: '2023-10-04T14:07:20.500Z',
        endAt: '2023-10-04T14:07:20.500Z',
        name: 'String',
      },
    })

    expect(result.capturedAt).toEqual(new Date('2023-10-04T14:07:20.500Z'))
    expect(result.startAt).toEqual(new Date('2023-10-04T14:07:20.500Z'))
    expect(result.endAt).toEqual(new Date('2023-10-04T14:07:20.500Z'))
    expect(result.name).toEqual('String')
  })

  scenario('updates a battleIndex', async (scenario: StandardScenario) => {
    const original = (await battleIndex({
      id: scenario.battleIndex.one.id,
    })) as BattleIndex
    const result = await updateBattleIndex({
      id: original.id,
      input: { capturedAt: '2023-10-05T14:07:20.500Z' },
    })

    expect(result.capturedAt).toEqual(new Date('2023-10-05T14:07:20.500Z'))
  })

  scenario('deletes a battleIndex', async (scenario: StandardScenario) => {
    const original = (await deleteBattleIndex({
      id: scenario.battleIndex.one.id,
    })) as BattleIndex
    const result = await battleIndex({ id: original.id })

    expect(result).toEqual(null)
  })
})
