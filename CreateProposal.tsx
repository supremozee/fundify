import React, { useState } from "react";
import { z } from "zod";
import { simulateContract, writeContract, getAccount } from "@wagmi/core";
import { config } from "./src/wagmi";
import { parseEther } from "viem";
// import TopBar from './src/components/TopBar';
import Navbar from "./src/components/Navbar";
import proposalVotingABI from "./ProposalVoting.json";
import TopBar2 from "./src/components/TopBar2";

const proposalSchema = z.object({
  title: z.string().min(1, "Proposal name is required"),
  description: z.string().min(1, "Project description is required"),
  duration: z.string().min(1, "Duration is required"),
  category: z.string().min(1, "Category is required"),
  fundingTarget: z.string().min(1, "Target amount is required"),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

const CreateProposalPage = () => {
  const { connector } = getAccount(config);

  const [formData, setFormData] = useState<ProposalFormData>({
    title: "",
    description: "",
    duration: "",
    category: "",
    fundingTarget: "",
  });

  const [errors, setErrors] = useState<Partial<ProposalFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "fundingTarget" && isNaN(Number(value))) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = proposalSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        title: fieldErrors.title?._errors[0],
        description: fieldErrors.description?._errors[0],
        duration: fieldErrors.duration?._errors[0],
        category: fieldErrors.category?._errors[0],
        fundingTarget: fieldErrors.fundingTarget?._errors[0],
      });
    } else {
      setErrors({});
      try {
        const contractAddress = "0x5C0cB0c0826AD6B4E85eFAd9e1eA8c94fed152DA";

        const category = parseInt(formData.category, 10); // Convert category to integer
        const duration = parseInt(formData.duration, 10); // Convert duration to integer
        const amount = parseEther(formData.fundingTarget);

        const { request } = await simulateContract(config, {
          abi: proposalVotingABI.abi,
          address: contractAddress,
          functionName: "createProposal",
          args: [
            formData.title,
            formData.description,
            duration,
            category,
            amount,
          ],
          connector,
        });

        const hash = await writeContract(config, request);

        console.log("Transaction successful, hash:", hash);

      } catch (error) {
        console.log(
          "Error creating proposal",
          error
        );
        alert(error);
      }
    }
  };

  return (
    <>
      <TopBar2 />
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Create Proposal</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Proposal Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-700"
              >
                Duration (in seconds)
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.duration && (
                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="0">Development</option>
                <option value="1">Research</option>
                <option value="2">Marketing</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="fundingTarget"
                className="block text-sm font-medium text-gray-700"
              >
                Target Amount
              </label>
              <input
                type="text"
                id="fundingTarget"
                name="fundingTarget"
                value={formData.fundingTarget}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.fundingTarget && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fundingTarget}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Create Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProposalPage;