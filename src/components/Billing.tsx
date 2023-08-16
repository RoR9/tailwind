import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} justify-between`}
    >
      <div className={`${layout.sectionImgReverse} md:max-w-[50%]`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo} max-w-[470px] w-full`}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap mt-12 gap-[32px]">
          <img
            src={apple}
            alt="apple_pay"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
          <img
            src={google}
            alt="google_pay"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
