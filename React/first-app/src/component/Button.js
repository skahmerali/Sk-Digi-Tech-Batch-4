import React, { useState, useEffect } from 'react'

export default function Button() {

  const [state, setState] = useState(0)
  const [data, setData] = useState(20)
  // var state = 10


  const change = () => {
    setState(state + 1)
    // state++
    console.log(state);
  }



  const change2 = () => {
    setData(data + 1)
    // state++
    console.log(data);
  }
  useEffect(() => {
    console.log("useEffect");
  }, [state, data])


  return (
    <>


      <h1>state :{state}</h1>
      <h1>data :{data}</h1>
      <button onClick={() => change()}>click</button>
      <button onClick={() => change2()}>click data</button>
    </>

  )
}

