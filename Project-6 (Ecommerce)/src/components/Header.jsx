import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#000000]  h-12 top-0 w-full'>
        <div className="w-[90%] mx-auto flex items-center justify-end gap-72 h-full">
            <div className="left flex gap-2 ">
                <p className='text-sm font-normal text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <p className='underline font-semibold text-sm text-white'>ShopNow</p>
            </div>
            <div className="right text-white">
              <select name="" id="" className='text-sm'>
                <option value="english" className='bg-black'>English</option>
                <option value="hindi" className='bg-black'>Hindi</option>
                <option value="punjabi" className='bg-black'>Punjabi</option>
              </select>
            </div>
        </div>
    </div>
    
  )
}

export default Header