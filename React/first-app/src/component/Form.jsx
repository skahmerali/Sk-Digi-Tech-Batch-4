import React, { useState } from 'react'

export default function Form() {
    const [data, setData] = useState({
        firstName: "",
        lastName: ""
    })
   const handleInput = (event)=>{
        console.log(event.target.name)
     
            if(event.target.name === "firstName"){
                console.log("hello this is firstName")
                // setData(data.firstName = event.target.value)
            }else{
                // setData(data.lastName);
            }
        
   }
  return (
    <div>
      <form onChange={handleInput}>
        <input type="text" name='firstName'/>
        <input type="text" name='lastName'/>

      </form>
      <h1>{data.firstName }</h1>
      <h1>{data.lastName }</h1>
    </div>
  )
}
