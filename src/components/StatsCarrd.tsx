import InformationSVG from "../assets/InformationSVG";

const StatsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm h-[492px] w-[361px]">
      <div className="flex items-center space-x-2 mb-6 mt-4">
        <div className="p-2 rounded-lg">
          <InformationSVG />
        </div>
        <h2 className="text-xl font-semibold text-gray-700">
          By the numbers...
        </h2>
      </div>

      <div className="space-y-8 mt-12">
        <div className="flex items-start space-x-3">
          <div>
            <div className="text-4xl mb-2 font-bold text-gray-900">2.5M</div>
            <div className="text-md text-gray-500 uppercase tracking-wide">
              Unique donations
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div>
            <div className="text-4xl mb-2 font-bold text-gray-900">3,453</div>
            <div className="text-md text-gray-500 uppercase tracking-wide">
              Projects raised funds
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div>
            <div className="text-4xl mb-2 font-bold text-gray-900">
              $2,000,000+
            </div>
            <div className="text-md text-gray-500 uppercase tracking-wide">
              In funding distributed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
