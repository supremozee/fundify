const FeaturesSection = () => {
  return (
    <div className="mx-16 py-6 mb-8">
      <h1 className="text-4xl font-semibold text-white pb-10 flex flex-col gap-2">
        <span>Solutions we're building to support</span>
        <span>digital communities</span>
      </h1>
      <div className="grid grid-cols-3 gap-20">
        <div className="bg-[#F8ECE2] px-6 w-[395px]">
          <h4 className="py-6">FUNDIFY GRANTS</h4>
          <div className="text-xl py-4 flex flex-col">
            <span> Get funding & grow</span>
            <span>your community</span>
          </div>
          <p className="text-md py-2">
            Participate in our quarterly grants program for open-source &
            impact- oriented projects.
          </p>
          <button className="px-4 py-2 mb-10 mt-4 border border-blue-900">
            View Grants
          </button>
        </div>
        <div className="bg-[#E0F2F0] px-6 w-[395px]">
          <h4 className="py-6">FUNDIFY GRANTS</h4>
          <div className="text-xl py-4 flex flex-col">
            <span> Launch & grow</span>
            <span>your grants program</span>
          </div>
          <p className="text-md py-2">
            Participate in our quarterly grants program for open-source &
            impact- oriented projects.
          </p>
          <button className="px-4 py-2 mb-10 mt-4 border border-blue-900">
            Learn More
          </button>
        </div>
        <div className="bg-[#E8EEC8] px-6 w-[395px]">
          <h4 className="py-6">FUNDIFY GRANTS</h4>
          <div className="text-xl py-4 flex flex-col">
            <span> Manage & allocate</span>
            <span>community funds</span>
          </div>
          <p className="text-md py-2">
            Participate in our quarterly grants program for open-source &
            impact- oriented projects.
          </p>
          <button className="px-4 py-2 mb-10 mt-4 border border-blue-900">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
