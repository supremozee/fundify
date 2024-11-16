import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { z } from 'zod';
import { FaCaretDown } from 'react-icons/fa';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import TopBar from './src/components/TopBar';
import Navbar from './src/components/Navbar';
import proposalVotingABI from './proposalVoting.json'; 

const CREATE_PROPOSAL_MUTATION = gql`
  mutation CreateProposal($input: CreateProposalInput!) {
    createProposal(input: $input) {
      id
      proposalName
      projectDescription
      motivation
      targetAmount
    }
  }
`;

const proposalSchema = z.object({
  proposalName: z.string().min(1, 'Proposal name is required'),
  projectDescription: z.string().min(1, 'Project description is required'),
  motivation: z.string().min(1, 'Motivation/Problem statement is required'),
  targetAmount: z.string().min(1, 'Target amount is required'),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

const CreateProposalPage = () => {
  const [formData, setFormData] = useState<ProposalFormData>({
    proposalName: '',
    projectDescription: '',
    motivation: '',
    targetAmount: '',
  });

  const [errors, setErrors] = useState<Partial<ProposalFormData>>({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [createProposal] = useMutation(CREATE_PROPOSAL_MUTATION);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAmountSelect = (amount: string) => {
    setFormData({ ...formData, targetAmount: amount });
    setShowDropdown(false);
  };

  const parseUnits = (value: string, decimals: number = 18) => {
    return ethers.parseUnits(value, decimals);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = proposalSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        proposalName: fieldErrors.proposalName?._errors[0],
        projectDescription: fieldErrors.projectDescription?._errors[0],
        motivation: fieldErrors.motivation?._errors[0],
        targetAmount: fieldErrors.targetAmount?._errors[0],
      });
    } else {
      setErrors({});
      try {
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = '0x5C0cB0c0826AD6B4E85eFAd9e1eA8c94fed152DA';
        const contract = new ethers.Contract(contractAddress, proposalVotingABI.abi, signer as unknown as ethers.ContractRunner);

        // Define category and duration
        const category = 0; // Replace with the appropriate category value
        const duration = 604800; // Example duration in seconds (1 week)

        // Remove the currency symbol and parse the amount
        const amount = formData.targetAmount;
        const tx = await contract.createProposal(
          formData.proposalName,
          formData.projectDescription,
          formData.motivation,
          duration,
          category,
          parseUnits(amount, 18)
        );
        await tx.wait();
        console.log('Transaction successful:', tx);

        // Optionally, submit the proposal to the GraphQL API
        const response = await createProposal({
          variables: {
            input: formData,
          },
        });
        console.log('Form submitted:', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Create Proposal</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="proposalName" className="block text-sm font-medium text-gray-700">
                Proposal Name
              </label>
              <input
                type="text"
                id="proposalName"
                name="proposalName"
                value={formData.proposalName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.proposalName && <p className="text-red-500 text-sm mt-1">{errors.proposalName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.projectDescription && <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                Motivation/Problem Statement
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">
                Target Amount
              </label>
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md flex justify-between items-center"
              >
                {formData.targetAmount || 'Select Amount'}
                <FaCaretDown />
              </button>
              {showDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  {['100', '500', '1000'].map((amount) => (
                    <div
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {amount}
                    </div>
                  ))}
                </div>
              )}
              {errors.targetAmount && <p className="text-red-500 text-sm mt-1">{errors.targetAmount}</p>}
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProposalPage;