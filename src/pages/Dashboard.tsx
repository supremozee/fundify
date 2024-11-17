import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TbEyeUp } from 'react-icons/tb';
import ProjectCard from '../components/ProjectCard';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const data = {
    labels: ['Government tokens', 'Proposals submitted', 'Vote casts', 'Projects funded'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#1BA098', '#7CD555', '#C62898', '#F6C244'],
        hoverBackgroundColor: ['#1BA098', '#7CD555', '#C62898', '#F6C244'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%', 
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 md:gap-[110px] justify-center items-start p-4 md:p-[96px] bg-gray-50 min-h-screen">
        <section className='flex flex-col md:flex-row w-full items-center justify-center'>
          <div className="relative w-full md:w-1/2 h-40 flex flex-col md:flex-row">
            <div className="space-y-2 md:space-y-6 flex flex-col justify-center text-gray-700 text-sm">
              <div><span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#1BA098]"></span>Government tokens</div>
              <div><span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#7CD555]"></span>Proposals submitted</div>
              <div><span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#C62898]"></span>Vote casts</div>
              <div><span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#F6C244]"></span>Projects funded</div>
            </div>
            <div className='relative'>
              <Doughnut data={data} options={options} />
              <div className="absolute top-10 left-9 flex items-center justify-center">
                <span className="text-lg font-bold">11k<br />Proposals</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-4 md:mt-0 md:ml-8">
            <div className="border rounded-lg p-4 text-center w-full md:w-[506px] h-[247px] bg-white shadow-md">
              <p className="text-[#9E9E9E] text-sm italic flex w-full justify-center items-center">Current balance <span className='ml-1'><TbEyeUp size={10} /></span></p> 
              <div className="flex justify-center mt-[63px] space-x-2">
                <ConnectButton
                  accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "full",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 justify-center gap-4 md:gap-16">
              <Link to={'/create-proposal'} className="bg-[#1E3A8A] text-white py-2 px-4 rounded-md text-[17px]">Submit a proposal</Link>
              <Link to={'/proposals'} className="text-[#1E3A8A] text-[17px]">View active proposals</Link>
            </div>
          </div>
        </section>
        <section className="w-full mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#2D2B2B] font-[400] text-[23px]">Proposals</h2>
            <a href="#" className="text-[#1E3A8A] underline text-[18px] ">View all</a>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
            {proposalsData.map((proposal, index) => (
              <ProjectCard
                key={index}
                title={proposal.title}
                description={proposal.description}
                amount={proposal.amount}
                contributors={proposal.contributors}
                coverImage={proposal.coverImage}
                profileImage={proposal.profileImage}
              />
            ))}
          </div>
        </section>

        <section className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#2D2B2B] font-[400] text-[23px]">Supported proposals</h2>
            <a href="#" className="text-[#1E3A8A] underline text-[18px]  ">View all</a>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
            {proposalsData.slice(0, 3).map((proposal, index) => (
              <ProjectCard
                key={index}
                title={proposal.title}
                description={proposal.description}
                amount={proposal.amount}
                contributors={proposal.contributors}
                coverImage={proposal.coverImage}
                profileImage={proposal.profileImage}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;

const proposalsData = [
  {
    title: 'Elon Musk',
    description: 'The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action...',
    amount: '$2,77,345.00',
    contributors: 5,
    coverImage: '/Elon.png',
    profileImage: '/Elonp.png',
  },
  {
    title: 'Donald J. Trump',
    description: 'The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action...',
    amount: '$1,50,000.00',
    contributors: 3,
    coverImage: '/trump.png',
    profileImage: '/trumpP.png',
  },
  {
    title: 'Kamala D. Harris',
    description: 'The 2024 U.S. elections promise to be pivotal in shaping the future of the nation, influencing policies across economic growth, climate action...',
    amount: '$1,20,000.00',
    contributors: 4,
    coverImage: '/kamala.png',
    profileImage: '/kamalap.png',
  },
];