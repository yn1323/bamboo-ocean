export const schema = gql`
  type Move {
    id: String!
    detail: String!
    name: String!
    type: Type
    typeId: String
    attackType: AttackType
    attackTypeId: String
    power: Int!
    accuracy: Int!
    pp: Int!
    isContact: Boolean!
    isQuick: Boolean!
    isDelay: Boolean!
    isChangeable: Boolean!
    isMultipleAttack: Boolean!
    isMustCritical: Boolean!
    isPunch: Boolean!
    isSound: Boolean!
    isPowder: Boolean!
    isWave: Boolean!
    isJaw: Boolean!
    isBullet: Boolean!
    isDance: Boolean!
    isWind: Boolean!
    isCut: Boolean!
    pokemons: [Pokemon!]!
    battleIndex: String!
    battleDataMoves: [BattleDataMove!]!
    myPokemon: [MyPokemon!]!
    myEnemy: [MyEnemy!]!
    MyDamageCalc: MyDamageCalc
    myDamageCalcId: String
  }

  type Query {
    moves: [Move!]! @requireAuth
    move(id: String!): Move @requireAuth
  }

  input CreateMoveInput {
    detail: String!
    name: String!
    typeId: String
    attackTypeId: String
    power: Int!
    accuracy: Int!
    pp: Int!
    isContact: Boolean!
    isQuick: Boolean!
    isDelay: Boolean!
    isChangeable: Boolean!
    isMultipleAttack: Boolean!
    isMustCritical: Boolean!
    isPunch: Boolean!
    isSound: Boolean!
    isPowder: Boolean!
    isWave: Boolean!
    isJaw: Boolean!
    isBullet: Boolean!
    isDance: Boolean!
    isWind: Boolean!
    isCut: Boolean!
    battleIndex: String!
    myDamageCalcId: String
  }

  input UpdateMoveInput {
    detail: String
    name: String
    typeId: String
    attackTypeId: String
    power: Int
    accuracy: Int
    pp: Int
    isContact: Boolean
    isQuick: Boolean
    isDelay: Boolean
    isChangeable: Boolean
    isMultipleAttack: Boolean
    isMustCritical: Boolean
    isPunch: Boolean
    isSound: Boolean
    isPowder: Boolean
    isWave: Boolean
    isJaw: Boolean
    isBullet: Boolean
    isDance: Boolean
    isWind: Boolean
    isCut: Boolean
    battleIndex: String
    myDamageCalcId: String
  }

  type Mutation {
    createMove(input: CreateMoveInput!): Move! @requireAuth
    updateMove(id: String!, input: UpdateMoveInput!): Move! @requireAuth
    deleteMove(id: String!): Move! @requireAuth
  }
`
