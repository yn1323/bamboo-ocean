export const schema = gql`
  type Type {
    id: String!
    name: String!
    battleIndex: String!
    fromTypes: [TypeRelation]!
    toTypes: [TypeRelation]!
    moves: [Move]!
    pokemons: [Pokemon]!
    battleDataTerastal: [BattleDataTerastal]!
  }

  type Query {
    types: [Type!]! @requireAuth
    type(id: String!): Type @requireAuth
  }

  input CreateTypeInput {
    name: String!
    battleIndex: String!
  }

  input UpdateTypeInput {
    name: String
    battleIndex: String
  }

  type Mutation {
    createType(input: CreateTypeInput!): Type! @requireAuth
    updateType(id: String!, input: UpdateTypeInput!): Type! @requireAuth
    deleteType(id: String!): Type! @requireAuth
  }
`
