import React, { createContext, useState } from 'react'
export const a=createContext()
const ColorContext = ({children}) => {
    
    const [color,setColor]=useState("")
const hello=(colorr)=>{
    setColor(colorr)
}

    return(
        <a.Provider value={{color,hello}}>
          { children}
        </a.Provider>
    )
 
}

export default ColorContext
