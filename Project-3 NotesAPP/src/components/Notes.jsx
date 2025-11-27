import React, { useState } from 'react'
import { ImCross } from "react-icons/im";

const Notes = () => {
    const [title,setTitle] = useState('');
    const [details,setDetails] = useState('');
    const [tasks,setTasks] = useState([]);
    
    function changeTitle(event){
        setTitle(event.target.value);
    }
    function changeDetails(event){
        setDetails(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault(); 
        const copyTask = [...tasks];
        copyTask.push({title,details})
        setTasks(copyTask)
        
        setTitle('');
        setDetails('');

    }
    const removeNotes=(index)=>{
        const copyTask = [...tasks];
        copyTask.splice(index,1);
        setTasks(copyTask);
    }
    return (
        <div className='bg-black lg:flex gap-5 text-white  w-full p-5'>
        <div className="flex flex-col gap-5 w-full lg:w-1/2 ">
        <form onSubmit={submitHandler} className='w-full flex flex-col gap-5 '>
            <h1 className='text-3xl font-bold'>Add Notes</h1>
            <input type="text" 
            placeholder='Enter notes heading'
            name="heading"
            value={title}
            onChange={changeTitle}
            className='px-5 py-2  outline-none bg-[#222] w-full rounded' />
            <textarea 
            placeholder='Enter details'
            name="details"
            // value={''}
            value={details}
            onChange={changeDetails}
            className='px-5 py-2 outline-none bg-[#222] h-40 resize:none w-full rounded' />
            <button className='px-5 py-2 w-full outline-none bg-white text-black text-xl rounded font-semibold active:scale-95' >Add notes</button>
        </form>

            </div>

            <div className="lg:px-5 lg:py-0 lg:w-1/2 py-10 lg:border-l-2  ">
            <h1 className='text-3xl font-bold'>Recents Notes</h1>
            <div className="container flex flex-wrap gap-5 mt-5 overflow-auto h-[88vh] ">
            {
                [...tasks].reverse().map((elem,index)=>{
                    return (
                <div className="h-52 w-50 rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowHB9R1s1x97nUewNlxi06KaDAyUFvjG8dA&s')] bg-cover bg-center text-black px-5 py-10 relative" key={index}>
                    <h3 className='text-2xl font-bold'>{elem.title}</h3>
                    <h3 className='text-yellow-500'>{elem.details}</h3>
                    <ImCross className='absolute top-4 right-4 h-8 w-8 p-2 text-xl cursor-pointer active:scale-95 rounded-full text-white bg-red-500' onClick={()=>removeNotes(index)}/>
                </div>
                    );
                })
            }              
            </div>
            </div>
    </div>
  )
}

export default Notes