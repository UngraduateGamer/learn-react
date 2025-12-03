import React from 'react'
import TaskNumber from './TaskNumber'

const TaskNumberContainer = ({data}) => {
  return (
    <div className='flex mt-10  gap-5 w-full flex-wrap'>
      <TaskNumber data={data.tasksCount.newTask} heading={'New Task'} color={'bg-blue-400'}/>
      <TaskNumber data={data.tasksCount.completed} heading={'Completed Task'} color={'bg-green-400'}/>
      <TaskNumber data={data.tasksCount.active} heading={'Accept Task'} color={'bg-yellow-400'}/>
      <TaskNumber data={data.tasksCount.failed} heading={'Failed Task'} color={'bg-red-400'}/>
    </div>
  )
}

export default TaskNumberContainer