import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Components/Card';
import Pagination from './Components/Pagination';
const App = () => {
  const [data,setData] = useState([])
  const [limit,setLimit] = useState(10);
  const [index,setIndex] = useState(1);
  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${limit}`);
    setData(response.data)
    console.log(response.data)
  }
  let userData = <div class="flex justify-center items-center absolute top-1/2 left-1/2 -trasnslate-x-1/2 -translate-y-1/2 ">
  <div class="w-8 h-8 border-4 border-l-transparent border-r-transparent  border-t-white border-b-amber-500  rounded-full animate-spin"></div>
</div>


  if(data.length>0){
    userData = data.map(((elem,idx)=>{
      return <Card elem={elem} idx={idx}/>
    }))
  } 
  useEffect(()=>{
    getData();
  },[index])
  
   
  return (
    <div className='bg-black min-h-screen w-full text-white p-4 ' 
    >
     
        <div className=' mt-3 flex gap-5 flex-wrap'>
        {
          userData
        }

      </div>
      <Pagination index={index} data={data} setData = {setData} setIndex = {setIndex} />
    </div>
  )
}

export default App