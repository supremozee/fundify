import { ChevronDown } from "lucide-react";
import GetFundingDropdown from "./GetFundingDropdown";
import DonationDropdown from "./DonationDropdown";
import AboutDropDown from "./AboutDropDown";

const Navbar = () => {
  return (
    <nav className="mx-14 p-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-8">
          <div className="text-2xl font-bold gradient-text">FUNDIFY</div>
          <ul className="flex space-x-8">
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
          </ul>
        </div>

        <ul className="flex space-x-8">
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
