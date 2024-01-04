export const schema = gql`
  type MyParty {
    id: String!
    name: String!
    favorite: Boolean!
    memo: String!
    tag: [MyPartyTag!]!
    user: User!
    userId: String!
    myPokemon: [MyPokemon!]!
  }

  type Query {
    myParties: [MyParty!]! @requireAuth
    myParty(id: String!): MyParty @requireAuth
  }

  input CreateMyPartyInput {
    name: String!
    favorite: Boolean!
    memo: String!
    userId: String!
  }

  input UpdateMyPartyInput {
    name: String
    favorite: Boolean
    memo: String
    userId: String
  }

  type Mutation {
    createMyParty(input: CreateMyPartyInput!): MyParty! @requireAuth
    updateMyParty(id: String!, input: UpdateMyPartyInput!): MyParty!
      @requireAuth
    deleteMyParty(id: String!): MyParty! @requireAuth
  }
`
