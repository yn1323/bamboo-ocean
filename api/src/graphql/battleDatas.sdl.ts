export const schema = gql`
  type BattleData {
    id: String!
    BattleIndex: BattleIndex!
    battleIndexId: String!
    pokemon: Pokemon!
    pokemonId: String!
    rank: Int!
    form: Int!
    battleDataMove: [BattleDataMove]!
    battleDataAbility: [BattleDataAbility]!
    battleDataNature: [BattleDataNature]!
    battleDataItem: [BattleDataItem]!
    battleDataTerastal: [BattleDataTerastal]!
  }

  type Query {
    battleDatas: [BattleData!]! @requireAuth
    battleData(id: String!): BattleData @requireAuth
  }

  input CreateBattleDataInput {
    battleIndexId: String!
    pokemonId: String!
    rank: Int!
    form: Int!
  }

  input UpdateBattleDataInput {
    battleIndexId: String
    pokemonId: String
    rank: Int
    form: Int
  }

  type Mutation {
    createBattleData(input: CreateBattleDataInput!): BattleData! @requireAuth
    updateBattleData(id: String!, input: UpdateBattleDataInput!): BattleData!
      @requireAuth
    deleteBattleData(id: String!): BattleData! @requireAuth
  }
`
