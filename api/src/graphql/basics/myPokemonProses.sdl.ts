export const schema = gql`
  type MyPokemonPros {
    id: String!
    myPokemon: MyPokemon!
    myPokemonId: String!
    myEnemy: MyEnemy!
    myEnemyId: String!
  }

  type Query {
    myPokemonProses: [MyPokemonPros!]! @requireAuth
    myPokemonPros(id: String!): MyPokemonPros @requireAuth
  }

  input CreateMyPokemonProsInput {
    myPokemonId: String!
    myEnemyId: String!
  }

  input UpdateMyPokemonProsInput {
    myPokemonId: String
    myEnemyId: String
  }

  type Mutation {
    createMyPokemonPros(input: CreateMyPokemonProsInput!): MyPokemonPros!
      @requireAuth
    updateMyPokemonPros(
      id: String!
      input: UpdateMyPokemonProsInput!
    ): MyPokemonPros! @requireAuth
    deleteMyPokemonPros(id: String!): MyPokemonPros! @requireAuth
  }
`
