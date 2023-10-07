export const schema = gql`
  type BattleDataAbility {
    id: String!
    ability: Ability!
    abilityId: String!
    rate: Float!
    battleData: BattleData!
    battleDataId: String!
  }

  type Query {
    battleDataAbilities: [BattleDataAbility!]! @requireAuth
    battleDataAbility(id: String!): BattleDataAbility @requireAuth
  }

  input CreateBattleDataAbilityInput {
    abilityId: String!
    rate: Float!
    battleDataId: String!
  }

  input UpdateBattleDataAbilityInput {
    abilityId: String
    rate: Float
    battleDataId: String
  }

  type Mutation {
    createBattleDataAbility(
      input: CreateBattleDataAbilityInput!
    ): BattleDataAbility! @requireAuth
    updateBattleDataAbility(
      id: String!
      input: UpdateBattleDataAbilityInput!
    ): BattleDataAbility! @requireAuth
    deleteBattleDataAbility(id: String!): BattleDataAbility! @requireAuth
  }
`
