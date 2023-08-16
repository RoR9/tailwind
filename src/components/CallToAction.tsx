import styles from "../style";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className=" sm:px-16 px-6 sm:py-12 py-4 flex justify-center items-center sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow gap-2 mt-[100px]">
      <div className="flex-1">
        <h2 className={`text-white ${styles.heading2}`}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} mt-6 max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex items-center">
        <Button />
      </div>
    </section>
  );
};

export default CallToAction;
