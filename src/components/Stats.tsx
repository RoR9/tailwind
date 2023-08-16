import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex justify-center flex-wrap gap-[50px]">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="flex items-center justify-center gap-[25px]"
        >
          <h4 className="font-poppins text-[40px] leading-[130%] font-semibold text-white">
            {stat.value}
          </h4>
          <p className="font-poppins uppercase text-[20px] leading-[130%] text-gradient">
            {stat.title}
          </p>
          {index < stats.length - 1 && (
            <div className="sm:block hidden w-[1px] h-[18px] mx-[25px] bg-white" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
