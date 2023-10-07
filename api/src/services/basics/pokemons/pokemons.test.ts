import type { Pokemon } from '@prisma/client'

import {
  createPokemon,
  deletePokemon,
  pokemon,
  pokemons,
  updatePokemon,
} from './pokemons'
import type { StandardScenario } from './pokemons.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pokemons', () => {
  scenario('returns all pokemons', async (scenario: StandardScenario) => {
    const result = await pokemons()

    expect(result.length).toEqual(Object.keys(scenario.pokemon).length)
  })

  scenario('returns a single pokemon', async (scenario: StandardScenario) => {
    const result = await pokemon({ id: scenario.pokemon.one.id })

    expect(result).toEqual(scenario.pokemon.one)
  })

  scenario('creates a pokemon', async () => {
    const result = await createPokemon({
      input: {
        name: 'String',
        form: 'String',
        no: 'String',
        height: 3620850.7296983,
        weight: 2138045.24849,
        statusH: 3557451,
        statusA: 8796328,
        statusB: 4234031,
        statusC: 147462,
        statusD: 8081310,
        statusS: 7476500,
        base64Image: 'String',
        url: 'String',
        battleIndex: 'String',
        battleFormIndex: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.form).toEqual('String')
    expect(result.no).toEqual('String')
    expect(result.height).toEqual(3620850.7296983)
    expect(result.weight).toEqual(2138045.24849)
    expect(result.statusH).toEqual(3557451)
    expect(result.statusA).toEqual(8796328)
    expect(result.statusB).toEqual(4234031)
    expect(result.statusC).toEqual(147462)
    expect(result.statusD).toEqual(8081310)
    expect(result.statusS).toEqual(7476500)
    expect(result.base64Image).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.battleIndex).toEqual('String')
    expect(result.battleFormIndex).toEqual('String')
  })

  scenario('updates a pokemon', async (scenario: StandardScenario) => {
    const original = (await pokemon({ id: scenario.pokemon.one.id })) as Pokemon
    const result = await updatePokemon({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a pokemon', async (scenario: StandardScenario) => {
    const original = (await deletePokemon({
      id: scenario.pokemon.one.id,
    })) as Pokemon
    const result = await pokemon({ id: original.id })

    expect(result).toEqual(null)
  })
})
