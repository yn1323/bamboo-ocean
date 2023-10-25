export const schema = gql`
  type MyEnemyTag {
    id: String!
    name: String!
    favorite: Boolean!
    memo: String!
    myEnemy: [MyEnemy]!
    user: User!
    userId: String!
  }

  type Query {
    myEnemyTags: [MyEnemyTag!]! @requireAuth
    myEnemyTag(id: String!): MyEnemyTag @requireAuth
  }

  input CreateMyEnemyTagInput {
    name: String!
    favorite: Boolean!
    memo: String!
    userId: String!
  }

  input UpdateMyEnemyTagInput {
    name: String
    favorite: Boolean
    memo: String
    userId: String
  }

  type Mutation {
    createMyEnemyTag(input: CreateMyEnemyTagInput!): MyEnemyTag! @requireAuth
    updateMyEnemyTag(id: String!, input: UpdateMyEnemyTagInput!): MyEnemyTag!
      @requireAuth
    deleteMyEnemyTag(id: String!): MyEnemyTag! @requireAuth
  }
`
