import MyPokemonTagCell from 'src/components/MyPokemonTag/MyPokemonTagCell'

type MyPokemonTagPageProps = {
  id: string
}

const MyPokemonTagPage = ({ id }: MyPokemonTagPageProps) => {
  return <MyPokemonTagCell id={id} />
}

export default MyPokemonTagPage
