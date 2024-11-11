import { ArrowRightCircle } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  projectCount: number;
  fundingAmount: string;
  status: string;
  variant: "elections" | "quantum"; // Instead of theme, we'll use specific variants
};

const ProjectCard = ({ project }: { project: Project }) => {
  const isQuantum = project.variant === "quantum";

  return (
    <div
      className={`${
        isQuantum ? "bg-gray-800" : "bg-white"
      } rounded-xl shadow-sm p-4 flex flex-col h-full`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3
          className={`text-sm font-medium ${
            isQuantum ? "text-white" : "text-gray-900"
          } leading-tight flex-1 pr-2`}
        >
          {project.title}
        </h3>
        <button className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
          Apply!
        </button>
      </div>

      {/* Description */}
      <p
        className={`text-xs ${
          isQuantum ? "text-gray-300" : "text-gray-600"
        } mb-4 flex-1 line-clamp-2`}
      >
        {project.description}
      </p>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-teal-100 text-teal-700 inline-block px-3 py-1 rounded-full text-xs font-medium mb-3">
          {project.status}
        </div>

        <div
          className={`flex justify-between items-center text-xs ${
            isQuantum ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <div className="flex items-center space-x-2">
            <span>{project.projectCount} Projects</span>
            <span>•</span>
            <span>{project.fundingAmount} USDC match</span>
          </div>
          <ArrowRightCircle
            className={`w-4 h-4 ${
              isQuantum ? "text-gray-300" : "text-gray-600"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const ExplorerHomeTab = ({ projects }: { projects: Project[] }) => {
  // Group projects into pairs
  const pairs = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center mx-28 mb-8">
        <h1 className="text-xl font-medium">Donate Now</h1>
        <button className="text-sm">View All</button>
      </div>
      <div className="max-w-7xl mx-auto space-y-4">
        {pairs.map((pair, pairIndex) => (
          <div key={pairIndex} className="grid grid-cols-12 gap-4">
            {pair.map((project, index) => (
              <div
                key={project.id}
                className={`
                  col-span-12 sm:col-span-6
                  ${
                    pairIndex % 2 === 0
                      ? index === 0
                        ? "md:col-span-7"
                        : "md:col-span-5"
                      : index === 0
                      ? "md:col-span-5"
                      : "md:col-span-7"
                  }
                `}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorerHomeTab;
