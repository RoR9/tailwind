import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} w-[100%] h-[100%] bg-primary rounded-full flex-col  `}
      >
        <div className="flex-row flex">
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
