import React, { useState } from 'react'

export default function Todo() {
 
 const [todo ,setTodo] = useState('')
 const [list,setList] = useState([])


  const handlechange = (e)=>{
  //  console.log(e);
   setTodo(e.target.value)
  }
  const addTodo = ()=>{
    console.log(todo);
    setList((oldItem)=>{
      return [...oldItem,todo]
    })
    console.log(list);
    setTodo('')
    if(todo === ""){
      console.log("list is empty");
    }else{
      console.log("list is not empty");
    }

    todo === "" ? console.log("empty") : console.log("notEmpty") 
  }
  return (
    <div>
      <h1>todo</h1>
      <input type="text" value={todo} onChange={handlechange} />
      <button onClick={()=> addTodo()}>ADD</button>

      <ul>
       {
        list.map((data)=>{
          return(
            <li>{data}</li>
            
          )
        })
       }
      </ul>
    </div>
  )
}
