import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#323030] text-gray-200 py-8 px-4">
      <div className="mx-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Fundify Logo */}
          <div className="md:col-span-1">
            <h1 className="text-xl font-bold">FUNDIFY</h1>
          </div>

          {/* Community Links */}
          <div className="md:col-span-1">
            <h2 className="text-sm font-semibold mb-4">COMMUNITY</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Community Initiatives
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="hover:underline">
                  Governance Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Merch Store
                </a>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div className="md:col-span-1">
            <h2 className="text-sm font-semibold mb-4">LEARN</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="hover:underline">
                  Manager Toolkit
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="md:col-span-1">
            <h2 className="text-sm font-semibold mb-4">MORE</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Impact Report
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="hover:underline">
                  Brand Assets
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Section */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            <h2 className="text-sm font-semibold">FOLLOW</h2>
            <div className="flex space-x-3">
              <AiOutlineTwitter className="w-6 h-6 hover:text-gray-400" />
              <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
              <FaDiscord className="w-6 h-6 hover:text-gray-400" />
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Get Updates
            </button>
          </div>
        </div>

        {/* Terms of Use and Privacy Policy */}
        <div className="container mx-auto mt-8 text-center text-sm text-gray-400">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
