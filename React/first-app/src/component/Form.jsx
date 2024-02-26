import React, { useState } from 'react'

export default function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  })
  // var y = 2;
  // var x = 1;
  // x = y++;
  // // x++
  // console.log(x) //2
  // console.log(y) //3
  const handleInput = (event) => {
    console.log(event.target.name)

    setData((e) => {
      return ({ ...e, [event.target.name]: event.target.value })
    })

    // if(event.target.name === "firstName"){
    //     console.log("hello this is firstName")
    //     // setData(data.firstName = event.target.value)
    // }else{
    //     // setData(data.lastName);
    // }




  }
  return (
    <div>
      <form onChange={handleInput}>
        <input type="text" name='firstName' />
        <input type="text" name='lastName' />

      </form>
      <h1>this is my first name : {data.firstName}</h1>
      <h1>this is my second name : {data.lastName}</h1>
    </div>
  )
}
