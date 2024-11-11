const features = [
  {
    title: "FUNDIFY GRANTS",
    bgColor: "#F8ECE2",
    lines: ["Get funding & grow", "your community"],
    description: "Participate in our quarterly grants program for open-source & impact-oriented projects.",
    buttonText: "View Grants"
  },
  {
    title: "FUNDIFY GRANTS",
    bgColor: "#E0F2F0",
    lines: ["Launch & grow", "your grants program"],
    description: "Participate in our quarterly grants program for open-source & impact-oriented projects.",
    buttonText: "Learn More"
  },
  {
    title: "FUNDIFY GRANTS",
    bgColor: "#E8EEC8",
    lines: ["Manage & allocate", "community funds"],
    description: "Participate in our quarterly grants program for open-source & impact-oriented projects.",
    buttonText: "Learn More"
  }
];

const FeaturesSection = () => {
  return (
    <div className="mx-16 py-6 mb-8">
      <h1 className="text-4xl font-[400] text-white pb-10 flex flex-col gap-2">
        <span>Solutions we're building to support</span>
        <span>digital communities</span>
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {features.map((feature, index) => (
          <div key={index} className="px-6 w-[395px]" style={{ backgroundColor: feature.bgColor }}>
            <h4 className="py-6">{feature.title}</h4>
            <div className="text-xl py-4 flex flex-col">
              {feature.lines.map((line, idx) => (
                <span key={idx}>{line}</span>
              ))}
            </div>
            <p className="text-md py-2">
              {feature.description}
            </p>
            <button className="px-4 py-2 mb-10 mt-4 border border-blue-900">
              {feature.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;