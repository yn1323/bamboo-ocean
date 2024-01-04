export const schema = gql`
  type Evolution {
    id: String!
    pokemon: Pokemon!
    pokemonId: String!
    from: [Pokemon!]!
    to: [Pokemon!]!
  }

  type Query {
    evolutions: [Evolution!]! @requireAuth
    evolution(id: String!): Evolution @requireAuth
  }

  input CreateEvolutionInput {
    pokemonId: String!
  }

  input UpdateEvolutionInput {
    pokemonId: String
  }

  type Mutation {
    createEvolution(input: CreateEvolutionInput!): Evolution! @requireAuth
    updateEvolution(id: String!, input: UpdateEvolutionInput!): Evolution!
      @requireAuth
    deleteEvolution(id: String!): Evolution! @requireAuth
  }
`
