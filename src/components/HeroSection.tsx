const HeroSection = () => {
  return (
    <div className="h-[84vh] flex mx-16">
      <div className="w-1/2 flex flex-col justify-center items-center gap-1">
        <h1 className="text-4xl ml-40">
          <span className="text-white">{"}"}</span> FG24
        </h1>
        <p className="text-4xl text-center">Discover & Fund</p>
        <p className="text-4xl text-center">the future</p>
        <p className="text-4xl text-center">Builders</p>
      </div>
      <div className="w-1/2 flex justify-center items-center px-16">
        <div className="flex">
          <div className="text-4xl">{"}"}</div>
          <div className="ml-4">
            <p className="w-[418px] text-[20px] leading-normal">
              Fundify Grants 24 is live! Explore rounds across our Open Source
              Software Program and rounds from our Community
            </p>
            <div className="flex justify-around items-center mt-4">
              <button className="bg-blue-900 text-white px-6 py-2 shadow-md rounded-sm">
                Donate
              </button>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
