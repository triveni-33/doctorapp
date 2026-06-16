import   { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'

function Doctordetails() {
    const {id} = useParams()
  return (
    <div>Doctordetails {id} </div>
  )
}

export default Doctordetails