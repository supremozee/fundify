import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import TopBar from '../components/TopBar';

type Proposal = {
  id: string;
  proposalName: string;
  projectDescription: string;
  motivation: string;
  targetAmount: string;
};

const generateDummyProposals = (count: number): Proposal[] => {
  const dummyProposals: Proposal[] = [];
  for (let i = 1; i <= count; i++) {
    dummyProposals.push({
      id: `${i}`,
      proposalName: `Proposal ${i}`,
      projectDescription: `This is a description for proposal ${i}. It is a very detailed description that might be too long to display in full. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      motivation: `Motivation for proposal ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      targetAmount: `${Math.floor(Math.random() * 1000) + 100} ETH`,
    });
  }
  return dummyProposals;
};

const proposals = generateDummyProposals(10);

const ProposalsPage: React.FC = () => {
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});
  const [showVoteModal, setShowVoteModal] = useState<{ [key: string]: boolean }>({});
  const [comment, setComment] = useState<{ [key: string]: string }>({});
  const [voteAmount, setVoteAmount] = useState<{ [key: string]: string }>({});

  const handleShowMore = (id: string) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVoteClick = (id: string) => {
    setShowVoteModal((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCommentChange = (id: string, value: string) => {
    setComment((prev) => ({ ...prev, [id]: value }));
  };

  const handleVoteAmountChange = (id: string, value: string) => {
    setVoteAmount((prev) => ({ ...prev, [id]: value }));
  };

  const handleVoteSubmit = (id: string) => {
    // Handle vote submission
    console.log(`Voted ${voteAmount[id]} on proposal ${id}`);
    setShowVoteModal((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <TopBar />
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Proposals</h1>
        <div className="flex flex-wrap items-center gap-5 justify-center w-full">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="bg-white p-10 rounded-lg shadow-md relative w-[400px] h-auto">
              <h2 className="text-xl font-bold mb-2">{proposal.proposalName}</h2>
              <p className="text-gray-700 mb-2">
                {showMore[proposal.id] ? proposal.projectDescription : `${proposal.projectDescription.slice(0, 100)}...`}
                <button
                  onClick={() => handleShowMore(proposal.id)}
                  className="text-blue-500 ml-2"
                >
                  {showMore[proposal.id] ? 'Show Less' : 'Show More'}
                </button>
              </p>
              <p className="text-gray-700 mb-2">{proposal.motivation}</p>
              <p className="text-gray-700 mb-2">Target Amount: <span className='font-bold text-[32px]'>{proposal.targetAmount}</span></p>
              <div className="flex justify-between items-center">
                <textarea
                  value={comment[proposal.id] || ''}
                  onChange={(e) => handleCommentChange(proposal.id, e.target.value)}
                  placeholder="Add a comment"
                  className="border border-none outline-none rounded-full p-2 w-3/4 mr-4 resize-none"
                  style={{ height: '40px' }}
                />
                <button className=" mr-4">
                  <FaPaperPlane />
                </button>
              </div>

              <button
                  onClick={() => handleVoteClick(proposal.id)}
                  className="bg-blue-500 text-white py-2 px-10 mt-5 rounded-md hover:bg-blue-600"
                >
                  Vote
                </button>
              {showVoteModal[proposal.id] && (
                <div className="absolute top-0 right-0 mt-10 mr-10 bg-white p-4 border border-gray-300 rounded-md shadow-lg">
                  <input
                    type="text"
                    value={voteAmount[proposal.id] || ''}
                    onChange={(e) => handleVoteAmountChange(proposal.id, e.target.value)}
                    placeholder="Enter amount"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                  />
                  <button
                    onClick={() => handleVoteSubmit(proposal.id)}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full"
                  >
                    Proceed to Pay
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProposalsPage;