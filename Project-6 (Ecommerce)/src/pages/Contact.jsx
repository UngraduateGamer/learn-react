import React, { useState } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [message,setMessage] = useState('');

  function SubmitHandler(event){
    event.preventDefault();
    setEmail('');
    setName('');
    setPhone('');
    setMessage('');
  }
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Info Box */}
        <div className="shadow-md rounded-md p-6 space-y-8">
          
          {/* Call To Us */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#db4444] text-white">
                <FiPhoneCall />
              </div>
              <h3 className="font-semibold">Call To Us</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm font-medium">Phone: +8801611112222</p>
          </div>

          <hr />

          {/* Write To Us */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#db4444] text-white">
                <FiMail />
              </div>
              <h3 className="font-semibold">Write To Us</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2 shadow-md rounded-md p-6">
          <form className="space-y-6" onSubmit={SubmitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#df4444]"
              />
              <input
                type="email"
                placeholder="Your Email *"
                onChange={(event)=>{setEmail(event.target.value)}}
                value={email}
                className="w-full bg-gray-100   px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#df4444]"
              />
              <input
                type="number"
                placeholder="Your Phone *"
                value={phone}
                onChange={(event)=>{setPhone(event.target.value)}}
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#df4444]"
              />
            </div>

            <textarea
              rows="8"
              placeholder="Your Message"
              value={message}
              onChange={(event)=>{setMessage(event.target.value)}}
              className="w-full bg-gray-100 px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#df4444] resize-none"
            ></textarea>

            <div className="text-right">
              <button
                type="submit"
                className="bg-[#db4444] text-white px-8 py-3 rounded hover:bg-[#db1111] active:scale-95 cursor-pointer transition"
              >
                Send Message
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

export default Contact;
