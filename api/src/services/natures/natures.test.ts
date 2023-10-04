import type { Nature } from '@prisma/client'

import {
  createNature,
  deleteNature,
  nature,
  natures,
  updateNature,
} from './natures'
import type { StandardScenario } from './natures.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('natures', () => {
  scenario('returns all natures', async (scenario: StandardScenario) => {
    const result = await natures()

    expect(result.length).toEqual(Object.keys(scenario.nature).length)
  })

  scenario('returns a single nature', async (scenario: StandardScenario) => {
    const result = await nature({ id: scenario.nature.one.id })

    expect(result).toEqual(scenario.nature.one)
  })

  scenario('creates a nature', async () => {
    const result = await createNature({
      input: {
        name: 'String',
        battleIndex: 'String',
        increase: 'String',
        decrease: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.battleIndex).toEqual('String')
    expect(result.increase).toEqual('String')
    expect(result.decrease).toEqual('String')
  })

  scenario('updates a nature', async (scenario: StandardScenario) => {
    const original = (await nature({ id: scenario.nature.one.id })) as Nature
    const result = await updateNature({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a nature', async (scenario: StandardScenario) => {
    const original = (await deleteNature({
      id: scenario.nature.one.id,
    })) as Nature
    const result = await nature({ id: original.id })

    expect(result).toEqual(null)
  })
})
