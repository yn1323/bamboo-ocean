export const schema = gql`
  type BattleDataNature {
    id: String!
    nature: Nature!
    natureId: String!
    rate: Float!
    battleData: BattleData!
    battleDataId: String!
  }

  type Query {
    battleDataNatures: [BattleDataNature!]! @requireAuth
    battleDataNature(id: String!): BattleDataNature @requireAuth
  }

  input CreateBattleDataNatureInput {
    natureId: String!
    rate: Float!
    battleDataId: String!
  }

  input UpdateBattleDataNatureInput {
    natureId: String
    rate: Float
    battleDataId: String
  }

  type Mutation {
    createBattleDataNature(
      input: CreateBattleDataNatureInput!
    ): BattleDataNature! @requireAuth
    updateBattleDataNature(
      id: String!
      input: UpdateBattleDataNatureInput!
    ): BattleDataNature! @requireAuth
    deleteBattleDataNature(id: String!): BattleDataNature! @requireAuth
  }
`
