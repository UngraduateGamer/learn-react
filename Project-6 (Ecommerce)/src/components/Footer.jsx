import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12  -bottom-100 left-0 w-full">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Subscribe Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
          <p className="font-medium">Subscribe</p>
          <p className="text-sm mt-2 text-gray-300">Get 10% off your first order</p>

          <div className="mt-4 flex items-center border border-gray-500 rounded px-2 py-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm flex-1"
            />
            <button className="text-white">{">"}</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-sm mt-2">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li> <NavLink  to="/account">My Account</NavLink> </li> 
            <li> <NavLink to="/898">  Login / Register </NavLink></li>
            <li> <NavLink to="/cart" >Cart</NavLink> </li>
            <li><NavLink to="/wish" >Wishlist</NavLink></li>
            <li><NavLink to="/shop" >Shop</NavLink></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/nothing">Privacy Policy</NavLink></li>
            <li><NavLink to="/nothing2">Terms Of Use</NavLink></li>
            <li><NavLink to="/nothing23">FAQ</NavLink></li>
            <li><NavLink to="/nothing4">Contact</NavLink></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold mb-4">Download App</h3>
          <p className="text-gray-300 text-sm">Save $3 with App New User Only</p>

          <div className="flex items-center gap-3 mt-4">
            <img
              src="/assets/qr.png"
              className="w-20 h-20"
              alt="QR Code"
            />
            <div className="flex flex-col gap-2">
              <img src="/assets/google.png" className="w-28" alt="Google Play" />
              <img src="/assets/appstore.png" className="w-28" alt="App Store" />
            </div>
          </div>

          <div className="flex gap-4 mt-6 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        &copy; Copyright Exculsive 2025. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
