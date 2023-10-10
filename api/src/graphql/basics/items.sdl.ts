export const schema = gql`
  type Item {
    id: String!
    name: String!
    detail: String!
    battleIndex: String!
    base64Image: String!
    imageUrl: String!
    battleDataItem: [BattleDataItem]!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: String!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    detail: String!
    battleIndex: String!
    base64Image: String!
    imageUrl: String!
  }

  input UpdateItemInput {
    name: String
    detail: String
    battleIndex: String
    base64Image: String
    imageUrl: String!
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: String!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: String!): Item! @requireAuth
  }
`
