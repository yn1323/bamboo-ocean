type RawItems = {
  status: number
  result: {
    name: string
    detail: string
    type: string
  }[]
}

export const getAllItems = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvAllItems`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawItems)
    .catch((err) => {
      console.log(err)
    })

  if (!data) return []

  return data.result
}
