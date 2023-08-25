import { FunctionComponent } from "react";

const BrowseByDressStyleSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[2123px] left-[16px] rounded-xl bg-whitesmoke-200 w-[358px] h-[975px] overflow-hidden text-left text-5xl text-black font-satoshi">
      <b className="absolute top-[40px] left-[calc(50%_-_123px)] text-13xl leading-[36px] flex font-integral-cf text-center items-center justify-center w-[246px]">
        BROWSE BY dress STYLE
      </b>
      <div className="absolute top-[140px] left-[calc(50%_-_155px)] rounded-xl bg-white w-[310px] h-[190px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[310px] h-[190px] object-cover"
          alt=""
          src="/image-11@2x.png"
        />
        <b className="absolute top-[16px] left-[24px]">Casual</b>
      </div>
      <div className="absolute top-[346px] left-[calc(50%_-_155px)] rounded-xl bg-white w-[310px] h-[190px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[709px] h-[472px] object-cover"
          alt=""
          src="/image-13@2x.png"
        />
        <b className="absolute top-[16px] left-[24px]">Formal</b>
      </div>
      <div className="absolute top-[552px] left-[calc(50%_-_155px)] rounded-xl bg-white w-[310px] h-[190px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[389px] h-[311px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
        <b className="absolute top-[16px] left-[24px]">Party</b>
      </div>
      <div className="absolute top-[758px] left-[calc(50%_-_155px)] rounded-xl bg-white w-[310px] h-[190px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[70px] w-[285px] h-[425px] object-cover"
          alt=""
          src="/image-14@2x.png"
        />
        <b className="absolute top-[16px] left-[24px]">Gym</b>
      </div>
    </div>
  );
};

export default BrowseByDressStyleSection;
