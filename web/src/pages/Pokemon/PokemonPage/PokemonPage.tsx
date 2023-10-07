import PokemonCell from 'src/components/Pokemon/PokemonCell'

type PokemonPageProps = {
  id: string
}

const PokemonPage = ({ id }: PokemonPageProps) => {
  return <PokemonCell id={id} />
}

export default PokemonPage
