import React from 'react'
import { CiBookmark } from "react-icons/ci";
const Card = (props) => {
  return (
      <>
        {
            props.data.map((elem)=>{
                return (
                <div className="card">
        <div className="top">
          <div className="logo">
            <img src={elem['brand-logo']} alt="" />
          </div>
          <div className="btn">Save <CiBookmark/></div>
        </div>
        <div className="center">
          <div className="title">
            <h2>{elem['brand-name']} <span>{elem.posted}</span></h2> 
          </div>
          <div className="text">
            <h3>
                {elem.role}
            </h3>
          </div>
          <div className="tags">
            <div className="time  capsules">
              {elem.tag1}
            </div>
            <div className="level capsules">
              {elem.tag2}
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="pay">
            <p>{elem.pay}</p>
            <p>{elem.location}</p>
          </div>
          <div className="btn">
            Apply now
          </div>
        </div>
      </div>)
            })
        }      
      </>
  )
}

export default Card