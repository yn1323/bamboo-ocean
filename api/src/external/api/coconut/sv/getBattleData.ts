type Common = {
  id: string
  val: string
}

type Temoti = {
  waza: Common[]
  tokusei: Common[]
  seikaku: Common[]
  motimono: Common[]
  pokemon: {
    id: number
    form: number
  }[]
  terastal: Common[]
}

type Lose = {
  waza: Common[]
  pokemon: {
    id: number
    form: number
  }[]
}

type Win = {
  waza: Common[]
  pokemon: {
    id: number
    form: number
  }[]
}

type RawBattleData = {
  status: number
  result: {
    start: string
    end: string
    name: string
    list: {
      no: string
      form: string
      data: {
        temoti: Temoti
        lose: Lose
        win: Win
      }
    }[]
  }
}

type BattleDataRate = {
  id: string
  rate: number
}

type BattleData = Pick<RawBattleData['result'], 'start' | 'end' | 'name'> & {
  data: {
    no: string
    form: string
    moves: BattleDataRate[]
    abilities: BattleDataRate[]
    natures: BattleDataRate[]
    items: BattleDataRate[]
    terastals: BattleDataRate[]
  }[]
}

export const getBattleData = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvBattleData`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawBattleData)
    .catch((err) => {
      console.log(err)
    })

  const temotiList = data
    ? data.result.list.reduce((acc, { no, form, data }) => {
        return [
          ...acc,
          {
            no,
            form,
            moves: data.temoti.waza.map(({ id, val }) => ({
              id,
              rate: parseFloat(val),
            })),
            abilities: data.temoti.tokusei.map(({ id, val }) => ({
              id,
              rate: parseFloat(val),
            })),
            natures: data.temoti.seikaku.map(({ id, val }) => ({
              id,
              rate: parseFloat(val),
            })),
            items: data.temoti.motimono.map(({ id, val }) => ({
              id,
              rate: parseFloat(val),
            })),
            terastals: data.temoti.terastal.map(({ id, val }) => ({
              id,
              rate: parseFloat(val),
            })),
          },
        ]
      }, [])
    : []

  const ret: BattleData = {
    start: data ? data.result.start : '',
    end: data ? data.result.end : '',
    name: data ? data.result.name : '',
    data: temotiList,
  }

  return ret
}
