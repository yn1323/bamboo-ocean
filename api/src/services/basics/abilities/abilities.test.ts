import type { Ability } from '@prisma/client'

import {
  abilities,
  ability,
  createAbility,
  deleteAbility,
  updateAbility,
} from './abilities'
import type { StandardScenario } from './abilities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('abilities', () => {
  scenario('returns all abilities', async (scenario: StandardScenario) => {
    const result = await abilities()

    expect(result.length).toEqual(Object.keys(scenario.ability).length)
  })

  scenario('returns a single ability', async (scenario: StandardScenario) => {
    const result = await ability({ id: scenario.ability.one.id })

    expect(result).toEqual(scenario.ability.one)
  })

  scenario('creates a ability', async () => {
    const result = await createAbility({
      input: { name: 'String', detail: 'String', battleIndex: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.detail).toEqual('String')
    expect(result.battleIndex).toEqual('String')
  })

  scenario('updates a ability', async (scenario: StandardScenario) => {
    const original = (await ability({ id: scenario.ability.one.id })) as Ability
    const result = await updateAbility({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a ability', async (scenario: StandardScenario) => {
    const original = (await deleteAbility({
      id: scenario.ability.one.id,
    })) as Ability
    const result = await ability({ id: original.id })

    expect(result).toEqual(null)
  })
})
