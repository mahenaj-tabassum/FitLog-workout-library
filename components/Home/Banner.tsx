import Image from "next/image";

const Banner = () => {
  return (
    <section className="mt-12 mb-16 rounded-2xl md:p-14 px-8 pb-8 py-15 bg-card">
      <div className="flex flex-col gap-5 lg:flex-row items-center justify-between">
        <div>
          <p className="text-[12px] text-accent font-bold">WORKOUT LIBRARY</p>
          <h2 className="md:text-6xl text-5xl font-bold tracking-tight py-5">
            TRAIN WITH INTENT. LOG <br className="md:block hidden" />
            EVERY SET.
          </h2>
          <p className="text-[16px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="md:block hidden" />
            {"into today's plan, and watch the week's work add up."}
          </p>
          <a href="#workouts">
            <button className="btn-primary mt-5">Browse Workouts</button>
          </a>
        </div>
        <Image
          alt="Banner Image"
          src="/banner.png"
          height={334}
          width={334}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
