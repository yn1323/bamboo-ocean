type RawMoves = {
  status: number
  result: {
    target: string
    name: string
    text: string
    type: string
    attackType: '物理' | '特殊' | '変化'
    power: number
    accuracy: number
    pp: number
    isTouchable: boolean
    enableProtect: boolean
  }[]
}

export const getAllMoves = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvAllMoves?moge=1`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawMoves)
    .catch((err) => {
      console.log(err)
    })

  if (!data) return []

  return data.result
}
