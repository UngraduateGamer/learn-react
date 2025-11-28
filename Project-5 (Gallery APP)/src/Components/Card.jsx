import React from 'react'

const Card = (props) => {
  return (
    <div key={props.idx}>
            <a href={props.elem.url} target='_blank'>
            <div className='rounded-md overflow-hidden h-60 w-64 '>
              <img src={props.elem.download_url} alt="image" className='w-full h-full object-cover object-center' />
            </div>
            <h3 className='font-bold text-xl text-center'>{props.elem.author}</h3>
            </a>
          </div>
  )
}

export default Card