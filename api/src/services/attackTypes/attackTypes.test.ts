import type { AttackType } from '@prisma/client'

import {
  attackTypes,
  attackType,
  createAttackType,
  updateAttackType,
  deleteAttackType,
} from './attackTypes'
import type { StandardScenario } from './attackTypes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('attackTypes', () => {
  scenario('returns all attackTypes', async (scenario: StandardScenario) => {
    const result = await attackTypes()

    expect(result.length).toEqual(Object.keys(scenario.attackType).length)
  })

  scenario(
    'returns a single attackType',
    async (scenario: StandardScenario) => {
      const result = await attackType({ id: scenario.attackType.one.id })

      expect(result).toEqual(scenario.attackType.one)
    }
  )

  scenario('creates a attackType', async () => {
    const result = await createAttackType({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a attackType', async (scenario: StandardScenario) => {
    const original = (await attackType({
      id: scenario.attackType.one.id,
    })) as AttackType
    const result = await updateAttackType({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a attackType', async (scenario: StandardScenario) => {
    const original = (await deleteAttackType({
      id: scenario.attackType.one.id,
    })) as AttackType
    const result = await attackType({ id: original.id })

    expect(result).toEqual(null)
  })
})
