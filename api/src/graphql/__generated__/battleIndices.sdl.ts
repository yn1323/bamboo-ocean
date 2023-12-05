export const schema = gql`
  type BattleIndex {
    id: String!
    capturedAt: DateTime!
    startAt: DateTime!
    endAt: DateTime!
    name: String!
    battleData: [BattleData!]!
  }

  type Query {
    battleIndices: [BattleIndex!]! @requireAuth
    battleIndex(id: String!): BattleIndex @requireAuth
  }

  input CreateBattleIndexInput {
    capturedAt: DateTime!
    startAt: DateTime!
    endAt: DateTime!
    name: String!
  }

  input UpdateBattleIndexInput {
    capturedAt: DateTime
    startAt: DateTime
    endAt: DateTime
    name: String
  }

  type Mutation {
    createBattleIndex(input: CreateBattleIndexInput!): BattleIndex! @requireAuth
    updateBattleIndex(
      id: String!
      input: UpdateBattleIndexInput!
    ): BattleIndex! @requireAuth
    deleteBattleIndex(id: String!): BattleIndex! @requireAuth
  }
`
