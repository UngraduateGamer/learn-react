import React from 'react'
import Tasks from './Tasks'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] w-full flex gap-5 py-5 mt-10 overflow-x-auto flex-nowrap md:flex-row flex-col'> 
    
        {
          data.tasks.map((elem,idx)=>{
            return <Tasks data={elem} key={idx}/>
          })
        }
    </div>
  )
}

export default TaskList