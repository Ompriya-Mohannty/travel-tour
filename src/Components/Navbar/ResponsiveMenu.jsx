import { X } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-between 
      bg-white px-8 pb-6 pt-16 text-black transition-all duration-300 
      md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/* Close Button */}
        <button
          onClick={() => setShowMenu(false)}
          className="border border-black rounded-lg absolute top-4 right-9">
          <X size={20} />
        </button>

        {/* User Section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello user</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl flex flex-col">
            <Link to="/">
              <li className="cursor-pointer hover:text-red-500" onClick={() => setShowMenu(false)}>Home</li>
            </Link>

            <Link to="/about">
              <li className="cursor-pointer hover:text-red-500" onClick={() => setShowMenu(false)}>
                About Us
              </li>
            </Link>

            <Link to="/tours">
              <li className="cursor-pointer hover:text-red-500" onClick={() => setShowMenu(false)}>Tours</li>
            </Link>

            <Link to="/gallery">
              <li className="cursor-pointer hover:text-red-500" onClick={() => setShowMenu(false)}>
                Gallery
              </li>
            </Link>

            <Link to="/contact">
              <li className="cursor-pointer hover:text-red-500" onClick={() => setShowMenu(false)}>
                Contact
              </li>
            </Link>
            <Link to='#'>
             <button onClick={() => setShowMenu(false)} className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold">Book Now</button>
            </Link> 
          </ul>
        </nav>
      </div>
      <div className="">
        <h1>Made with ❤️ by TripNest</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;