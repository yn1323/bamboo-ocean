import EditMyPartyTagCell from 'src/components/MyPartyTag/EditMyPartyTagCell'

type MyPartyTagPageProps = {
  id: string
}

const EditMyPartyTagPage = ({ id }: MyPartyTagPageProps) => {
  return <EditMyPartyTagCell id={id} />
}

export default EditMyPartyTagPage
