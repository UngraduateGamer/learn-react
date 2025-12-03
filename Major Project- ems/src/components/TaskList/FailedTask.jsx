    import React from 'react'
    
    const FailedTask = ({data}) => {
      return (
 <div className={`shrink-0 md:h-full h-fit md:w-[300px] w-full rounded-xl p-5 ${data.color}`}>
      <div className="flex flex-col justify-between h-full">
            <div className="first">

            <div className="text-center justify-between  flex ">
                <h3 className='py-1 px-3 rounded text-sm bg-red-700'>{data.category}</h3>
            <h4>{data.date}</h4>
            </div>
            <div className="">

            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm '>{data.taskDescription}</p>
            </div>
            </div>
          
          <div className='flex justify-between items-center'>
            <button className='px-2 py-1 bg-green-500 rounded text-sm'>Failed Task</button>
          </div>
      </div>
            </div>
      )
    }
    
    export default FailedTask