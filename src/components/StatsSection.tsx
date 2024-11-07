const StatsSection = () => {
  return (
    <div className="text-black font-sans mx-16 mt-4">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-4 grid-rows-3 h-96">
          {/* Main Text */}
          <div className="col-span-2 row-span-2 p-6 border border-white">
            <h2 className="text-xs font-semibold">OUR IMPACT</h2>
            <h1 className="text-3xl font-bold my-2">Fundify by the numbers</h1>
            <p>
              Over the past 2 years we’ve supported the funding of public goods,
              enabling communities to fund their shared needs
            </p>
          </div>

          {/* Unique Donations */}
          <div className="col-span-2 p-6 border border-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold">1.2M</h1>
              <p className="text-sm font-medium">UNIQUE DONATIONS</p>
            </div>
          </div>

          {/* Projects Raised Funds */}
          <div className="p-6 border border-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold">4546</h1>
              <p className="text-sm font-medium">PROJECTS RAISED FUNDS</p>
            </div>
          </div>

          {/* Funding Distributed */}
          <div className="p-6 border border-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold">$64.7M</h1>
              <p className="text-sm font-medium">FUNDING DISTRIBUTED</p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="p-6 border border-white flex items-center justify-center">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
