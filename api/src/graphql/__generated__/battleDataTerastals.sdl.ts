export const schema = gql`
  type BattleDataTerastal {
    id: String!
    type: Type!
    typeId: String!
    rate: Float!
    battleData: BattleData!
    battleDataId: String!
  }

  type Query {
    battleDataTerastals: [BattleDataTerastal!]! @requireAuth
    battleDataTerastal(id: String!): BattleDataTerastal @requireAuth
  }

  input CreateBattleDataTerastalInput {
    typeId: String!
    rate: Float!
    battleDataId: String!
  }

  input UpdateBattleDataTerastalInput {
    typeId: String
    rate: Float
    battleDataId: String
  }

  type Mutation {
    createBattleDataTerastal(
      input: CreateBattleDataTerastalInput!
    ): BattleDataTerastal! @requireAuth
    updateBattleDataTerastal(
      id: String!
      input: UpdateBattleDataTerastalInput!
    ): BattleDataTerastal! @requireAuth
    deleteBattleDataTerastal(id: String!): BattleDataTerastal! @requireAuth
  }
`
