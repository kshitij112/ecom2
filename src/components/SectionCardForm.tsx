import { FunctionComponent } from "react";

const SectionCardForm: FunctionComponent = () => {
  return (
    <div className="absolute top-[3244px] left-[16px] rounded-xl box-border w-[358px] overflow-hidden flex flex-row flex-wrap p-6 items-start justify-start text-left text-base text-black font-satoshi border-[1px] border-solid border-gray-200">
      <div className="flex-1 flex flex-row items-start justify-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="flex flex-row items-start justify-start gap-[5.51px]">
            <img
              className="relative w-[19.19px] h-[19.19px]"
              alt=""
              src="/star-11.svg"
            />
            <img
              className="relative w-[19.19px] h-[19.19px]"
              alt=""
              src="/star-21.svg"
            />
            <img
              className="relative w-[19.19px] h-[19.19px]"
              alt=""
              src="/star-31.svg"
            />
            <img
              className="relative w-[19.19px] h-[19.19px]"
              alt=""
              src="/star-41.svg"
            />
            <img
              className="relative w-[19.19px] h-[19.19px]"
              alt=""
              src="/star-52.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <b className="relative leading-[22px]">Sarah M.</b>
              <img
                className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                alt=""
                src="/frame4.svg"
              />
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-gray-300">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCardForm;
