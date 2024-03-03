import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import Layout from './component/Layout';
import Form from './component/Form';
// import logo from './logo.svg';
// import './App.css';
// import Button from './component/Button';
import DummyData from './component/dummyData';
import Todo from './component/Todo';
// import Button from './component/Button';
// import car from './App.test'
// import Name from './Name';
// import Button from './component/Button';
function App() {
// let [count , setCount] = useState (0)
// useEffect(()=>{
  // setCount(count++)
//   console.log("hello world!")
// },[count] )
  // let count = 0
  // function inc() {
  //   // useState(count++)
  //   // count = count +1
  //   // var countValue = document.getElementById('count').innerHTML = count;
  //   // countValue = count
  //   setCount(count++)
  //   console.log(count)
  // }
  // function dec() {

  // }

  return (
    <div>
      <BrowserRouter>
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="dummyData" element={ <DummyData />} />
          <Route path="todo" element={ <Todo />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <h1>React</h1>
      <Button name="saqib" data="button" /> */}
     
      {/* <Button head="saqib"  title="click me" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsLvZDGFaRz0rSTHbElc9WbPD5VbVMVtQQw&usqp=CAU'/> */}
      {/* <h1 id='count'>{count}</h1> */}
      {/* <button onClick={()=>{setCount(count++)}}>+ {count}</button>
      <button onClick={()=>{setCount(count--)}}>- {count}</button> */}
      {/* <Button title='signup' />
      <Button title='login'  />
      <Button title='register'  /> */}
    </div>
  );
}

export default App;
