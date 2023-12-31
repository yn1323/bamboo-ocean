export const schema = gql`
  type MyEnemy {
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
    tag: [MyEnemyTag]!
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
    user: User!
    userId: String!
    MyPokemonPros: [MyPokemonPros]!
    MyPokemonCons: [MyPokemonCons]!
  }

  type Query {
    myEnemies: [MyEnemy!]! @requireAuth
    myEnemy(id: String!): MyEnemy @requireAuth
  }

  input CreateMyEnemyInput {
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

  input UpdateMyEnemyInput {
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
    createMyEnemy(input: CreateMyEnemyInput!): MyEnemy! @requireAuth
    updateMyEnemy(id: String!, input: UpdateMyEnemyInput!): MyEnemy!
      @requireAuth
    deleteMyEnemy(id: String!): MyEnemy! @requireAuth
  }
`
