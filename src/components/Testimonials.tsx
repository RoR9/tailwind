import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className="relative mt-[170px]">
      {/* Title Section */}
      <div className="absolute z-[0] w-[65%] h-[65%] top-[40%] -right-1/2 rounded-full blue__gradient" />
      <div className="flex md:flex-row items-center flex-col  md:gap-[130px] gap-3 ">
        <h2 className={`${styles.heading2} basis-1/2`}>
          What people are <br className="md:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex gap-[70px] flex-wrap justify-center md:mt-20 mt-7  ">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
