import React from 'react'
import RightCardImage from './RightCardImage';
import RightCardInfo from './RightCardInfo';

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-400 rounded-4xl shrink-0 flex overflow-hidden relative '>
       <RightCardImage data = {props.data}/>
       <RightCardInfo data = {props.data} index={props.index+1} />
    </div>
  )
}

export default RightCard