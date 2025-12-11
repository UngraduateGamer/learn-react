import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import GamePad from "../assets/GamePad.png";
import Monitor from "../assets/Monitor.png"
const Checkout = () => {
  const [payment, setPayment] = useState("cod");

  return (
    <>
    <Header/>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT – BILLING DETAILS */}
        <div>
          <h2 className="text-xl font-semibold mb-8">Billing Details</h2>

          <form className="space-y-6">
            {[
              "First Name*",
              "Company Name",
              "Street Address*",
              "Apartment, floor, etc. (optional)",
              "Town/City*",
              "Phone Number*",
              "Email Address*",
            ].map((label, i) => (
              <div key={i}>
                <label className="text-sm text-gray-600 block mb-1">
                  {label}
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-100 px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#df4444]"
                />
              </div>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="accent-[#df4444]" id="saveInfo"/>
              <label htmlFor="saveInfo" className="text-sm text-gray-600">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="space-y-6">

          {/* Products */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                <img src={Monitor} alt="" />
              <span>LCD Monitor</span>
                </div>
              <span>$650</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <img src={GamePad} alt="" />
              <span>H1 Gamepad</span>
                </div>
                    
              <span>$1100</span>
            </div>

            <hr />

            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span className="font-medium">Free</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                checked={payment === "bank"}
                onChange={() => setPayment("bank")}
                className="accent-[#df4444]"
                id="Bank"
              />
              <label htmlFor="Bank">Bank</label>

              <div className="flex gap-2 ml-auto">
                <img src="/Visa.png" alt="" className="w-50" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
                className="accent-[#df4444]"
                id="cod"
              />
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>

          {/* Coupon */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border px-4 py-3 rounded outline-none"
            />
            <button className="bg-[#df4444] text-white px-6 rounded active:scale-95">
              Apply Coupon
            </button>
          </div>

          {/* Order Button */}
          <button className="w-48 bg-[#df4444] text-white py-3 rounded active:scale-95">
            Place Order
          </button>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
