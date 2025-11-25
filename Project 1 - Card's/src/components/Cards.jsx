import React from 'react'
import Card from './Card'
import "../App.css";
const Cards = (props) => {
  return (
    <div className='card-container'>
    <Card data={props.data}/>
    </div>
  )
}

export default Cards