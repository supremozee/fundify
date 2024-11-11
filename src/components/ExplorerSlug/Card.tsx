import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  amount: string;
  contributors: number;
  coverImage: string;
  profileImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, amount, contributors, coverImage, profileImage }) => {
  return (
    <div className="border rounded-[20px] h-[456px] max-w-[319px] relative">
      <img src={coverImage} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      <img src={profileImage} alt={`${title} profile`} className="w-[49px] h-[49px] rounded-full border-2 border-white absolute top-28 left-4" />
      <div className="p-4 mt-8">
        <h3 className="text-[20px] font-medium">{title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <hr className='text-[#CFCDCD] mt-20'/>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-semibold">{amount}</span>
        </div>
        <div className='flex w-full justify-between items-center'>
          <p className="text-sm text-gray-500">{contributors} total raised by 5 contributors</p>
          <img src='/cart.png' width={44} height={44} className='bg-cover object-cover'/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;