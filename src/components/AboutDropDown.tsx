import FundifyGrantsSVGV2 from "../assets/FundifyGrantsSVGV2";

const AboutDropDown = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 space-y-4 bg-gray-100 rounded-lg shadow-md p-6 w-[280px]">
      <ul className="space-y-4 w-full">
        <li className="flex gap-2 pb-2">
          <div className="mt-[1px]">
            <FundifyGrantsSVGV2 />
          </div>
          <div>
            <h3 className="text-gray-800 font-medium">Our Story</h3>
            <p className="text-gray-600 mt-2">Learn about FUNDIFY</p>
          </div>
        </li>
        <li className="flex gap-2 pb-2">
          <div className="mt-[1px]">
            <FundifyGrantsSVGV2 />
          </div>
          <div>
            <h3 className="text-gray-800 font-medium">Impact</h3>
            <p className="text-gray-600 mt-2">Read about our impact</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutDropDown;
