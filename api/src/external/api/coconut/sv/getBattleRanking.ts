type RawBattleRanking = {
  status: number
  result: {
    start: string
    end: string
    name: string
    rank: {
      id: number
      form: number
    }[]
  }
}

type BattleRanking = Pick<
  RawBattleRanking['result'],
  'start' | 'end' | 'name'
> & {
  rank: {
    id: string
    form: string
  }[]
}

export const getBattleRanking = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvBattleRanking`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawBattleRanking)
    .catch((err) => {
      console.log(err)
    })

  const ret: BattleRanking = {
    start: data ? data.result.start : '',
    end: data ? data.result.end : '',
    name: data ? data.result.name : '',
    rank: data
      ? data.result.rank.map(({ id, form }) => ({
          id: `${id}`,
          form: `${form}`,
        }))
      : [],
  }

  return ret
}
