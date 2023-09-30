import type { Pokemon } from '@prisma/client'

import {
  pokemons,
  pokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
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
        no: 6866328,
        height: 6682464.0627301,
        weight: 8026307.060910538,
        statusH: 1721007,
        statusA: 5007310,
        statusB: 959364,
        statusC: 7222763,
        statusD: 5603779,
        statusS: 8785752,
        imageUrl: 'String',
        base64Image: 'String',
        url: 'String',
        battleIndex: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.form).toEqual('String')
    expect(result.no).toEqual(6866328)
    expect(result.height).toEqual(6682464.0627301)
    expect(result.weight).toEqual(8026307.060910538)
    expect(result.statusH).toEqual(1721007)
    expect(result.statusA).toEqual(5007310)
    expect(result.statusB).toEqual(959364)
    expect(result.statusC).toEqual(7222763)
    expect(result.statusD).toEqual(5603779)
    expect(result.statusS).toEqual(8785752)
    expect(result.imageUrl).toEqual('String')
    expect(result.base64Image).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.battleIndex).toEqual('String')
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
