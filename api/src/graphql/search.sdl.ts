export const schema = gql`
  input PokemonSearchOption {
    condition: String # AND | OR
    evolvedOnly: Boolean
  }
  type Query {
    battleDatasLatest: [BattleData!]! @requireAuth
    pokemonSearch(
      name: String
      types: [String!]
      moves: [String!]
      abilities: [String!]
      options: PokemonSearchOption
    ): [Pokemon!]! @requireAuth
  }
`
