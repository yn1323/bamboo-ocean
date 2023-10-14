type RawPokemons = {
  status: number
  result: {
    no: string
    name: string
    nameWithForm: string
    image: string
    types: string[]
    weight: string
    url: string
    abilities: string[]
    moves: string[]
    form: string
    baseStats: {
      h: number
      a: number
      b: number
      c: number
      d: number
      s: number
    }
    height: string
    evolutionFrom: string[]
    evolutionTo: string[]
  }[]
}

export const getAllPokemons = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvGetAllPokemonsFromFirestore`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawPokemons)
    .catch((err) => {
      console.log(err)
    })

  if (!data) return []

  return data.result
}
