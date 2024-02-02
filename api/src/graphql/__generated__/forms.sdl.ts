export const schema = gql`
  type Form {
    id: String!
    no: String!
    formType: String!
    formType2: String!
    name: String!
    battleData: [BattleData!]!
  }

  type Query {
    forms: [Form!]! @requireAuth
    form(id: String!): Form @requireAuth
  }

  input CreateFormInput {
    no: String!
    formType: String!
    formType2: String!
    name: String!
  }

  input UpdateFormInput {
    no: String
    formType: String
    formType2: String
    name: String
  }

  type Mutation {
    createForm(input: CreateFormInput!): Form! @requireAuth
    updateForm(id: String!, input: UpdateFormInput!): Form! @requireAuth
    deleteForm(id: String!): Form! @requireAuth
  }
`
