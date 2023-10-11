import EditMyPartyTagCell from 'src/components/base/MyPartyTag/EditMyPartyTagCell'

type MyPartyTagPageProps = {
  id: string
}

const EditMyPartyTagPage = ({ id }: MyPartyTagPageProps) => {
  return <EditMyPartyTagCell id={id} />
}

export default EditMyPartyTagPage
