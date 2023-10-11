import MyPokemonTagCell from 'src/components/base/MyPokemonTag/MyPokemonTagCell'

type MyPokemonTagPageProps = {
  id: string
}

const MyPokemonTagPage = ({ id }: MyPokemonTagPageProps) => {
  return <MyPokemonTagCell id={id} />
}

export default MyPokemonTagPage
