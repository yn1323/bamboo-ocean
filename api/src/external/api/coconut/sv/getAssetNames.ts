type RawAssets = {
  status: number
  result: {
    poke: string[]
    waza: Record<`${number}`, string>[]
    tokusei: Record<`${number}`, string>[]
    seikaku: Record<`${number}`, string>[]
    itemname: Record<`${number}`, string>[]
    form: Record<
      `${string}_${string}` | `${string}_${string}_${string}`,
      string
    >[]
  }
}

type Common<T = string> = {
  id: T
  name: string
}

type Asset = {
  pokemons: Common[]
  moves: Common<`${number}`>[]
  abilities: Common<`${number}`>[]
  natures: Common<`${number}`>[]
  items: Common<`${number}`>[]
  forms: Common<`${string}_${string}` | `${string}_${string}_${string}`>[]
}

// eslint-disable-next-line @typescript-eslint/ban-types
const ObjectToArray = (obj: Object) => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return [
      ...acc,
      {
        id: key,
        // 含まれている全角数字を半角にする
        name: val.replace(/[０-９]/g, (s) => {
          return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
        }),
      },
    ]
  }, [])
}

export const getAssetNames = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvAssetNames`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawAssets)
    .catch((err) => {
      console.log(err)
    })

  const ret: Asset = {
    pokemons: data
      ? data.result.poke.map((p, i) => ({ id: `${i + 1}`, name: p }))
      : [],
    moves: data ? ObjectToArray(data.result.waza) : [],
    abilities: data ? ObjectToArray(data.result.tokusei) : [],
    natures: data ? ObjectToArray(data.result.seikaku) : [],
    items: data ? ObjectToArray(data.result.itemname) : [],
    forms: data ? ObjectToArray(data.result.form) : [],
  }

  return ret
}
