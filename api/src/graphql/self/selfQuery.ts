export const schema = gql`
  type Query {
    filterMyPokemons(userId: String!): [MyPokemon!]! @requireAuth
    filterMyParties(userId: String!): [MyParty!]! @requireAuth
    filterMyPokemonTags(userId: String!): [MyPokemonTag!]! @requireAuth
    filterMyPartyTags(userId: String!): [MyPartyTag!]! @requireAuth
  }
`
