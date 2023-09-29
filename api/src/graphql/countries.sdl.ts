export const schema = gql`
  type Country {
    id: Int!
    name: String!
  }

  type Query {
    countries: [Country!]! @requireAuth
    country(id: Int!): Country @requireAuth
  }

  input CreateCountryInput {
    name: String!
  }

  input UpdateCountryInput {
    name: String
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): Country! @requireAuth
    updateCountry(id: Int!, input: UpdateCountryInput!): Country! @requireAuth
    deleteCountry(id: Int!): Country! @requireAuth
  }
`
