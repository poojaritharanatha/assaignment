import type { NextPage } from "next";

const Desktop6: NextPage = () => {
  return (
    <div className="relative bg-d w-full h-[50px] overflow-hidden text-center text-base text-ffffff font-roboto-mono-regular-16">
      <div className="absolute top-[0px] left-[0px] bg-d [backdrop-filter:blur(31px)] w-[1920px] h-[50px] overflow-hidden">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4.72px] left-[35px] w-[229px] flex flex-row items-center justify-start gap-[16px]">
          <div className="relative w-10 h-10 shrink-0" />
          <div className="relative text-base leading-[141.5%] font-roboto-mono-regular-16 text-ffffff text-center">
            We're on a Mission
          </div>
        </button>
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_96px)] leading-[141.5%] opacity-[0.4]">
          Powered by Hypergraf
        </div>
        <div className="absolute top-[calc(50%_-_12px)] right-[35px] flex flex-row items-start justify-start">
          <div className="relative leading-[141.5%]">LOGO</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;
