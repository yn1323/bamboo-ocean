import type { Type } from '@prisma/client'

import { createType, deleteType, type, types, updateType } from './types'
import type { StandardScenario } from './types.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('types', () => {
  scenario('returns all types', async (scenario: StandardScenario) => {
    const result = await types()

    expect(result.length).toEqual(Object.keys(scenario.type).length)
  })

  scenario('returns a single type', async (scenario: StandardScenario) => {
    const result = await type({ id: scenario.type.one.id })

    expect(result).toEqual(scenario.type.one)
  })

  scenario('creates a type', async () => {
    const result = await createType({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a type', async (scenario: StandardScenario) => {
    const original = (await type({ id: scenario.type.one.id })) as Type
    const result = await updateType({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a type', async (scenario: StandardScenario) => {
    const original = (await deleteType({ id: scenario.type.one.id })) as Type
    const result = await type({ id: original.id })

    expect(result).toEqual(null)
  })
})
