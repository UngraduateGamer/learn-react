import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
            <button className='btn view-profile'>View Profile</button>
        </div>
    </>
  )
}

export default Card