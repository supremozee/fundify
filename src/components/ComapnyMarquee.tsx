import Marquee from "react-fast-marquee";

const ComapnyMarquee = () => {
  const companies = [
    "Optimism",
    "Protocol Labs",
    "Uniswap",
    "Vitalik",
    "Ethereum Foundation",
    "Optimism",
    "Protocol Labs",
    "Uniswap",
    "Vitalik",
    "Ethereum Foundation",
  ];

  return (
    <div className="py-4 mt-10 pb-40">
      <Marquee gradient={false} speed={100}>
        {companies.map((company, index) => (
          <span key={index} className="mx-8 text-3xl font-normal">
            {company}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default ComapnyMarquee;
