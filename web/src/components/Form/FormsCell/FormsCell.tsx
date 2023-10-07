import type { FindForms } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Forms from 'src/components/Form/Forms'

export const QUERY = gql`
  query FindForms {
    forms {
      id
      no
      formType
      formType2
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No forms yet. '}
      <Link to={routes.newForm()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ forms }: CellSuccessProps<FindForms>) => {
  return <Forms forms={forms} />
}
