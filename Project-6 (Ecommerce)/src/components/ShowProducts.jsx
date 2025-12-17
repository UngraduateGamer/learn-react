import React, { useEffect, useState } from 'react'
import CardAllInfo from './CardAllInfo'
const ShowProducts = ({data,msg}) => {
  const [selectedSorted,setSelectedSorted] = useState("");
  const [sortedData,setSortedData] = useState([]);
      useEffect(()=>{
        let AllData = [...data];
          setSortedData(AllData);
      },[data])
      
      useEffect(()=>{
        let temp = [...data];
        console.log(selectedSorted)
        switch(selectedSorted){
          case 'low' : 
          temp.sort((a,b)=>a.price-b.price);break;
          case 'high' : 
          temp.sort((a,b)=>b.price-a.price);break;
          case 'rating' : 
          temp.sort((a,b)=>a.rating-b.rating);break;
          case 'discount' : 
          temp.sort((a,b)=>a.discountPercentage-b.discountPercentage);break;
          default:
            break;
        }
        setSortedData(temp)
      },[data,selectedSorted])
  return (
    <div className="category flex w-[90%] mx-auto py-5 gap-10 relative">
            <div className="left w-[20%] bg-gray-50 h-fit  ">
              <h2 className="font-semibold text-xl my-3 border-b border-gray-200">&nbsp;&nbsp;&nbsp;&nbsp;Filters</h2>
              <div className='p-3 px-5 text-md'>
                 <h2 className='text-md'>Sort by: </h2> 
                  <form className='flex flex-col text-sm text-gray-800  gap-3'>
                    <div className='p-3 py-0 pt-3'>
                    <input type="radio"  value={'low'} id='low'  name="filter" checked={selectedSorted == "low"} onChange={e=>setSelectedSorted(e.target.value)}/> <label htmlFor="low" >Price (Low to High)</label>
                    </div>
                    <div className='p-3 py-0'>
                    <input type="radio"  value={'high'} id='high' name="filter" checked={selectedSorted == "high"} onChange={e=>setSelectedSorted(e.target.value)}/> <label htmlFor="high" >Price (High to Low)</label>
                    </div>
                    <div className='p-3 py-0'>
                    <input type="radio"  value={'rating'} id='rating' name="filter" checked={selectedSorted == "rating"} onChange={e=>setSelectedSorted(e.target.value)}/> <label htmlFor="rating" >Rating</label>
                    </div>
                    <div className='p-3 py-0'>
                    <input type="radio"  value={'discount'} id='discount' name="filter" checked={selectedSorted == "discount"} onChange={e=>setSelectedSorted(e.target.value)}/> <label htmlFor="discount" >Discount</label>
                    </div>
                    
                  </form>
              </div>
            </div>
            <div className="right w-[80%]  ">
                
                <div className="card-container flex flex-wrap gap-3 relative ">
                  {
                      sortedData.map((elem,idx)=>{
                          return <CardAllInfo  className={'shrink-0'} key={idx} data={elem} hidden={false}/>
                        })
                    }
                    </div>
            </div>
        </div>
  )
}

export default ShowProducts