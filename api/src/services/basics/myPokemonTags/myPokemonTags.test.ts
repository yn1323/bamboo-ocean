import type { MyPokemonTag } from '@prisma/client'

import {
  createMyPokemonTag,
  deleteMyPokemonTag,
  myPokemonTag,
  myPokemonTags,
  updateMyPokemonTag,
} from './myPokemonTags'
import type { StandardScenario } from './myPokemonTags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('myPokemonTags', () => {
  scenario('returns all myPokemonTags', async (scenario: StandardScenario) => {
    const result = await myPokemonTags()

    expect(result.length).toEqual(Object.keys(scenario.myPokemonTag).length)
  })

  scenario(
    'returns a single myPokemonTag',
    async (scenario: StandardScenario) => {
      const result = await myPokemonTag({ id: scenario.myPokemonTag.one.id })

      expect(result).toEqual(scenario.myPokemonTag.one)
    }
  )

  scenario('creates a myPokemonTag', async (scenario: StandardScenario) => {
    const result = await createMyPokemonTag({
      input: {
        name: 'String',
        favorite: true,
        memo: 'String',
        userId: scenario.myPokemonTag.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.favorite).toEqual(true)
    expect(result.memo).toEqual('String')
    expect(result.userId).toEqual(scenario.myPokemonTag.two.userId)
  })

  scenario('updates a myPokemonTag', async (scenario: StandardScenario) => {
    const original = (await myPokemonTag({
      id: scenario.myPokemonTag.one.id,
    })) as MyPokemonTag
    const result = await updateMyPokemonTag({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a myPokemonTag', async (scenario: StandardScenario) => {
    const original = (await deleteMyPokemonTag({
      id: scenario.myPokemonTag.one.id,
    })) as MyPokemonTag
    const result = await myPokemonTag({ id: original.id })

    expect(result).toEqual(null)
  })
})
