import EditMyPokemonTagCell from 'src/components/MyPokemonTag/EditMyPokemonTagCell'

type MyPokemonTagPageProps = {
  id: string
}

const EditMyPokemonTagPage = ({ id }: MyPokemonTagPageProps) => {
  return <EditMyPokemonTagCell id={id} />
}

export default EditMyPokemonTagPage
