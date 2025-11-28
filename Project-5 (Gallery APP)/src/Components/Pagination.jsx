import React from 'react'

const Pagination = (props) => {
     function changePrev(){
    if(props.index>1){
      props.setData([])
      props.setIndex(props.index-1)
    }
  }
  function changeNext(){
    if(props.index<90){
      props.setData([])
      props.setIndex(props.index+1)
    }
  }
  return (
    <div className='btns flex gap-5 justify-center items-center my-10'>
        <button onClick={changePrev} 
        className={`${props.index > 1 ? "bg-amber-500" : "bg-transparent text-white border  border-white"} text-black font-semibold active:scale-95 text-sm px-5 rounded py-2`}>Prev</button>
        <h4>Page {props.index}</h4>
        <button onClick={changeNext}
        className={` ${props.index<90 ? "bg-amber-500" : "bg-transparent text-white border border-white"} text-black font-semibold active:scale-95 text-sm px-5 rounded py-2`}>Next</button>
      </div>
  )
}

export default Pagination