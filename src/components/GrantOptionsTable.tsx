const GrantOptionsTable = () => {
  return (
    <div className="py-10 px-4 mx-14">
      <div className="border border-white rounded-sm">
        <div className="border-b mb-8">
          <h2 className="text-white font-semibold tracking-wide p-6">
            ALREADY KNOW WHAT YOU ARE LOOKING FOR?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8">
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Launch grants program</p>
            <button className="border border-blue-900 px-4 py-2 rounded hover:bg-white hover:text-teal-400 transition">
              Learn more
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Get funding for my project</p>
            <button className="border border-blue-900 px-4 py-2 rounded hover:bg-white hover:text-teal-400 transition">
              View grants
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Build on Allo</p>
            <span className="opacity-75">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantOptionsTable;
