export const schema = gql`
  type BattleIndex {
    id: String!
    dateAt: DateTime!
    battleData: [BattleData]!
  }

  type Query {
    battleIndices: [BattleIndex!]! @requireAuth
    battleIndex(id: String!): BattleIndex @requireAuth
  }

  input CreateBattleIndexInput {
    dateAt: DateTime!
  }

  input UpdateBattleIndexInput {
    dateAt: DateTime
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
