import { MoveRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-14">
      <div className="font-bold text-lg">
        FG24{" "}
        <span className="ml-6 text-sm font-normal">Donations Now Open!</span>
      </div>
      <div className="font-bold">
        <a
          href="/proposals"
          className="hover:underline flex justify-center items-center gap-1"
        >
          Explore <MoveRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
