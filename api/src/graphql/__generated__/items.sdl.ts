export const schema = gql`
  type Item {
    id: String!
    name: String!
    detail: String!
    battleIndex: String!
    order: Int!
    type: String!
    base64Image: String!
    imageUrl: String!
    imageSmallUrl: String!
    imageLargeUrl: String!
    battleDataItem: [BattleDataItem!]!
    myPokemon: [MyPokemon!]!
    myEnemy: [MyEnemy!]!
    myDamageCalc: [MyDamageCalc!]!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: String!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    detail: String!
    battleIndex: String!
    order: Int!
    type: String!
    base64Image: String!
    imageUrl: String!
    imageSmallUrl: String!
    imageLargeUrl: String!
  }

  input UpdateItemInput {
    name: String
    detail: String
    battleIndex: String
    order: Int
    type: String
    base64Image: String
    imageUrl: String
    imageSmallUrl: String
    imageLargeUrl: String
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: String!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: String!): Item! @requireAuth
  }
`
