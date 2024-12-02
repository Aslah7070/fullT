// import React, { useEffect, useState  } from 'react'
// import axios from "axios"
// const Fetch = () => {
//   const [data,setData]=useState([])
//   const [body,setBody]=useState([])
// useEffect(()=>{
      
//   const display= async()=>{
//     let responce=await axios.get("https://jsonplaceholder.typicode.com/posts")
//     setData(responce.data)
//   }
//   display()
// },[])

// const hanlde=(val)=>{
// if(val.id!==body.id){
//   setBody(val)
// }else{
//   setBody("")
// }
// }

//   return (
//     <div> 
//      {
//       data&&data.map((val)=>(
//         <div>
//           <li onClick={()=>hanlde(val)}>{val.title}</li>
//           <p>{val.id===body.id&&body.body}</p>
//         </div>
//       ))
//      }
//     </div>
//   )
// }

// export default Fetch







import React, { useContext } from 'react';
import { a } from './ColorContext';

const Fetch = () => {
  const { color } = useContext(a);

  return (
    <div>
      <div
        style={{
          borderRadius: '50%',
          backgroundColor: color,
          width: '100px',
          height: '100px',
        }}
      ></div>
    </div>
  );
};

export default Fetch;
