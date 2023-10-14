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
    base64Image: String!
    imageUrl: String!
    imageSmallUrl: String!
    imageLargeUrl: String!
    url: String!
    battleIndex: String!
    battleFormIndex: String!
    battleData: [BattleData]!
    MyPokemon: [MyPokemon]!
    myEnemy: [MyEnemy]!
    evolutionFrom: [Evolution]!
    evolutionTo: [Evolution]!
    evolutions: [Evolution]!
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
    base64Image: String!
    imageUrl: String!
    imageSmallUrl: String!
    imageLargeUrl: String!
    url: String!
    battleIndex: String!
    battleFormIndex: String!
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
    base64Image: String
    imageUrl: String
    imageSmallUrl: String
    imageLargeUrl: String
    url: String
    battleIndex: String
    battleFormIndex: String
  }

  type Mutation {
    createPokemon(input: CreatePokemonInput!): Pokemon! @requireAuth
    updatePokemon(id: String!, input: UpdatePokemonInput!): Pokemon!
      @requireAuth
    deletePokemon(id: String!): Pokemon! @requireAuth
  }
`
