import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const RightCardInfo = (props) => {
    return (

        <div className="card-info absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-opacity-50 h-full w-full p-8 flex justify-between flex-col">
            <h3 className='text-lg font-semibold bg-white flex justify-center items-center h-10 w-10 rounded-full p-3'>{props.index}</h3>
            <p className='text-white font-medium leading-relaxed'>{props.data.content}</p>
            <div className="btns flex justify-between">
                <button className='bg-blue-500 text-white px-5 py-1 rounded-3xl'>{props.data.tags}</button>
                <button className='bg-blue-500 text-white px-2 text-xl h-10 w-10 flex items-center justify-center py-1 rounded-full'><FaArrowRight /></button>
            </div>
        </div>

    )
}

export default RightCardInfo