import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const data = [
  {
    image:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ducimus exercitationem quam cum dolorem earum.",
    tags:"Satisfied"
  },
  {
    image:"https://images.unsplash.com/photo-1573496547376-81418527a728?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ducimus exercitationem quam cum dolorem earum.",
    tags:"Underserved"
  },
  {
    image:"https://plus.unsplash.com/premium_photo-1670774938028-4e988b59ad4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ducimus exercitationem quam cum dolorem earum.",
    tags:"Underbanked"
  },
  {
    image:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ducimus exercitationem quam cum dolorem earum.",
    tags:"Satisfied"
  },
  {
    image:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ducimus exercitationem quam cum dolorem earum.",
    tags:"Underserved"
  }
]
const App = () => {
  return (
    <div>
      <Section1 data= {data}/>
      <Section2/>
    </div>
  )
}

export default App