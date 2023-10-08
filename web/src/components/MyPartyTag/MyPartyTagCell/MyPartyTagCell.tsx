import type { FindMyPartyTagById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MyPartyTag from 'src/components/MyPartyTag/MyPartyTag'

export const QUERY = gql`
  query FindMyPartyTagById($id: String!) {
    myPartyTag: myPartyTag(id: $id) {
      id
      name
      favorite
      memo
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MyPartyTag not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  myPartyTag,
}: CellSuccessProps<FindMyPartyTagById>) => {
  return <MyPartyTag myPartyTag={myPartyTag} />
}
