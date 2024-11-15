import ProjectCard from "../ProjectCard";
import TopBar2 from "../TopBar2";
import ProjectTabs from "./Tab";

const projects = [
  {
    title: "Elon Musk",
    description: "The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action...",
    amount: "$1.53",
    contributors: 5,
    coverImage: "/Elon.png",
    profileImage: "/Elonp.png"
  },
  {
    title: "Donald J. Trump",
    description: "The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action...",
    amount: "$1.53",
    contributors: 5,
    coverImage: "/trump.png",
    profileImage: "/trumpP.png"
  },
  {
    title: "Kamala D. Harris",
    description: "The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action...",
    amount: "$1.53",
    contributors: 5,
    coverImage: "/kamala.png",
    profileImage: "/kamalap.png"
  }
];

const ExplorerSlug = () => {
  return (
    <>
      <TopBar2 />
      <main className=" mx-auto p-[98px] flex justify-center flex-col items-center">
            <section className="my-8">
            <h2 className="text-[32px] font-medium text-[#2D2B2B] w-full">US 2024 Elections - Your Choice, Your Vote - Satire
            <span className=" bg-[#86F0E6] text-black px-2 py-1 rounded-full text-xs ml-2">1 day left</span>
            </h2>
            <div className="w-full flex justify-between">
                  <div className="flex flex-col gap-4">
                    <p className="bg-[#EBEEEC] rounded-[50px] p-1 px-2">Quadratic Funding</p>
                    <p className="flex gap-1">on 
                       <img src="/ellipse.png" alt="ellipse" width={27} height={27}/>
                      Base</p>
                  </div>
                <div className="bg-[#EBEEEC] text-gray-800 p-4 rounded-[14px] text-center text-[25px]">
                  310,000 USDC <br/>
                  <span className="text-[15px]">Matching Pool</span>
                  </div>
            </div>
            <div className="flex items-center mt-2">
            </div>
            <p className="text-sm mt-4 w-full">
            The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, 
            climate action, healthcare, technology, and foreign relations. With high-profile candidates such as former President Donald 
            Trump and current Vice President Kamala Harris capturing the attention of millions, the stakes are exceptionally high. As voters 
            prepare to make informed decisions on leadership, issues, and values, it’s vital that all voices are represented and heard. This 
            project is for entertainment purposes only. Contributors will not receive rewards, incentives, or any tangible benefits from their 
            donations. All donations are purely to support the creation of satirical content for public enjoyment.
            </p>
            </section>
            <div className="bg-[#EBEEEC] w-[577px] p-4 flex flex-col gap-2 rounded-md text-center mt-8 justify-center items-center">
                    <p className="text-[20px] text-[#2D2B2B]">Applications close in 1 day, 7 hours, 26 minutes</p>
                    <button className="bg-[#009688] w-[118px] text-white mt-2 px-3 py-2 text-[17px] rounded-md">Apply now!</button>
            </div>
        <div className="flex justify-between items-center mt-8 w-full">
          <ProjectTabs />
          <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-[60px] py-1 px-4 w-64"
                />
       </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              amount={project.amount}
              contributors={project.contributors}
              coverImage={project.coverImage}
              profileImage={project.profileImage}
            />
          ))}
        </div>
      </main>
    </>

  );
};

export default ExplorerSlug;