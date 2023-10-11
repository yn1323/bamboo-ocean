import type { MyPokemon } from '@prisma/client'

import {
  createMyPokemon,
  deleteMyPokemon,
  myPokemon,
  myPokemons,
  updateMyPokemon,
} from './myPokemons'
import type { StandardScenario } from './myPokemons.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('myPokemons', () => {
  scenario('returns all myPokemons', async (scenario: StandardScenario) => {
    const result = await myPokemons()

    expect(result.length).toEqual(Object.keys(scenario.myPokemon).length)
  })

  scenario('returns a single myPokemon', async (scenario: StandardScenario) => {
    const result = await myPokemon({ id: scenario.myPokemon.one.id })

    expect(result).toEqual(scenario.myPokemon.one)
  })

  scenario('creates a myPokemon', async (scenario: StandardScenario) => {
    const result = await createMyPokemon({
      input: {
        name: 'String',
        favorite: true,
        evH: 3842086,
        evA: 9381976,
        evB: 4531961,
        evC: 6558813,
        evD: 9465752,
        evS: 692032,
        memo: 'String',
        pokemonId: scenario.myPokemon.two.pokemonId,
        natureId: scenario.myPokemon.two.natureId,
        userId: scenario.myPokemon.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.favorite).toEqual(true)
    expect(result.evH).toEqual(3842086)
    expect(result.evA).toEqual(9381976)
    expect(result.evB).toEqual(4531961)
    expect(result.evC).toEqual(6558813)
    expect(result.evD).toEqual(9465752)
    expect(result.evS).toEqual(692032)
    expect(result.memo).toEqual('String')
    expect(result.pokemonId).toEqual(scenario.myPokemon.two.pokemonId)
    expect(result.natureId).toEqual(scenario.myPokemon.two.natureId)
    expect(result.userId).toEqual(scenario.myPokemon.two.userId)
  })

  scenario('updates a myPokemon', async (scenario: StandardScenario) => {
    const original = (await myPokemon({
      id: scenario.myPokemon.one.id,
    })) as MyPokemon
    const result = await updateMyPokemon({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a myPokemon', async (scenario: StandardScenario) => {
    const original = (await deleteMyPokemon({
      id: scenario.myPokemon.one.id,
    })) as MyPokemon
    const result = await myPokemon({ id: original.id })

    expect(result).toEqual(null)
  })
})
