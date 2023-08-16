import Button from "./Button";
import { features } from "../constants";

type FeatureCardProps = {
  icon: string;
  title: string;
  content: string;
};

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => {
  return (
    <div className="flex p-5 feature-card gap-[20px] rounded-[20px]">
      <div className="flex justify-center items-center">
        <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
          <img
            src={icon}
            alt={title}
            className="h-[50%] w-[50%] object-contain"
          />
        </div>
      </div>

      <div className="flex-1">
        <h5 className="font-semibold text-white leading-[23px] text-[18px] ">
          {title}
        </h5>
        <p className="mt-2 text-white text-[16px] text-opacity-70 leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section className="font-poppins flex md:flex-row flex-col justify-center gap-[75px] mt-[180px] ">
      <div className="max-w-[670px] w-full">
        <h2 className="text-white font-semibold leading-[76px] text-[48px]">
          You do the business,
          <br className="md:block hidden" /> we’ll handle the money.
        </h2>
        <p className="text-white mt-6 text-opacity-70 text-[18px] leading-[30px] w-full max-w-[570px] ">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-12" />
      </div>

      <div className="flex-col flex gap-10">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
