import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GraphQLClient } from "graphql-request";
import { simulateContract, writeContract, getAccount } from "@wagmi/core";
import { parseEther } from "viem";
import { config } from "../wagmi";
import ProposalVotingData from "../../ProposalVoting.json";
import FundingContractData from "../../Funding.json";
import TopBar2 from "../components/TopBar2";
import Web3 from "web3";
import { Link } from "react-router-dom";

type Proposal = {
  proposalId: number;
  title: string;
  description: string;
  fundingTarget: string;
  deadline: string;
};

const PROPOSAL_API =
  "https://api.goldsky.com/api/public/project_cm3ehlxvonxe401vu7z005jl4/subgraphs/proposal-voting/1.0/gn";

const client = new GraphQLClient(PROPOSAL_API);

const query = `
  query GetProposals {
    proposalCreateds(first: 10) {
      title
      description
      proposalId
      id
      fundingTarget
      deadline
    }
  }
`;

const ProposalsPage: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});
  const [showFundModal, setShowFundModal] = useState<{ [key: string]: boolean }>({});
  const [comment, setComment] = useState<{ [key: string]: string }>({});
  const [fundAmount, setFundAmount] = useState<{ [key: string]: string }>({});
  const { connector } = getAccount(config);
  // const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    client
      .request(query)
      .then((data) => {
        type ProposalCreated = {
          proposalId: string;
          title: string;
          description: string;
          fundingTarget: string;
          deadline: string;
        };

        const fetchedProposals = (data as { proposalCreateds: ProposalCreated[] }).proposalCreateds.map((proposal: ProposalCreated) => ({
          proposalId: parseInt(proposal.proposalId, 10),
          title: proposal.title,
          description: proposal.description,
          fundingTarget: proposal.fundingTarget,
          deadline: proposal.deadline,
        }));
        setProposals(fetchedProposals);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleShowMore = (proposalId: number) => {
    setShowMore((prev) => ({ ...prev, [proposalId]: !prev[proposalId] }));
  };

  const handleFundBtnClick = (proposalId: number) => {
    setShowFundModal((prev) => ({ ...prev, [proposalId]: !prev[proposalId] }));
  };

  const handleCommentChange = (proposalId: number, value: string) => {
    setComment((prev) => ({ ...prev, [proposalId]: value }));
  };

  const handleFundAmountChange = (proposalId: number, value: string) => {
    setFundAmount((prev) => ({ ...prev, [proposalId]: value }));
  };

  const handleFundSubmit = (proposalId: number) => {
    console.log(`Funded ${fundAmount[proposalId]} on proposal ${proposalId}`);
    fundProposal(proposalId, fundAmount[proposalId]);
    setShowFundModal((prev) => ({ ...prev, [proposalId]: false }));
  };

  const voteOnProposal = async (proposalId: number) => {
    const proposalVotingCA = "0x5C0cB0c0826AD6B4E85eFAd9e1eA8c94fed152DA";

    try {
      const { request } = await simulateContract(config, {
        abi: ProposalVotingData.abi,
        address: proposalVotingCA,
        functionName: "voteOnProposal",
        args: [proposalId],
        connector,
      });

      const hash = await writeContract(config, request);

      console.log("Proposal Voting successful, hash:", hash);
      alert("You have successfully voted on the proposal.");
    } catch (error) {
      console.error("Error voting on proposal:", error);
      alert("You do not have enough tokens to vote on this proposal.");
    }
  };

  const fundProposal = async (proposalId: number, value: string) => {
    const fundingCA = "0x46475389Db0b2CdC1bf3cd6631e896594aaeCe4e";

    try {
      const { request } = await simulateContract(config, {
        abi: FundingContractData.abi,
        address: fundingCA,
        functionName: "fundProposal",
        args: [proposalId],
        value: parseEther(value),
        connector,
      });

      const hash = await writeContract(config, request);

      alert(`Proposal funded successfully, hash: ${hash}`);
    } catch (error) {
      console.error("Error funding proposal:", error);
      alert("There was an error funding the proposal.");
    }
  };

  return (
    <>
      <TopBar2 />
      <div className="min-h-screen p-6 bg-gray-100 flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-6">Proposals</h1>
        <Link to="/create-proposal" className="bg-blue-900  text-white px-6 py-2 w-40 shadow-md rounded-sm">
        Create Proposal
        </Link>
        <div className="flex flex-wrap items-center gap-5 justify-center w-full">
          {proposals.map((proposal) => (
            <div
              key={proposal.proposalId}
              className="bg-white p-10 rounded-lg shadow-md relative w-[400px] h-auto"
            >
              <h2 className="text-xl font-bold mb-2">
                {proposal.title}
              </h2>
              <p className="text-gray-700 mb-2">
                {showMore[proposal.proposalId]
                  ? proposal.description
                  : `${proposal.description.slice(0, 100)}...`}
                <button
                  onClick={() => handleShowMore(proposal.proposalId)}
                  className="text-blue-500 ml-2"
                >
                  {showMore[proposal.proposalId] ? "Show Less" : "Show More"}
                </button>
              </p>
              <p className="text-gray-700 mb-2">
                Target Amount:{" "}
                <span className="font-bold text-[32px]">
                  {Web3.utils.fromWei(proposal.fundingTarget, 'ether')} ETH
                </span>
              </p>
              <div className="flex justify-between items-center">
                <textarea
                  value={comment[proposal.proposalId] || ""}
                  onChange={(e) =>
                    handleCommentChange(proposal.proposalId, e.target.value)
                  }
                  placeholder="Add a comment"
                  className="border border-none outline-none rounded-full p-2 w-3/4 mr-4 resize-none"
                  style={{ height: "40px" }}
                />
                <button className=" mr-4">
                  <FaPaperPlane />
                </button>
              </div>

              <button
                onClick={() => voteOnProposal(proposal.proposalId)}
                className="bg-gray-900 text-white py-2 px-10 mt-5 rounded-md hover:bg-blue-600"
              >
                Vote
              </button>
              <button
                onClick={() => handleFundBtnClick(proposal.proposalId)}
                className="bg-red-500 text-white py-2 px-10 mt-5 ml-5 rounded-md hover:bg-blue-600"
              >
                Fund
              </button>
              {showFundModal[proposal.proposalId] && (
                <div className="absolute top-0 right-0 mt-10 mr-10 bg-white p-4 border border-gray-300 rounded-md shadow-lg">
                  <input
                    type="text"
                    value={fundAmount[proposal.proposalId] || ""}
                    onChange={(e) =>
                      handleFundAmountChange(
                        proposal.proposalId,
                        e.target.value
                      )
                    }
                    placeholder="Enter amount in ETH"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                  />
                  <button
                    onClick={() => handleFundSubmit(proposal.proposalId)}
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