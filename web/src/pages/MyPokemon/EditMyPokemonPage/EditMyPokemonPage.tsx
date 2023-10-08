import EditMyPokemonCell from 'src/components/MyPokemon/EditMyPokemonCell'

type MyPokemonPageProps = {
  id: string
}

const EditMyPokemonPage = ({ id }: MyPokemonPageProps) => {
  return <EditMyPokemonCell id={id} />
}

export default EditMyPokemonPage
