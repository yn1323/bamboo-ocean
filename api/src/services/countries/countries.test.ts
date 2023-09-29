import type { Country } from '@prisma/client'

import {
  countries,
  country,
  createCountry,
  updateCountry,
  deleteCountry,
} from './countries'
import type { StandardScenario } from './countries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('countries', () => {
  scenario('returns all countries', async (scenario: StandardScenario) => {
    const result = await countries()

    expect(result.length).toEqual(Object.keys(scenario.country).length)
  })

  scenario('returns a single country', async (scenario: StandardScenario) => {
    const result = await country({ id: scenario.country.one.id })

    expect(result).toEqual(scenario.country.one)
  })

  scenario('creates a country', async () => {
    const result = await createCountry({
      input: { name: 'String1680230' },
    })

    expect(result.name).toEqual('String1680230')
  })

  scenario('updates a country', async (scenario: StandardScenario) => {
    const original = (await country({ id: scenario.country.one.id })) as Country
    const result = await updateCountry({
      id: original.id,
      input: { name: 'String34780712' },
    })

    expect(result.name).toEqual('String34780712')
  })

  scenario('deletes a country', async (scenario: StandardScenario) => {
    const original = (await deleteCountry({
      id: scenario.country.one.id,
    })) as Country
    const result = await country({ id: original.id })

    expect(result).toEqual(null)
  })
})
