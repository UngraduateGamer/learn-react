import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-6 flex gap-5 overflow-x-scroll card-container '>
        {
            props.data.map((elem, idx)=>{
                return (
                    <RightCard key = {idx} data={elem} index={idx}/>
                    
                )
            })
        }
    </div>
  )
}

export default RightContent