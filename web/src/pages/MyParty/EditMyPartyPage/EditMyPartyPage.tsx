import EditMyPartyCell from 'src/components/MyParty/EditMyPartyCell'

type MyPartyPageProps = {
  id: string
}

const EditMyPartyPage = ({ id }: MyPartyPageProps) => {
  return <EditMyPartyCell id={id} />
}

export default EditMyPartyPage
