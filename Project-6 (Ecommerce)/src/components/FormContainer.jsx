import React from 'react'
import Signup from './Signup'
import Login from './Login'

const FormContainer = ({title,description,role}) => {
  return (
    <div className='h-full w-full'>
        <div className="title text-4xl font-medium">
            {title}
        </div>
        <div className="description font-light my-3">
            {description}
        </div>
        {
            role == 'signup' ? <Signup/> : <Login/>
        }
    </div>
  )
}

export default FormContainer