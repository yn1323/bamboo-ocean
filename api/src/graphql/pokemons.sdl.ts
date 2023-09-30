export const schema = gql`
  type Pokemon {
    id: String!
    name: String!
    form: String!
    no: Int!
    height: Float!
    weight: Float!
    types: [Type]!
    statusH: Int!
    statusA: Int!
    statusB: Int!
    statusC: Int!
    statusD: Int!
    statusS: Int!
    abilities: [Ability]!
    moves: [Move]!
    imageUrl: String!
    base64Image: String!
    url: String!
    battleIndex: String!
    battleData: [BattleData]!
  }

  type Query {
    pokemons: [Pokemon!]! @requireAuth
    pokemon(id: String!): Pokemon @requireAuth
  }

  input CreatePokemonInput {
    name: String!
    form: String!
    no: Int!
    height: Float!
    weight: Float!
    statusH: Int!
    statusA: Int!
    statusB: Int!
    statusC: Int!
    statusD: Int!
    statusS: Int!
    imageUrl: String!
    base64Image: String!
    url: String!
    battleIndex: String!
  }

  input UpdatePokemonInput {
    name: String
    form: String
    no: Int
    height: Float
    weight: Float
    statusH: Int
    statusA: Int
    statusB: Int
    statusC: Int
    statusD: Int
    statusS: Int
    imageUrl: String
    base64Image: String
    url: String
    battleIndex: String
  }

  type Mutation {
    createPokemon(input: CreatePokemonInput!): Pokemon! @requireAuth
    updatePokemon(id: String!, input: UpdatePokemonInput!): Pokemon!
      @requireAuth
    deletePokemon(id: String!): Pokemon! @requireAuth
  }
`
