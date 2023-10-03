type RawAbilities = {
  status: number
  result: {
    name: string
    detail: string
  }[]
}

export const getAllAbilities = async () => {
  const data = await fetch(
    `${process.env.COCONUT_SERVER_ENDPOINT}/pokemonSvAllAbilities`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        x_api_key: process.env.COCONUT_SERVER_API_KEY,
      },
    }
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res) => res.json() as unknown as RawAbilities)
    .catch((err) => {
      console.log(err)
    })

  if (!data) return []

  return data.result
}
