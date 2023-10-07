export const schema = gql`
  type TypeRelation {
    id: String!
    from: Type!
    fromId: String!
    to: Type!
    toId: String!
    rate: Float!
  }

  type Query {
    typeRelations: [TypeRelation!]! @requireAuth
    typeRelation(id: String!): TypeRelation @requireAuth
  }

  input CreateTypeRelationInput {
    fromId: String!
    toId: String!
    rate: Float!
  }

  input UpdateTypeRelationInput {
    fromId: String
    toId: String
    rate: Float
  }

  type Mutation {
    createTypeRelation(input: CreateTypeRelationInput!): TypeRelation!
      @requireAuth
    updateTypeRelation(
      id: String!
      input: UpdateTypeRelationInput!
    ): TypeRelation! @requireAuth
    deleteTypeRelation(id: String!): TypeRelation! @requireAuth
  }
`
