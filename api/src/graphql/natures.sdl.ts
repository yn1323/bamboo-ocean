export const schema = gql`
  type Nature {
    id: String!
    name: String!
    battleIndex: String!
    battleDataNature: [BattleDataNature]!
  }

  type Query {
    natures: [Nature!]! @requireAuth
    nature(id: String!): Nature @requireAuth
  }

  input CreateNatureInput {
    name: String!
    battleIndex: String!
  }

  input UpdateNatureInput {
    name: String
    battleIndex: String
  }

  type Mutation {
    createNature(input: CreateNatureInput!): Nature! @requireAuth
    updateNature(id: String!, input: UpdateNatureInput!): Nature! @requireAuth
    deleteNature(id: String!): Nature! @requireAuth
  }
`
