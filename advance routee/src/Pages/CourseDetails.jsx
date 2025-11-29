import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams();
  return (
    <div className='centering'>{params.id} CourseDetails</div>
  )
}

export default CourseDetails