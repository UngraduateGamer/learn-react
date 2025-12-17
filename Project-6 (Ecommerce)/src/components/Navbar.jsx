import React, { useState, useEffect, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaUserEdit } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { RiStarFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setUserData(user);

    if (user && user.id) {
      const cartItems = JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];
      setCart(cartItems);
      const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCount(totalQty);
    }
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/products/search/${query}`);
    setQuery('');
  }

  const manageProfile = () => setVisible(!visible);

  const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products/category/mens-watches">Mens Watches</NavLink>
          <NavLink to="/products/category/mobile-accessories">Mobile Accessories</NavLink>
          <NavLink to="/products/category/motorcycle">Motor Cycles</NavLink>
          <NavLink to="/products/category/vehicle">Cars</NavLink>
          <NavLink to="/signup">{userData ? "" :"Sign up "}</NavLink>
        </div>

        <div className="right flex items-center gap-3">
          <form onSubmit={submitHandler}>
            <div className='relative flex items-center bg-[#f5f5f5] rounded pl-3 pr-10'>
              <input
                type="text"
                placeholder='What are you looking for?'
                className='outline-none w-52 p-2 text-sm'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className='flex items-center cursor-pointer'>
                <IoSearch className='absolute right-3' />
              </button>
            </div>
          </form>

          <div className='relative'>
            <BsCart className='text-xl cursor-pointer' onClick={()=>navigate("/cart")}/>
            <div className={`count animate-bounce absolute w-4 h-4 rounded-full bg-[#db4444] text-white flex items-center justify-center text-[10px] -top-1 -right-1 ${cart?.length > 0 ? "flex" : "hidden"}`}>
              {count}
            </div>
          </div>

          {userData ? (
            <div className="relative" ref={dropdownRef}>
              <div onClick={manageProfile} className="w-10 h-10 rounded-full overflow-hidden border-[#db4444] flex items-center justify-center">
                <FaUser className="text-xl text-[#db4444] cursor-pointer" />
              </div>

              {visible && (
                <div className="manage-profile shadow-xl w-50 absolute -bottom-25 right-0 z-10 p-5 flex flex-col gap-5 rounded bg-black !text-black">
                    {/* <NavLink to="/edit-profile" className="flex gap-3 items-center text-sm cursor-pointer ">
                      <FaUserEdit className="text-xl" /> Manage My Account
                    </NavLink> */}
                  <NavLink to="/myOrders" className="flex gap-3 items-center text-sm !text-black cursor-pointer">
                    <IoBagHandleOutline className='text-xl'/> My Orders
                  </NavLink>
                
                  <NavLink onClick={logoutUser} className="flex gap-3 items-center text-sm !text-black cursor-pointer">
                    <CiLogout className='text-xl'/> Logout
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" className="!text-black">
              <div className="flex items-center gap-2"><FaUser/> Login</div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
