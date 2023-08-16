import { card } from "../assets";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col gap-[85px]">
      <div className="flex-1">
        <h2 className={styles.heading2}>
          Find a better card deal <br className="md:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} mt-6 max-w-[470px] `}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="flex-1">
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
