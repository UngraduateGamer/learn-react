import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditProfile = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <h2 className="w-[90%]  text-xl font-semibold mx-auto mt-5">Welcome! <span className="text-[#db4444]"> Md Rimel</span></h2>
    <div className="w-[90%]   mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LEFT SIDEBAR */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Manage My Account</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-[#df4444] font-medium cursor-pointer">
                My Profile
              </li>
              <li className="cursor-pointer hover:text-black">Address Book</li>
              <li className="cursor-pointer hover:text-black">
                My Payment Options
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">My Orders</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="cursor-pointer hover:text-black">My Returns</li>
              <li className="cursor-pointer hover:text-black">
                My Cancellations
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">My WishList</h3>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 bg-white p-8 rounded shadow-sm">
          <h2 className="text-lg font-semibold text-[#df4444] mb-6">
            Edit Your Profile
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm block mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Md"
                  className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="rimel111@gmail.com"
                  className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-4">
              <label className="text-sm block">Password Changes</label>

              <input
                type="password"
                placeholder="Current Password"
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-6 pt-4">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#df4444] text-white px-8 py-3 rounded active:scale-95 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EditProfile;
