import type { CardData } from "@/types/CardData";
import WorkoutCard from "./WorkoutCard";

const CardData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: CardData[] = await response.json();
  return data;
};

const LibrarySection = async () => {
  const cardInfos: CardData[] = await CardData();
  return (
    <section id="workouts">
      {/* Title */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold">The Library</h3>
        <p className="text-[14px]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-16">
        {cardInfos.map((card) => (
          <WorkoutCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default LibrarySection;
