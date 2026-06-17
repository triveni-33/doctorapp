import { useEffect,useState } from "react"
import Doctorcard from './Doctorcard'
import axios from "axios"

function Home({newdoctor}) {
  const [doctors,setDoctors]=useState([])

  const [search,setSearch]=useState("")
  const [specialization,setSpecialization]=useState('')
    
  async function fetchdata(){

    let response=await axios.get('https://doc-back.onrender.com/doctors')
    setDoctors(response.data)
  }
    
  //     {
  //       id: 1,
  //       name: "manoj",
  //       age: 26,
  //       gender: "Male",
  //       specialization: "Muscles",
  //       salary: 7000000,
  //     },

  //     {
  //       id: 2,
  //       name: "Sam",
  //       age: 26,
  //       gender: "Male",
  //       specialization: "Bones",
  //       salary: 4000000,
  //     },

  //     {
  //       id: 3,
  //       name: "Anuhya",
  //       age: 25,
  //       gender: "Female",
  //       specialization: "Heart",
  //       salary: 5000000,
  //     },
  //   ];
  //  setDoctors(data)

  
  
  useEffect(()=>{
    if(newdoctor){
      setDoctors(prev=>[...prev,newdoctor])
    }

  },[newdoctor])

  useEffect(()=>{
    fetchdata()
  },[])

  const filteredarray=doctors.filter((val)=>{
    return (
    val.name.toLowerCase().includes(search.toLowerCase())
    &&
    (specialization=="" || val.specialization==specialization)
    )

  })
  return (
    <div>
    <div className='filters'>
    <input value={search}  onChange={(e)=>setSearch(e.target.value)} type="text" className='text-field' placeholder='search your doctor' />
    <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
      <option value="">Select specialization</option>
      <option value="Bones">Bones</option>
      <option value="heart">Heart</option>
      <option value="Muscles">Muscles</option>
  

    </select>
    </div>
    <div className='doctorparent'>
     {filteredarray.length>0? (filteredarray.map((doctor)=>{
        return (
          <Doctorcard key={doctor.id} id={doctor.id} name={doctor.name} gender={doctor.gender} specialization={doctor.specialization}/>
        )
      })): <h1>No Doctors Found</h1>}
    </div>
    </div>
  )
}

export default Home