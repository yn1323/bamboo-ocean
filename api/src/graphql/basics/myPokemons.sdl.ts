export const schema = gql`
  type MyPokemon {
    id: String!
    name: String!
    favorite: Boolean!
    evH: Int!
    evA: Int!
    evB: Int!
    evC: Int!
    evD: Int!
    evS: Int!
    memo: String!
    tag: [MyPokemonTag]!
    pokemon: Pokemon!
    pokemonId: String!
    item: Item
    itemId: String
    ability: Ability
    abilityId: String
    nature: Nature!
    natureId: String!
    terastal: Type
    terastalId: String
    moves: [Move]!
    myParty: [MyParty]!
    user: User!
    userId: String!
    myPokemonPros: [MyPokemonPros]!
    myPokemonCons: [MyPokemonCons]!
  }

  type Query {
    myPokemons: [MyPokemon!]! @requireAuth
    myPokemon(id: String!): MyPokemon @requireAuth
  }

  input CreateMyPokemonInput {
    name: String!
    favorite: Boolean!
    evH: Int!
    evA: Int!
    evB: Int!
    evC: Int!
    evD: Int!
    evS: Int!
    memo: String!
    pokemonId: String!
    itemId: String
    abilityId: String
    natureId: String!
    terastalId: String
    userId: String!
  }

  input UpdateMyPokemonInput {
    name: String
    favorite: Boolean
    evH: Int
    evA: Int
    evB: Int
    evC: Int
    evD: Int
    evS: Int
    memo: String
    pokemonId: String
    itemId: String
    abilityId: String
    natureId: String
    terastalId: String
    userId: String
  }

  type Mutation {
    createMyPokemon(input: CreateMyPokemonInput!): MyPokemon! @requireAuth
    updateMyPokemon(id: String!, input: UpdateMyPokemonInput!): MyPokemon!
      @requireAuth
    deleteMyPokemon(id: String!): MyPokemon! @requireAuth
  }
`
