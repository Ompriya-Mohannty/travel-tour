import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footer from "../assets/Footer.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-10"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h1 className="font-bold text-4xl mb-4">
              <span className="text-red-500">Trip</span>Nest
            </h1>
            <p className="text-gray-400 text-sm">
              Explore the beauty of the world with carefully planned tours and
              unique travel experiences. Your next unforgettable adventure
              starts with us.
            </p>
          </div>

          <div className="flex flex-col lg:items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Tours</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Travel Street, City, Country</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Email: info@tripnest.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <FaFacebook className="cursor-pointer hover:text-blue-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TripNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
