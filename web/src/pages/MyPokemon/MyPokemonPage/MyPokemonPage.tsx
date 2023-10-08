import MyPokemonCell from 'src/components/MyPokemon/MyPokemonCell'

type MyPokemonPageProps = {
  id: string
}

const MyPokemonPage = ({ id }: MyPokemonPageProps) => {
  return <MyPokemonCell id={id} />
}

export default MyPokemonPage
