import React from 'react'

const TaskNumber = ({data,color,heading}) => {
  return (
    <div className={`rounded-xl md:w-2/9 w-[47%] ${color} shrink-0 md:p-10 md:py-10 p-3`} >
        <h2 className='text-3xl font-semibold'>{data}</h2>
        <h3 className='text-xl font-medium'>{heading}</h3>
        </div>
  )
}

export default TaskNumber