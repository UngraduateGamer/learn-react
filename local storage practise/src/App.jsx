import React from 'react'
import "./script"
const App = () => {
  return (
    <div>
      <h1>Local Storage Practise</h1> 
      <br />
      <h2>Set the item of local Storage </h2>
      <p>localStorage.setItem("name","rahul");</p>
      <h2>get the item of local Storage </h2>
      <p>localStorage.getItem("name");</p>
      <h2>remove the item of local Storage </h2>
      <p>localStorage.removeItem("name");</p>
      <h2>Cleat all the item of local Storage </h2>
      <p>localStorage.clear();</p>
      <h2>How to set the object of localStorage </h2>
      <p>
        make sure you can use JSON.stringfy(obj)
       </p>
      <h2>How to retreive the object of localStorage </h2>
      <p>
        make sure you can use JSON.parse(obj)
       </p>

    </div>
  )
}

export default App