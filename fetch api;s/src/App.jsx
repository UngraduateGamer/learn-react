import React from 'react'
import axios from "axios"
import { useState } from 'react';
const App = () => {
    const [users,setUsers] = useState([]);
  // by axios method
  async function fetchData(){
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setUsers(data.data);
  }


  // by fetch method 
  // async function fetchData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await response.json();
  //   console.log(data);
  // }
    
  return (
    <>
  <div>Api's Call</div>
  {
    users.map((elem)=>{
      return <h1>{elem.title}</h1>
    })
  }
  <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App