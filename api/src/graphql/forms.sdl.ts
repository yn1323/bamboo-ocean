export const schema = gql`
  type Form {
    id: String!
    key: String!
    name: String!
  }

  type Query {
    forms: [Form!]! @requireAuth
    form(id: String!): Form @requireAuth
  }

  input CreateFormInput {
    key: String!
    name: String!
  }

  input UpdateFormInput {
    key: String
    name: String
  }

  type Mutation {
    createForm(input: CreateFormInput!): Form! @requireAuth
    updateForm(id: String!, input: UpdateFormInput!): Form! @requireAuth
    deleteForm(id: String!): Form! @requireAuth
  }
`
