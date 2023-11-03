export const schema = gql`
  input PokemonSearchOption {
    condition: String # AND | OR
    evolvedOnly: Boolean
  }
  type Query {
    battleDatasLatest: [BattleData!]! @requireAuth
    pokemonSearch(
      types: [String!]
      moves: [String!]
      abilities: [String!]
      options: PokemonSearchOption
    ): [Pokemon!]! @requireAuth
  }
`
