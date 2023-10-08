import type { MyPartyTag } from '@prisma/client'

import {
  createMyPartyTag,
  deleteMyPartyTag,
  myPartyTag,
  myPartyTags,
  updateMyPartyTag,
} from './myPartyTags'
import type { StandardScenario } from './myPartyTags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('myPartyTags', () => {
  scenario('returns all myPartyTags', async (scenario: StandardScenario) => {
    const result = await myPartyTags()

    expect(result.length).toEqual(Object.keys(scenario.myPartyTag).length)
  })

  scenario(
    'returns a single myPartyTag',
    async (scenario: StandardScenario) => {
      const result = await myPartyTag({ id: scenario.myPartyTag.one.id })

      expect(result).toEqual(scenario.myPartyTag.one)
    }
  )

  scenario('creates a myPartyTag', async (scenario: StandardScenario) => {
    const result = await createMyPartyTag({
      input: {
        name: 'String',
        favorite: true,
        memo: 'String',
        userId: scenario.myPartyTag.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.favorite).toEqual(true)
    expect(result.memo).toEqual('String')
    expect(result.userId).toEqual(scenario.myPartyTag.two.userId)
  })

  scenario('updates a myPartyTag', async (scenario: StandardScenario) => {
    const original = (await myPartyTag({
      id: scenario.myPartyTag.one.id,
    })) as MyPartyTag
    const result = await updateMyPartyTag({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a myPartyTag', async (scenario: StandardScenario) => {
    const original = (await deleteMyPartyTag({
      id: scenario.myPartyTag.one.id,
    })) as MyPartyTag
    const result = await myPartyTag({ id: original.id })

    expect(result).toEqual(null)
  })
})
