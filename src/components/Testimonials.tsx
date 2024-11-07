import Vitalik from "../assets/vitalik.png";
import Hishamaru from "../assets/hishamaru.png";

const Testimonials = () => {
  return (
    <div className="mx-16 mt-6 pb-6">
      <div className="border mx-4">
        <div className="grid grid-cols-3">
          <div className="flex flex-col px-4 py-10 text-2xl border-r">
            <span>What the</span>
            <span>community says</span>
            <span>about us</span>
          </div>
          <div className="border-r">
            <div className="border-b flex justify-start items-center">
              <img
                src={Vitalik}
                alt="Vitalik Buterin"
                className="h-[86px] w-[94px] rounded-md"
              />
              <div className="p-4">
                <h1 className="text-lg">VITALIK BUTERIN</h1>
                <p className="text-xs">Founder of Ethereum</p>
              </div>
            </div>
            <p className="p-6">
              Fundify grants quadratic funding is not just for funds allocation,
              it's also a great signaling tool! For the last few rounds, the
              Fundify Grants Program has led me to discover a lot of really cool
              Ethereum projects I previously did not know about.
            </p>
          </div>
          <div className="border-r">
            <div className="border-b flex justify-start items-center">
              <img
                src={Hishamaru}
                alt="HISHAMARU KONKON"
                className="h-[86px] w-[94px] rounded-md"
              />
              <div className="p-4">
                <h1 className="text-lg">HISHAMARU KONKON</h1>
                <p className="text-xs">Developer</p>
              </div>
            </div>
            <p className="p-6">
              Fundify grants quadratic funding is not just for funds allocation,
              it's also a great signaling tool! For the last few rounds, the
              Fundify Grants Program has led me to discover a lot of really cool
              Ethereum projects I previously did not know about.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
