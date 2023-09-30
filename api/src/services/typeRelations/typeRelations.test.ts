import type { TypeRelation } from '@prisma/client'

import {
  createTypeRelation,
  deleteTypeRelation,
  typeRelation,
  typeRelations,
  updateTypeRelation,
} from './typeRelations'
import type { StandardScenario } from './typeRelations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('typeRelations', () => {
  scenario('returns all typeRelations', async (scenario: StandardScenario) => {
    const result = await typeRelations()

    expect(result.length).toEqual(Object.keys(scenario.typeRelation).length)
  })

  scenario(
    'returns a single typeRelation',
    async (scenario: StandardScenario) => {
      const result = await typeRelation({ id: scenario.typeRelation.one.id })

      expect(result).toEqual(scenario.typeRelation.one)
    }
  )

  scenario('creates a typeRelation', async (scenario: StandardScenario) => {
    const result = await createTypeRelation({
      input: {
        fromId: scenario.typeRelation.two.fromId,
        toId: scenario.typeRelation.two.toId,
        ratio: 8264537.692559,
      },
    })

    expect(result.fromId).toEqual(scenario.typeRelation.two.fromId)
    expect(result.toId).toEqual(scenario.typeRelation.two.toId)
    expect(result.ratio).toEqual(8264537.692559)
  })

  scenario('updates a typeRelation', async (scenario: StandardScenario) => {
    const original = (await typeRelation({
      id: scenario.typeRelation.one.id,
    })) as TypeRelation
    const result = await updateTypeRelation({
      id: original.id,
      input: { ratio: 2058223.9430841 },
    })

    expect(result.ratio).toEqual(2058223.9430841)
  })

  scenario('deletes a typeRelation', async (scenario: StandardScenario) => {
    const original = (await deleteTypeRelation({
      id: scenario.typeRelation.one.id,
    })) as TypeRelation
    const result = await typeRelation({ id: original.id })

    expect(result).toEqual(null)
  })
})
