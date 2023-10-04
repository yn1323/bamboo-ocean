import EditPokemonCell from 'src/components/Pokemon/EditPokemonCell'

type PokemonPageProps = {
  id: string
}

const EditPokemonPage = ({ id }: PokemonPageProps) => {
  return <EditPokemonCell id={id} />
}

export default EditPokemonPage
