import React, { useContext } from 'react'
import { a } from './ColorContext'

const Buttons = () => {
const {hello}=useContext(a)

    const handleColor=(colorr)=>{
         hello(colorr)
    }
  return (
    <div>
      <button onClick={()=>handleColor("red")} style={{color:"red"}}>red</button>
      <button onClick={()=>handleColor("blue")} style={{color:"blue"}}>blue</button>
      <button onClick={()=>handleColor("green")} style={{color:"green"}}>green</button>
      <button onClick={()=>handleColor("yellow")} style={{color:"yellow"}}>yellow</button>
     
    </div>
  )
}

export default Buttons
