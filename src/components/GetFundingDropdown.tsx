import BuilderSVG from "../assets/BuilderSVG";
import ExplorerSVG from "../assets/ExplorerSVG";
import FundifyGrantsSVG from "../assets/FundifyGrantsSVG";
import GranteePortalSVG from "../assets/GranteePortalSVG";
import GranteeShowcaseSVG from "../assets/GranteeShowcaseSVG";
import SupportSVG from "../assets/SupportSVG";

const GetFundingDropdown = () => {
  return (
    <div className="flex space-x-8 p-8 w-[650px]">
      {/* For Builders Section */}
      <div className="w-1/2">
        <h2 className="text-gray-800 font-bold text-lg mb-4">FOR BUILDERS</h2>
        <ul className="space-y-4">
          <li className="flex gap-2 justify-center items-start pb-2">
            <BuilderSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Builder</h3>
              <p className="text-gray-600 mt-2">
                Create a builder profile to apply for funding
              </p>
            </div>
          </li>
          <li className="flex gap-2 justify-center items-start pb-2">
            <ExplorerSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Explorer</h3>
              <p className="text-gray-600 mt-2">
                Discover grants available from our part partners
              </p>
            </div>
          </li>
          <li className="flex gap-2 justify-center items-start">
            <FundifyGrantsSVG />
            <div>
              <h3 className="text-gray-800 font-medium">FUNDIFY Grants</h3>
              <p className="text-gray-600 mt-2">
                Learn more about our quarterly grants program
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
              <h3 className="text-gray-800 font-medium">Grantee Portal</h3>
              <p className="text-gray-600 mt-2">
                News and information for Fundify Grants applicants
              </p>
            </div>
          </li>
          <li className="flex gap-2 justify-center items-start">
            <GranteeShowcaseSVG />
            <div>
              <h3 className="text-gray-800 font-medium">Grantee Showcase</h3>
              <p className="text-gray-600 mt-2">
                Read success stories from other Builders
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetFundingDropdown;
