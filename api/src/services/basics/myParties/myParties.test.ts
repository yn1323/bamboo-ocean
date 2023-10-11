import type { MyParty } from '@prisma/client'

import {
  createMyParty,
  deleteMyParty,
  myParties,
  myParty,
  updateMyParty,
} from './myParties'
import type { StandardScenario } from './myParties.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('myParties', () => {
  scenario('returns all myParties', async (scenario: StandardScenario) => {
    const result = await myParties()

    expect(result.length).toEqual(Object.keys(scenario.myParty).length)
  })

  scenario('returns a single myParty', async (scenario: StandardScenario) => {
    const result = await myParty({ id: scenario.myParty.one.id })

    expect(result).toEqual(scenario.myParty.one)
  })

  scenario('creates a myParty', async (scenario: StandardScenario) => {
    const result = await createMyParty({
      input: {
        name: 'String',
        favorite: true,
        memo: 'String',
        userId: scenario.myParty.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.favorite).toEqual(true)
    expect(result.memo).toEqual('String')
    expect(result.userId).toEqual(scenario.myParty.two.userId)
  })

  scenario('updates a myParty', async (scenario: StandardScenario) => {
    const original = (await myParty({ id: scenario.myParty.one.id })) as MyParty
    const result = await updateMyParty({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a myParty', async (scenario: StandardScenario) => {
    const original = (await deleteMyParty({
      id: scenario.myParty.one.id,
    })) as MyParty
    const result = await myParty({ id: original.id })

    expect(result).toEqual(null)
  })
})
