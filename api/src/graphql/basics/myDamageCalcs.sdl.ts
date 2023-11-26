export const schema = gql`
  type MyDamageCalc {
    id: String!
    clientId: String!
    myDamageCalcIndex: MyDamageCalcIndex
    myDamageCalcIndexId: String
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
    moves: [Move!]!
    evH: Int!
    evA: Int!
    evB: Int!
    evC: Int!
    evD: Int!
    evS: Int!
    ivH: Int!
    ivA: Int!
    ivB: Int!
    ivC: Int!
    ivD: Int!
    ivS: Int!
    rankA: Int!
    rankB: Int!
    rankC: Int!
    rankD: Int!
    rankS: Int!
    side: String!
    order: Int!
  }

  type Query {
    myDamageCalcs: [MyDamageCalc!]! @requireAuth
    myDamageCalc(id: String!): MyDamageCalc @requireAuth
  }

  input CreateMyDamageCalcInput {
    clientId: String!
    myDamageCalcIndexId: String
    pokemonId: String!
    itemId: String
    abilityId: String
    natureId: String!
    terastalId: String
    evH: Int!
    evA: Int!
    evB: Int!
    evC: Int!
    evD: Int!
    evS: Int!
    ivH: Int!
    ivA: Int!
    ivB: Int!
    ivC: Int!
    ivD: Int!
    ivS: Int!
    rankA: Int!
    rankB: Int!
    rankC: Int!
    rankD: Int!
    rankS: Int!
    side: String!
    order: Int!
  }

  input UpdateMyDamageCalcInput {
    clientId: String
    myDamageCalcIndexId: String
    pokemonId: String
    itemId: String
    abilityId: String
    natureId: String
    terastalId: String
    evH: Int
    evA: Int
    evB: Int
    evC: Int
    evD: Int
    evS: Int
    ivH: Int
    ivA: Int
    ivB: Int
    ivC: Int
    ivD: Int
    ivS: Int
    rankA: Int
    rankB: Int
    rankC: Int
    rankD: Int
    rankS: Int
    side: String
    order: Int
  }

  type Mutation {
    createMyDamageCalc(input: CreateMyDamageCalcInput!): MyDamageCalc!
      @requireAuth
    updateMyDamageCalc(
      id: String!
      input: UpdateMyDamageCalcInput!
    ): MyDamageCalc! @requireAuth
    deleteMyDamageCalc(id: String!): MyDamageCalc! @requireAuth
  }
`
