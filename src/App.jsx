import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
//import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
import Weather from './components/Weather'
import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import useCounter from './components/useCounter'
// import { useState } from 'react'
// import {useEffect} from 'react'
function App() {
   let [user,setUser]=useState(false)

   let {count,increment,decrement}=useCounter()
//  let [count,setCount]=useState(0)
//  useEffect(()=>{
//   console.log('running ')
//   console.log('api call')
//  },[count])
 
  return (
   <div>
    {count}
    <button onClick={increment}>inc</button>
    <button onClick={decrement}>dnc</button>
    {/* {count}
    <button onClick={()=>setCount(count+1)}>inc</button> */}
    <Navbar/>
    <button onClick={()=>setUser(true)}>click to login</button>
    <Routes>
      <Route path='/' element={<Section/>}/>
<Route path='/add-doctor' element={<ProtectedRoute user={user}> <Addnewdoctor/></ProtectedRoute> }/>
      <Route path='/doctor/:id' element={<Doctordetails/>} />
       <Route path='/weather' element={<Weather/>}/>
    </Routes>

    {/* <div className="doctorparent">
    <Doctorcard name='Triveni' specialization='Heart' gender='Female'/> 
    <Doctorcard name='Pavan' specialization='Ortho' gender='Male'/> 
    <Doctorcard name='Bhanu' specialization='Muscles' gender='Male'/> 
    <Doctorcard name='Vasavi' specialization='psycho' gender='Female'/> 
    <Doctorcard name='Madhu' specialization='Neuro' gender='Male'/> 
  
    </div> */}

    {/* <Addnewdoctor/> */}
   


   </div>
  )
}

export default App