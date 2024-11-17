import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import GetFundingDropdown from "./GetFundingDropdown";
import DonationDropdown from "./DonationDropdown";
import AboutDropDown from "./AboutDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md">
      <div className="flex justify-between items-center mx-4 md:mx-14">
        <Link to={'/'} className="text-2xl font-bold gradient-text">FUNDIFY</Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:space-x-8 w-full items-end md:items-start ${isMenuOpen ? 'flex' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto `}>
          <li className="relative group">
            <button className="hover:text-gray-200 flex justify-center items-center gap-1">
              Get Funding <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md">
              <GetFundingDropdown />
            </div>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-200 flex justify-center items-center gap-1">
              Donate <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md">
              <DonationDropdown />
            </div>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-200 flex justify-center items-center gap-1">
              About <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md">
              <AboutDropDown />
            </div>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-200 flex justify-center items-center gap-1">
              Community <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md">
              <ul className="w-48">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#about-1">Our Story</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#about-2">Team</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-200 flex justify-center items-center gap-1">
              Resources <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md">
              <ul className="w-48">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#services-1">Consulting</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#services-2">Development</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;