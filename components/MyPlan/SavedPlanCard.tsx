import { CardData } from "@/types/CardData";
import {  Clock4, Flame, Star, XIcon } from "lucide-react";
import Image from "next/image";

interface PropsType {
  plan: CardData;
}

const SavedPlanCard = ({ plan }: PropsType) => {
  return (
    <div className="p-4 bg-card rounded-2xl flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <Image
          width={144}
          height={90}
          alt={plan.name}
          src={plan.image}
          className="rounded-2xl max-h-22.5 max-w-36 object-cover"
        />
        <div>
          <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>

          <p className="py-0.5">{plan.equipment}</p>

          <div className="flex gap-3 items-center">
            <span className="flex items-center gap-2">
              <Clock4 className="text-accent" size={20} />
              {plan.duration}
            </span>
            <span className="flex items-center gap-2">
              <Flame className="text-accent fill-accent" size={20} />
              {plan.caloriesBurned}
            </span>
            <span className="flex items-center gap-2">
              <Star className="text-accent" size={20} />
              {plan.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mr-5">
        <button className="btn-outline rounded-full py-2">View Details</button>
        <XIcon className="cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
};

export default SavedPlanCard;
