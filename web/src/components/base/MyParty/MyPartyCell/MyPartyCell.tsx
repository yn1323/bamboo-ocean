import type { FindMyPartyById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import MyParty from 'src/components/base/MyParty/MyParty'

export const QUERY = gql`
  query FindMyPartyById($id: String!) {
    myParty: myParty(id: $id) {
      id
      name
      favorite
      memo
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MyParty not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ myParty }: CellSuccessProps<FindMyPartyById>) => {
  return <MyParty myParty={myParty} />
}
