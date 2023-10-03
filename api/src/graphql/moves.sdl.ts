export const schema = gql`
  type Move {
    id: String!
    target: String!
    detail: String!
    name: String!
    type: Type!
    typeId: String!
    attackType: AttackType!
    attackTypeId: String!
    power: Int!
    hitRange: Int!
    pp: Int!
    isTouchable: Boolean!
    enableProtect: Boolean!
    pokemons: [Pokemon]!
    battleIndex: String!
    battleDataMoves: [BattleDataMove]!
  }

  type Query {
    moves: [Move!]! @requireAuth
    move(id: String!): Move @requireAuth
  }

  input CreateMoveInput {
    target: String!
    detail: String!
    name: String!
    typeId: String!
    attackTypeId: String!
    power: Int!
    hitRange: Int!
    pp: Int!
    isTouchable: Boolean!
    enableProtect: Boolean!
    battleIndex: String!
  }

  input UpdateMoveInput {
    target: String
    detail: String
    name: String
    typeId: String
    attackTypeId: String
    power: Int
    hitRange: Int
    pp: Int
    isTouchable: Boolean
    enableProtect: Boolean
    battleIndex: String
  }

  type Mutation {
    createMove(input: CreateMoveInput!): Move! @requireAuth
    updateMove(id: String!, input: UpdateMoveInput!): Move! @requireAuth
    deleteMove(id: String!): Move! @requireAuth
  }
`
