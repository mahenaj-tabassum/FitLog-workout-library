"use client"
import { MyPlanContext } from "@/Contexts/MyPlanContext";
import { CardData } from "@/types/CardData";
import { XIcon } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface PropsType {
  plan: CardData;
}

const RemoveTodayCardButton = ({ plan }: PropsType) => {
  const exerciseContext = useContext(MyPlanContext);
  if (!exerciseContext) {
    throw new Error("Error");
  }
  const { todaysPlan, setTodaysPlan } = exerciseContext;

  const handleRemove = (id: number) => {
    const findExercise = todaysPlan.find((item) => item.id === id);
    setTodaysPlan(todaysPlan.filter((item) => item !== findExercise));
    toast.error(`"${findExercise?.name}" removed from today's plan ❌`);
  };
  return (
    <button
      onClick={() => handleRemove(plan.id)}
      type="button"
      aria-label="Remove exercise"
      className="p-1.5 rounded-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors duration-200 cursor-pointer"
    >
      <XIcon size={25} />
    </button>
  );
};

export default RemoveTodayCardButton;
