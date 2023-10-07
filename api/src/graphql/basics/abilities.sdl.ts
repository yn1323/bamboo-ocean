export const schema = gql`
  type Ability {
    id: String!
    name: String!
    detail: String!
    battleIndex: String!
    pokemons: [Pokemon]!
    battleDataAbilities: [BattleDataAbility]!
  }

  type Query {
    abilities: [Ability!]! @requireAuth
    ability(id: String!): Ability @requireAuth
  }

  input CreateAbilityInput {
    name: String!
    detail: String!
    battleIndex: String!
  }

  input UpdateAbilityInput {
    name: String
    detail: String
    battleIndex: String
  }

  type Mutation {
    createAbility(input: CreateAbilityInput!): Ability! @requireAuth
    updateAbility(id: String!, input: UpdateAbilityInput!): Ability!
      @requireAuth
    deleteAbility(id: String!): Ability! @requireAuth
  }
`
