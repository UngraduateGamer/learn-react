import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Tags from '../components/Tags';
import Img1 from  "../assets/AboutImg1.png"
import Img2 from  "../assets/AboutImg2.png"
import Img3 from  "../assets/AboutImg3.png"
import Img4 from  "../assets/AboutImg4.png"
import { GrHome } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiCash } from "react-icons/gi";


const AboutPage = () => {
  const stats = [
    { value: '10.5k', label: 'Orders complete this year' ,logo:<GrHome/>},
    { value: '33k', label: 'Monthly products sold',logo:<BiDollarCircle/> },
    { value: '45.5k', label: 'Customers satisfied in our site' ,logo:<FaUsers/>},
    { value: '25k', label: 'Annual gross sale in our site',logo:<GiCash/> },
  ];

  const team = [
    { name: 'Tom Cruise', role: 'Founder & Chairman', img: Img2 },
    { name: 'Emma Watson', role: 'Managing Director', img: Img3 },
    { name: 'Will Smith', role: 'Product Designer', img: Img4 },
  ];

  return (
    <div>
      <Header/>
      <Navbar/>

    <div className="min-h-screen bg-white font-sans">
      {/* Hero / Our Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-700 mb-6">
            Founded in 2015, Exclusive is South Africa's premier online shopping destination for fashion, lifestyle & household products. 
            We aim to provide our customers with a wide selection of products at great value. 
            Exclusive brings items from top brands and emerging designers to your doorstep, ensuring a seamless shopping experience.
          </p>
          <p className="text-gray-700">
            Exclusive has more than 10 million products to offer, spanning a very large range of categories from electronics to fashion.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={Img1} alt="Our Story" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg shadow-md flex items-center justify-center  gap-1 flex-col bg-gray-100 hover:text-white hover:bg-[#db4444] group`}
          >
            <div className="circle bg-[#00000030] rounded-full flex items-center  justify-center h-20 w-20"
            >
             <span className='text-white text-3xl block group-hover:text-black group-hover:bg-white bg-black !h-15 !w-15 rounded-full flex items-center justify-center'>{stat.logo} 
              </span>
            </div>
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-[370px] h-[430px] object-cover object-top mx-auto bg-[#F5F5F5]  mb-4"
              />
              <h3 className="font-semibold text-xl">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center gap-4 mt-2 text-gray-500">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Features */}
    <Tags/>

      {/* Footer */}
      <Footer/>
    </div>
    </div>
  );
};

export default AboutPage;
