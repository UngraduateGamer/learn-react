import React from 'react'
import { NavLink } from 'react-router-dom';

const Category = (props) => {
  const Icon = props.data.Icon;
  return (
    <>
    <NavLink to={`products/category/${props.data.name.slug}`}>
     <div className="category my-5 hover:bg-[#db4444] hover:text-white active:scale-95">
            <div className="box w-[170px] h-[145px] border rounded border-[#00000070] flex flex-col  justify-center items-center gap-5">
              {Icon && <Icon className="text-5xl" />}
<h2 className='text-sm font-semibold'>{props.data.name.name}</h2>
            </div>
        </div>
    </NavLink>
    </>
  )
}

export default Category