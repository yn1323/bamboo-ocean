export const schema = gql`
  type Query {
    battleDatasLatest: [BattleData!]! @requireAuth
  }
`
