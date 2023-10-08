import MyPokemonCell from 'src/components/base/MyPokemon/MyPokemonCell'

type MyPokemonPageProps = {
  id: string
}

const MyPokemonPage = ({ id }: MyPokemonPageProps) => {
  return <MyPokemonCell id={id} />
}

export default MyPokemonPage
