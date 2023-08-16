type ButtonProps = {
  styles?: string;
};

const Button = ({ styles }: ButtonProps) => {
  return (
    <button
      className={`${styles} py-[18px] px-[33px] text-[18px] leading-[27px] text-primary bg-blue-gradient rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
