import type { FindCountryQuery, FindCountryQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCountryQuery($id: Int!) {
    country: country(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCountryQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  country,
}: CellSuccessProps<FindCountryQuery, FindCountryQueryVariables>) => {
  return <div>{JSON.stringify(country)}</div>
}
