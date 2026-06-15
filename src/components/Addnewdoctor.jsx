import { useState } from "react"
import Home from "./Home"
function Addnewdoctor() {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [gender,setGender]=useState('')
  const [specialization,setSpecialization]=useState('')
  const [salary,setSalary]=useState('')

  const [newdoctor,setNewdoctor]=useState(null)

  function handlesubmit(e){
    e.preventDefault()
    let formdata={
      name,age,gender,specialization,salary,id:Date.now()
    }
    setNewdoctor(formdata)
    console.log(formdata)
  }
  return (
    <div>
      <h1>Add new doctor</h1>
      <form className='form-container'  onSubmit={handlesubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='text-field' placeholder='Enter Doctor Name' />
        <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" className='text-field' placeholder='Enter Age' />
        <select value={gender} name="" id="" onChange={(e)=>setGender(e.target.value)}>
          <option>Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">FeMale</option>
        </select>
        <input value={specialization}  onChange={(e)=>setSpecialization(e.target.value)} type="text" className='text-field' placeholder='Enter Specialization' />
        <input value={salary} onChange={(e)=>setSalary(e.target.value)} type="text"  className='text-field' placeholder='Enter Salary' />
        <button type='submit'>Add Doctor</button>
      </form>

      <Home newdoctor={newdoctor}/>
    </div>  
  )
}

export default Addnewdoctor