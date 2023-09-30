export const schema = gql`
  type Type {
    id: String!
    name: String!
    fromTypes: [TypeRelation]!
    toTypes: [TypeRelation]!
  }

  type Query {
    types: [Type!]! @requireAuth
    type(id: String!): Type @requireAuth
  }

  input CreateTypeInput {
    name: String!
  }

  input UpdateTypeInput {
    name: String
  }

  type Mutation {
    createType(input: CreateTypeInput!): Type! @requireAuth
    updateType(id: String!, input: UpdateTypeInput!): Type! @requireAuth
    deleteType(id: String!): Type! @requireAuth
  }
`
