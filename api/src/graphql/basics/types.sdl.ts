export const schema = gql`
  type Type {
    id: String!
    name: String!
    battleIndex: String!
    fromTypes: [TypeRelation!]!
    toTypes: [TypeRelation!]!
    moves: [Move!]!
    pokemons: [Pokemon!]!
    battleDataTerastal: [BattleDataTerastal!]!
    MyPokemon: [MyPokemon!]!
    textImageUrl: String!
    imageUrl: String!
    terastalImageUrl: String!
    myEnemy: [MyEnemy!]!
  }

  type Query {
    types: [Type!]! @requireAuth
    type(id: String!): Type @requireAuth
  }

  input CreateTypeInput {
    name: String!
    battleIndex: String!
    textImageUrl: String!
    imageUrl: String!
    terastalImageUrl: String!
  }

  input UpdateTypeInput {
    name: String
    battleIndex: String
    textImageUrl: String
    imageUrl: String
    terastalImageUrl: String
  }

  type Mutation {
    createType(input: CreateTypeInput!): Type! @requireAuth
    updateType(id: String!, input: UpdateTypeInput!): Type! @requireAuth
    deleteType(id: String!): Type! @requireAuth
  }
`
