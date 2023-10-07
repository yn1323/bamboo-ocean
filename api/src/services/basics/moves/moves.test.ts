import type { Move } from '@prisma/client'

import { createMove, deleteMove, move, moves, updateMove } from './moves'
import type { StandardScenario } from './moves.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('moves', () => {
  scenario('returns all moves', async (scenario: StandardScenario) => {
    const result = await moves()

    expect(result.length).toEqual(Object.keys(scenario.move).length)
  })

  scenario('returns a single move', async (scenario: StandardScenario) => {
    const result = await move({ id: scenario.move.one.id })

    expect(result).toEqual(scenario.move.one)
  })

  scenario('creates a move', async () => {
    const result = await createMove({
      input: {
        target: 'String',
        detail: 'String',
        name: 'String',
        power: 9497009,
        accuracy: 5357511,
        pp: 7240772,
        isTouchable: true,
        enableProtect: true,
        battleIndex: 'String',
      },
    })

    expect(result.target).toEqual('String')
    expect(result.detail).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.power).toEqual(9497009)
    expect(result.accuracy).toEqual(5357511)
    expect(result.pp).toEqual(7240772)
    expect(result.isTouchable).toEqual(true)
    expect(result.enableProtect).toEqual(true)
    expect(result.battleIndex).toEqual('String')
  })

  scenario('updates a move', async (scenario: StandardScenario) => {
    const original = (await move({ id: scenario.move.one.id })) as Move
    const result = await updateMove({
      id: original.id,
      input: { target: 'String2' },
    })

    expect(result.target).toEqual('String2')
  })

  scenario('deletes a move', async (scenario: StandardScenario) => {
    const original = (await deleteMove({ id: scenario.move.one.id })) as Move
    const result = await move({ id: original.id })

    expect(result).toEqual(null)
  })
})
