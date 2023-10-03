export const schema = gql`
  type BattleData {
    id: String!
    battleIndex: BattleIndex!
    battleIndexId: String!
    pokemon: Pokemon!
    pokemonId: String!
    no: String!
    rank: Int!
    battleDataMove: [BattleDataMove]!
    battleDataAbility: [BattleDataAbility]!
    battleDataNature: [BattleDataNature]!
    battleDataItem: [BattleDataItem]!
    battleDataTerastal: [BattleDataTerastal]!
    Form: Form
    formId: String
  }

  type Query {
    battleDatas: [BattleData!]! @requireAuth
    battleData(id: String!): BattleData @requireAuth
  }

  input CreateBattleDataInput {
    battleIndexId: String!
    pokemonId: String!
    no: String!
    rank: Int!
    formId: String
  }

  input UpdateBattleDataInput {
    battleIndexId: String
    pokemonId: String
    no: String
    rank: Int
    formId: String
  }

  type Mutation {
    createBattleData(input: CreateBattleDataInput!): BattleData! @requireAuth
    updateBattleData(id: String!, input: UpdateBattleDataInput!): BattleData!
      @requireAuth
    deleteBattleData(id: String!): BattleData! @requireAuth
  }
`
