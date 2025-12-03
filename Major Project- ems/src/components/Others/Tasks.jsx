import React from 'react'
import Accept from '../TaskList/Accept'
import FailedTask from '../TaskList/FailedTask'
import CompleteTask from '../TaskList/CompleteTask'
import NewTask from '../TaskList/NewTask'

const Tasks = ({data}) => {

  return (
    <div>
      {
        (data.active) && <Accept data={data}/> 
      }
      {
        data.failed && <FailedTask data={data}/>

      }
      {
        data.completed && <CompleteTask data={data}/>
      }
      
    </div>
  )
}

export default Tasks