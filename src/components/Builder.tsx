const BuilderPage = () => {
  return (
    <div className="flex h-screen pl-[96px] pt-[98px]">
      <div className="w-[572px] gap-3 flex flex-col justify-center text-[#2D2B2B] items-start p-10">
        <h1 className="text-4xl font-bold">FUNDIFY</h1>
        <h2 className="text-3xl font-light">Builder</h2>
        <p className="text-[20px] font-medium">
          Build and fund your project all in one place, and bring your vision to life.
        </p>
        <button className="px-6 py-3 bg-[#1E3A8A] hover:bg-blue-700 rounded-md text-white font-semibold">
          Connect wallet
        </button>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          src="/builder.png"
          alt="Hands holding the globe"
          className="w-[689px] h-[482px] object-cover bg-cover "
        />
      </div>
    </div>
  );
};

export default BuilderPage;
