"use client";

import { CardData } from "@/types/CardData";
import { createContext, useState } from "react";

type PlanContextType = {
  todaysPlan: CardData[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<CardData[]>>;
  savedPlans: CardData[];
  setSavedPlans: React.Dispatch<React.SetStateAction<CardData[]>>;
};

export const MyPlanContext = createContext<PlanContextType | undefined>(
  undefined,
);

const MyPlanContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<CardData[]>([]);
  const [savedPlans, setSavedPlans] = useState<CardData[]>([]);

  const states = { todaysPlan, setTodaysPlan, savedPlans, setSavedPlans };

  return (
    <MyPlanContext.Provider value={states}>{children}</MyPlanContext.Provider>
  );
};

export default MyPlanContextProvider;
