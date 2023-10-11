export const schema = gql`
  type MyPartyTag {
    id: String!
    name: String!
    favorite: Boolean!
    memo: String!
    myParty: [MyParty]!
    user: User!
    userId: String!
  }

  type Query {
    myPartyTags: [MyPartyTag!]! @requireAuth
    myPartyTag(id: String!): MyPartyTag @requireAuth
  }

  input CreateMyPartyTagInput {
    name: String!
    favorite: Boolean!
    memo: String!
    userId: String!
  }

  input UpdateMyPartyTagInput {
    name: String
    favorite: Boolean
    memo: String
    userId: String
  }

  type Mutation {
    createMyPartyTag(input: CreateMyPartyTagInput!): MyPartyTag! @requireAuth
    updateMyPartyTag(id: String!, input: UpdateMyPartyTagInput!): MyPartyTag!
      @requireAuth
    deleteMyPartyTag(id: String!): MyPartyTag! @requireAuth
  }
`
