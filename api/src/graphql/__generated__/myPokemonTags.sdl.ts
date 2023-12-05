export const schema = gql`
  type MyPokemonTag {
    id: String!
    name: String!
    favorite: Boolean!
    memo: String!
    myPokemon: [MyPokemon!]!
    user: User!
    userId: String!
  }

  type Query {
    myPokemonTags: [MyPokemonTag!]! @requireAuth
    myPokemonTag(id: String!): MyPokemonTag @requireAuth
  }

  input CreateMyPokemonTagInput {
    name: String!
    favorite: Boolean!
    memo: String!
    userId: String!
  }

  input UpdateMyPokemonTagInput {
    name: String
    favorite: Boolean
    memo: String
    userId: String
  }

  type Mutation {
    createMyPokemonTag(input: CreateMyPokemonTagInput!): MyPokemonTag!
      @requireAuth
    updateMyPokemonTag(
      id: String!
      input: UpdateMyPokemonTagInput!
    ): MyPokemonTag! @requireAuth
    deleteMyPokemonTag(id: String!): MyPokemonTag! @requireAuth
  }
`
