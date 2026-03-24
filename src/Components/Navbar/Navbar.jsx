import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 z-10 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl text-white font-bold">
            Trip<span className="text-red-500">Nest</span>
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden md:flex items-center gap-7">
            <ul className="flex font-semibold text-white gap-7">
              <Link to="/">
                <li className="curdr-pointer hover:text-red-500">Home</li>
              </Link>

              <Link to="/about">
                <li className="cursor-pointer hover:text-red-500">About Us</li>
              </Link>

              <Link to="/tours">
                <li className="cursor-pointer hover:text-red-500">Tours</li>
              </Link>

              <Link to="/gallery">
                <li className="cursor-pointer hover:text-red-500">Gallery</li>
              </Link>

              <Link to="/contact">
                <li className="cursor-pointer hover:text-red-500">Contact</li>
              </Link>
            </ul>

            <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition">
              Book Now
            </button>
          </nav>
          <HiMenuAlt1
            onClick={toggleMenu}
            className="cursor-pointer md:hidden text-white"
            size={30}
          />
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  );
};

export default Navbar;
