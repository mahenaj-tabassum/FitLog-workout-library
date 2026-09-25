import { CalendarDays } from "lucide-react";
import Link from "next/link";

const AddToPlan = () => {
  return (
    <Link href="/my-plan">
      <button className="btn-primary flex items-center gap-1">
        <span>
          <CalendarDays size={17} />
        </span>
        Add to {"today's"} plan
      </button>
    </Link>
  );
};

export default AddToPlan;
