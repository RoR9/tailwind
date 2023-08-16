import { quotes } from "../assets";

type FeedbackCardProps = {
  name: string;
  img: string;
  title: string;
  content: string;
};

const FeedbackCard = ({ content, img, title, name }: FeedbackCardProps) => {
  return (
    <div className=" feedback-card max-w-[370px] w-full px-10 py-[60px] rounded-[20px] max-h-[395px] flex flex-col">
      <img className="w-[42px] h-[27px]" src={quotes} alt="quotes" />

      <p className="text-white text-[18px] leading-[32px] mt-10 flex-1 max-h-[290px] block overflow-hidden ">
        {content}
      </p>
      <div className="flex gap-4 mt-[30px]">
        <div className="flex justify-center items-center ">
          <img className="w-[48px] h-[48px]" src={img} alt={title} />
        </div>
        <div className="">
          <h5 className="text-white text-[20px] leading-[32px]">{name}</h5>
          <p className="text-white text-opacity-50 text-4 leading-6 ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
