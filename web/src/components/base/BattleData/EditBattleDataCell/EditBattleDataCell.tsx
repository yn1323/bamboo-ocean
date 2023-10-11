import type { EditBattleDataById, UpdateBattleDataInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BattleDataForm from 'src/components/base/BattleData/BattleDataForm'

export const QUERY = gql`
  query EditBattleDataById($id: String!) {
    battleData: battleData(id: $id) {
      id
      battleIndexId
      pokemonId
      no
      rank
      formId
    }
  }
`
const UPDATE_BATTLE_DATA_MUTATION = gql`
  mutation UpdateBattleDataMutation(
    $id: String!
    $input: UpdateBattleDataInput!
  ) {
    updateBattleData(id: $id, input: $input) {
      id
      battleIndexId
      pokemonId
      no
      rank
      formId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  battleData,
}: CellSuccessProps<EditBattleDataById>) => {
  const [updateBattleData, { loading, error }] = useMutation(
    UPDATE_BATTLE_DATA_MUTATION,
    {
      onCompleted: () => {
        toast.success('BattleData updated')
        navigate(routes.battleDatas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBattleDataInput,
    id: EditBattleDataById['battleData']['id']
  ) => {
    updateBattleData({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BattleData {battleData?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BattleDataForm
          battleData={battleData}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
