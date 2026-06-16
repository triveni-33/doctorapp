import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Doctordetails() {
  const {id}=useParams()
  let [doctor,setDoctor]=useState({})
  useEffect(()=>{
    fetchdata()
  },[])

  function fetchdata(){
    let data=[
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];

    let finddoctor=data.find(val=>{
        return val.id==id
    })
    setDoctor(finddoctor)
  }
  return (
    <div>
        <h1>{doctor.id}</h1>
        <h1>{doctor.name}</h1>
        <h1>{doctor.salary}</h1>
        <h1>{doctor.gender}</h1>
        <h1>{doctor.specialization}</h1>
    </div>
  )
}

export default Doctordetails
