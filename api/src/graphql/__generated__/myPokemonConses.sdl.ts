export const schema = gql`
  type MyPokemonCons {
    id: String!
    myPokemon: MyPokemon!
    myPokemonId: String!
    myEnemy: MyEnemy!
    myEnemyId: String!
  }

  type Query {
    myPokemonConses: [MyPokemonCons!]! @requireAuth
    myPokemonCons(id: String!): MyPokemonCons @requireAuth
  }

  input CreateMyPokemonConsInput {
    myPokemonId: String!
    myEnemyId: String!
  }

  input UpdateMyPokemonConsInput {
    myPokemonId: String
    myEnemyId: String
  }

  type Mutation {
    createMyPokemonCons(input: CreateMyPokemonConsInput!): MyPokemonCons!
      @requireAuth
    updateMyPokemonCons(
      id: String!
      input: UpdateMyPokemonConsInput!
    ): MyPokemonCons! @requireAuth
    deleteMyPokemonCons(id: String!): MyPokemonCons! @requireAuth
  }
`
