export const schema = gql`
  type AttackType {
    id: String!
    name: String!
    moves: [Move]!
  }

  type Query {
    attackTypes: [AttackType!]! @requireAuth
    attackType(id: String!): AttackType @requireAuth
  }

  input CreateAttackTypeInput {
    name: String!
  }

  input UpdateAttackTypeInput {
    name: String
  }

  type Mutation {
    createAttackType(input: CreateAttackTypeInput!): AttackType! @requireAuth
    updateAttackType(id: String!, input: UpdateAttackTypeInput!): AttackType!
      @requireAuth
    deleteAttackType(id: String!): AttackType! @requireAuth
  }
`
