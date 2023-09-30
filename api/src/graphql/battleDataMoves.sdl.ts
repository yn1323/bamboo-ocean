export const schema = gql`
  type BattleDataMove {
    id: String!
    move: Move!
    moveId: String!
    rate: Float!
    battleData: BattleData!
    battleDataId: String!
  }

  type Query {
    battleDataMoves: [BattleDataMove!]! @requireAuth
    battleDataMove(id: String!): BattleDataMove @requireAuth
  }

  input CreateBattleDataMoveInput {
    moveId: String!
    rate: Float!
    battleDataId: String!
  }

  input UpdateBattleDataMoveInput {
    moveId: String
    rate: Float
    battleDataId: String
  }

  type Mutation {
    createBattleDataMove(input: CreateBattleDataMoveInput!): BattleDataMove!
      @requireAuth
    updateBattleDataMove(
      id: String!
      input: UpdateBattleDataMoveInput!
    ): BattleDataMove! @requireAuth
    deleteBattleDataMove(id: String!): BattleDataMove! @requireAuth
  }
`
