import { useState } from "react";
import StatsCard from "../components/StatsCarrd";
import ExplorerHomeTab from "../components/ExplorerHomeTab";
import TopBar2 from "../components/TopBar2";

type Project = {
  id: string;
  title: string;
  description: string;
  projectCount: number;
  fundingAmount: string;
  status: string;
  variant: "elections" | "quantum"; 
};

const ExplorerPage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const tabs = [
    { id: "home", label: "Home" },
    { id: "rounds", label: "Explore rounds" },
    { id: "projects", label: "Explore projects" },
  ];

  // Mock data with alternating themes
  const mockProjects: Project[] = [
    {
      id: "1",
      title: "US 2024 Elections - Your Choice, Your Vote - Satire",
      description:
        "The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action, healthcare, technology, and foreign relations.",
      projectCount: 3,
      fundingAmount: "215,988 USDC",
      status: "Quadratic Funding",
      variant: "elections",
      
    },
    {
      id: "2",
      title: "FG24 Quantumstake on SuperCollider",
      description:
        "Quantumstake Revolutionary staking in the Crypto Future! Quantumstake is a cutting-edge platform designed to revolutionize the staking experience for...",
      projectCount: 1,
      fundingAmount: "380,000 USDC",
      status: "Quadratic Funding",
      variant: "quantum",
    },
    {
      id: "3",
      title: "FG24 Quantumstake on SuperCollider",
      description:
        "Quantumstake Revolutionary staking in the Crypto Future! Quantumstake is a cutting-edge platform designed to revolutionize the staking experience for...",
      projectCount: 1,
      fundingAmount: "380,000 USDC",
      status: "Quadratic Funding",
      variant: "quantum",
    },
    {
      id: "4",
      title: "US 2024 Elections - Your Choice, Your Vote - Satire",
      description:
        "The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action, healthcare, technology, and foreign relations.",
      projectCount: 3,
      fundingAmount: "215,988 USDC",
      status: "Quadratic Funding",
      variant: "elections",
    },
    {
      id: "5",
      title: "US 2024 Elections - Your Choice, Your Vote - Satire",
      description:
        "The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action, healthcare, technology, and foreign relations.",
      projectCount: 3,
      fundingAmount: "215,988 USDC",
      status: "Quadratic Funding",
      variant: "elections",
    },
    {
      id: "6",
      title: "FG24 Quantumstake on SuperCollider",
      description:
        "Quantumstake Revolutionary staking in the Crypto Future! Quantumstake is a cutting-edge platform designed to revolutionize the staking experience for...",
      projectCount: 1,
      fundingAmount: "380,000 USDC",
      status: "Quadratic Funding",
      variant: "quantum",
    },
  ];

  return (
    <div className="bg-teal-300">
      <TopBar2 />
      <div className="mx-16 flex justify-between items-center py-10">
        <StatsCard />
        <div className="p-6">
          <p className="text-8xl text-white">Fund What Matters</p>
          <p className="text-8xl text-black">Fund What Matters</p>
          <p className="text-8xl text-gray-500">Fund What Matters</p>
        </div>
      </div>
      <div className=" mx-16 p-2">
        <nav className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 text-lg font-normal rounded-t-lg transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-white border-b-4 border-green-500 text-gray-900"
                    : "bg-transparent text-gray-700 hover:bg-white/50"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="border-b-4 border-white -mt-1 flex" />
      </div>
      {activeTab === "home" && <ExplorerHomeTab projects={mockProjects}  />}
    </div>
  );
};

export default ExplorerPage;
