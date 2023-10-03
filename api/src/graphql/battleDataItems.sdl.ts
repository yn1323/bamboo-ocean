export const schema = gql`
  type BattleDataItem {
    id: String!
    Item: Item!
    itemId: String!
    rate: Float!
    battleData: BattleData!
    battleDataId: String!
  }

  type Query {
    battleDataItems: [BattleDataItem!]! @requireAuth
    battleDataItem(id: String!): BattleDataItem @requireAuth
  }

  input CreateBattleDataItemInput {
    itemId: String!
    rate: Float!
    battleDataId: String!
  }

  input UpdateBattleDataItemInput {
    itemId: String
    rate: Float
    battleDataId: String
  }

  type Mutation {
    createBattleDataItem(input: CreateBattleDataItemInput!): BattleDataItem!
      @requireAuth
    updateBattleDataItem(
      id: String!
      input: UpdateBattleDataItemInput!
    ): BattleDataItem! @requireAuth
    deleteBattleDataItem(id: String!): BattleDataItem! @requireAuth
  }
`
