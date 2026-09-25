import { CardData } from "@/types/CardData";
import { CheckIcon, Clock4, Flame, Star, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropsType {
  plan: CardData;
}

const TodayPlanCard = ({ plan }: PropsType) => {
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
        <Link href={`exercise-details/${plan.id}`} className="btn-outline py-2">
          View Details
        </Link>
        <button className="btn-primary py-2 flex items-center gap-2">
          <CheckIcon size={15} /> Mark as Done
        </button>
        <XIcon className="cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
};

export default TodayPlanCard;
