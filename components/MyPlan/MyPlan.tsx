"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import EmptyState from "./emptyState";

const MyPlan = () => {
  const [isTabOpen, setIsTabOpen] = useState<"today" | "saved">("today");

  return (
    <div className="lg:my-10 lg:mx-12 mx-4 my-6">
      <h3 className="text-3xl font-bold tracking-tight text-white">My Plan</h3>
      <p className="text-[14px] mt-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Statistics */}
      <div className="grid grid-cols-3 bg-card rounded-2xl pt-8 pb-6 px-6 my-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px]">Exercise</p>
            <h3 className="text-3xl md:text-5xl text-accent font-bold">2</h3>
          </div>
          <div className="w-px bg-[#232732] h-10" />
        </div>
        <div className="flex items-center justify-between pl-6">
          <div>
            <p className="text-[14px]">Minutes</p>
            <h3 className="text-3xl md:text-5xl font-bold">23</h3>
          </div>
          <div className="w-px bg-[#232732] h-10" />
        </div>
        <div className="pl-6">
          <div>
            <p className="text-[14px]">Calories</p>
            <h3 className="text-3xl md:text-5xl font-bold">190</h3>
          </div>
        </div>
      </div>

      {/* Tabs + Sort by */}
      <div className="flex flex-col md:flex-row md:items-center items-start gap-3 justify-between my-6">
        <div className="p-2 border border-[#232732] bg-[#151921] flex items-center gap-5 rounded-xl">
          <button
            onClick={() => setIsTabOpen("today")}
            className={`${isTabOpen === "today" ? "bg-[#1F242D] font-bold text-white" : ""} px-4 py-1.5 cursor-pointer rounded text-[12px] md:text-[14px] transition-colors duration-300`}
          >
            {"Today's"} Plan
          </button>
          <button
            onClick={() => setIsTabOpen("saved")}
            className={`${isTabOpen === "saved" ? "bg-[#1F242D] font-bold text-white" : ""} px-8 py-1.5 cursor-pointer rounded text-[12px] md:text-[14px] transition-colors duration-300`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-5">
          <span>Sort By</span>
          <div className="relative">
            <select className="px-4 py-2 pr-8 border border-[#232732] bg-[#151921] rounded-xl text-[14px] text-white cursor-pointer outline-none appearance-none hover:bg-[#1F242D] transition-colors duration-300">
              <option value="rating" className="bg-[#151921] text-white">
                Rating
              </option>
              <option value="calory" className="bg-[#151921] text-white">
                Calory
              </option>
              <option value="duration" className="bg-[#151921] text-white">
                Duration
              </option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white" />
          </div>
        </div>
      </div>


      <div>
        <EmptyState />
      </div>
    </div>
  );
};

export default MyPlan;
