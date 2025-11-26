import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen '>
        <Navbar/>
        <Page1Content data={props.data} />
    </div>
  )
}

export default Section1