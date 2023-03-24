import type { NextPage } from "next";
import ServicesForm from "../components/services-form";
import DesktopContainer from "../components/desktop-container";
import FrequentlyAskedContainer from "../components/frequently-asked-container";

const Main: NextPage = () => {
  return (
    <div className="relative bg-ffffff w-full h-[4896px] overflow-hidden text-left text-5xl text-gray font-roboto-mono-regular-16 lg:flex lg:w-[1920px] mq350small:cursor-auto">
      <ServicesForm />
      <div className="absolute top-[2135px] left-[2px] bg-coral-200 w-[1918px] h-[51px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] tracking-[-0.21px] leading-[168%] capitalize inline-block w-[1918px] h-[51px]">
          We’re on a mission We’re on a mission We’re on a mission We’re on a
          mission We’re on a mission We’re on a mission We’re on a mission
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-d w-[1920px] h-[50px] overflow-hidden text-center text-base text-ffffff">
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_96px)] leading-[141.5%] inline-block w-[193px] h-[23px] opacity-[0.4]">
          Powered by Hypergraf
        </div>
        <div className="absolute top-[calc(50%_-_11px)] left-[1802px] leading-[141.5%] inline-block w-[90px] h-[23px]">
          LOGO
        </div>
        <div className="absolute top-[10px] left-[0px] leading-[141.5%] inline-block w-[298px] h-10">
          We’re on a Mission
        </div>
        <div className="absolute top-[5px] left-[0px] w-10 h-10" />
      </div>
      <DesktopContainer />
      <FrequentlyAskedContainer />
    </div>
  );
};

export default Main;
