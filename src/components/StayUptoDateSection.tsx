import { FunctionComponent } from "react";

const StayUptoDateSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[3480px] left-[16px] rounded-xl bg-black w-[358px] h-[293px] overflow-hidden text-left text-sm text-gray-100 font-satoshi">
      <div className="absolute top-[169px] left-[calc(50%_-_155px)] rounded-43xl bg-white w-[311px] h-[42px] overflow-hidden flex flex-row py-3 px-4 box-border items-center justify-start gap-[12px]">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/frame5.svg"
        />
        <div className="relative">Enter your email address</div>
      </div>
      <div className="absolute top-[223px] left-[24px] rounded-43xl bg-white w-[311px] h-[42px] overflow-hidden flex flex-row py-3 px-4 box-border items-center justify-center text-black">
        <div className="relative font-medium">Subscribe to Newsletter</div>
      </div>
      <b className="absolute top-[32px] left-[24px] text-13xl leading-[35px] inline-block font-integral-cf text-white w-[297px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </b>
    </div>
  );
};

export default StayUptoDateSection;
