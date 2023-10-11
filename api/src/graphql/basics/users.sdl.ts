export const schema = gql`
  type User {
    id: String!
    name: String!
    createdUserAt: DateTime!
    updatedUserAt: DateTime!
    deletedUserAt: DateTime
    myPokemon: [MyPokemon]!
    myParty: [MyParty]!
    myPartyTag: [MyPartyTag]!
    myPokemonTag: [MyPokemonTag]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    createdUserAt: DateTime!
    updatedUserAt: DateTime!
    deletedUserAt: DateTime
  }

  input UpdateUserInput {
    name: String
    createdUserAt: DateTime
    updatedUserAt: DateTime
    deletedUserAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
