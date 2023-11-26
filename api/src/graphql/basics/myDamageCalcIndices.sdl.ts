export const schema = gql`
  type MyDamageCalcIndex {
    id: String!
    user: User!
    userId: String!
    clientId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    memo: String!
    favorite: Boolean!
    myDamageCalc: [MyDamageCalc!]!
  }

  type Query {
    myDamageCalcIndices: [MyDamageCalcIndex!]! @requireAuth
    myDamageCalcIndex(id: String!): MyDamageCalcIndex @requireAuth
  }

  input CreateMyDamageCalcIndexInput {
    userId: String!
    clientId: String!
    title: String!
    memo: String!
    favorite: Boolean!
  }

  input UpdateMyDamageCalcIndexInput {
    userId: String
    clientId: String
    title: String
    memo: String
    favorite: Boolean
  }

  type Mutation {
    createMyDamageCalcIndex(
      input: CreateMyDamageCalcIndexInput!
    ): MyDamageCalcIndex! @requireAuth
    updateMyDamageCalcIndex(
      id: String!
      input: UpdateMyDamageCalcIndexInput!
    ): MyDamageCalcIndex! @requireAuth
    deleteMyDamageCalcIndex(id: String!): MyDamageCalcIndex! @requireAuth
  }
`
