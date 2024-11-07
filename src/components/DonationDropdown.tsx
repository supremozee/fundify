import ExplorerSVG from "../assets/ExplorerSVG";
import FundifyGrantsSVG from "../assets/FundifyGrantsSVG";
import GranteePortalSVG from "../assets/GranteePortalSVG";
import SupportSVG from "../assets/SupportSVG";

const DonationDropdown = () => {
  return (
    <div className="flex space-x-8 p-8 w-[650px]">
      {/* For Builders Section */}
      <div className="w-1/2">
        <h2 className="text-gray-800 font-bold text-lg mb-4">
          FOR WEB3 EXPLORERS
        </h2>
        <ul className="space-y-4">
          <li className="flex gap-2 justify-center items-start pb-2">
            <FundifyGrantsSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Fundify Grants</h3>
              <p className="text-gray-600 mt-2">
                Donate through our quarterly grants program
              </p>
            </div>
          </li>
          <li className="flex gap-2 justify-center items-start pb-2">
            <ExplorerSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Explorer</h3>
              <p className="text-gray-600 mt-2">
                Discover projects to support through fundify partners
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* More Section */}
      <div className="w-1/2 bg-gray-100 p-4 rounded-md">
        <h2 className="text-gray-800 font-bold text-lg mb-4">MORE</h2>
        <ul className="space-y-4">
          <li className="flex gap-2 justify-center items-start pb-2">
            <SupportSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Support</h3>
              <p className="text-gray-600 mt-2">
                Access our support documentation
              </p>
            </div>
          </li>
          <li className="flex gap-2 justify-center items-start pb-2">
            <GranteePortalSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Donor Portal</h3>
              <p className="text-gray-600 mt-2">
                News and information for Fundify Grants donors
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DonationDropdown;
