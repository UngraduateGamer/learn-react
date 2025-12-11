import React, { useState, useEffect, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { RiStarFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref for the profile dropdown

  const manageProfile = () => setVisible(!visible);

  const profileLinks = [
    { icon: <FaUserEdit className='text-2xl' />, label: "Manage My Account", to: "/edit-profile" },
    { icon: <IoBagHandleOutline className='text-2xl' />, label: "My Order", to: "/" },
    { icon: <MdOutlineCancel className='text-2xl' />, label: "My Cancellation", to: "/" },
    { icon: <RiStarFill className='text-2xl' />, label: "My Reviews", to: "/" },
    { icon: <CiLogout className='text-2xl' />, label: "Logout", to: "/" },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='bg-white w-full h-18 text-black border-b border-[#0000002a]'>
      <div className="w-[90%] flex justify-between items-center mx-auto h-full">
        <div className="left font-semibold text-xl">Exclusive</div>

        <div className="center text-black flex gap-5">
          <NavLink to="/" className='relative a active:scale-95'>Home</NavLink>
          <NavLink to="/contact" className='relative a active:scale-95'>Contact</NavLink>
          <NavLink to="/about" className='relative a active:scale-95'>About</NavLink>
          <NavLink to="/signup" className='relative a active:scale-95'>Sign Up</NavLink>
        </div>

        <div className="right flex items-center gap-3">
          <div className='relative flex items-center w-full bg-[#f5f5f5] rounded pl-3 pr-10'>
            <input
              type="text"
              placeholder='What are you looking for?'
              className='outline-none w-52 p-2 text-sm'
              aria-label="Search"
            />
            <IoSearch className='absolute right-3' />
          </div>

          <IoMdHeartEmpty className='text-2xl cursor-pointer' />

          <div className='relative'>
            <BsCart className='text-xl cursor-pointer' />
            <div className="count absolute w-4 h-4 rounded-full bg-[#db4444] text-white flex items-center justify-center text-[10px] -top-1 -right-1">
              2
            </div>
          </div>

          <div
            className="w-8 h-8 shrink-0 aspect-square rounded-full bg-[#db4444] text-white flex items-center justify-center relative cursor-pointer"
            onClick={manageProfile}
            ref={dropdownRef} // Attach ref here
          >
            <FaUserEdit className='ml-1' />

            {visible && (
              <div className="manage-profile shadow-xl h-60 w-60 absolute -bottom-60 right-0 z-10 p-5 flex flex-col gap-5 rounded bg-black text-white">
                {profileLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className="whitespace-nowrap flex gap-3 items-center text-sm !text-black "
                  >
                    {item.icon} {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
