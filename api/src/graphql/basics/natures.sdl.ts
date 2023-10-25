export const schema = gql`
  type Nature {
    id: String!
    name: String!
    battleIndex: String!
    increase: String!
    decrease: String!
    battleDataNature: [BattleDataNature]!
    myPokemon: [MyPokemon]!
    myEnemy: [MyEnemy]!
  }

  type Query {
    natures: [Nature!]! @requireAuth
    nature(id: String!): Nature @requireAuth
  }

  input CreateNatureInput {
    name: String!
    battleIndex: String!
    increase: String!
    decrease: String!
  }

  input UpdateNatureInput {
    name: String
    battleIndex: String
    increase: String
    decrease: String
  }

  type Mutation {
    createNature(input: CreateNatureInput!): Nature! @requireAuth
    updateNature(id: String!, input: UpdateNatureInput!): Nature! @requireAuth
    deleteNature(id: String!): Nature! @requireAuth
  }
`
