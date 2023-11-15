export const schema = gql`
  input PokemonSearchOption {
    condition: String # AND | OR
    evolvedOnly: Boolean
  }

  type LatestBattleDataIndex {
    capturedAt: DateTime!
    battleDatas: [BattleData!]!
  }
  type Query {
    battleDatasLatest: LatestBattleDataIndex @requireAuth
    pokemonList(options: PokemonSearchOption): [Pokemon!]! @requireAuth
    pokemonSearch(
      name: String
      types: [String!]
      moves: [String!]
      abilities: [String!]
      options: PokemonSearchOption
    ): [Pokemon!]! @requireAuth
  }
`
