import type { NextPage } from "next";
import ServicesContainer from "../components/services-container";
import EnvironmentContainer from "../components/environment-container";
import FAQContainer from "../components/f-a-q-container";

const Home375: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-start text-center text-base text-d font-roboto-mono-regular-16">
      <div className="self-stretch relative bg-d h-11 shrink-0 overflow-hidden">
        <img
          className="absolute w-[calc(100%_+_480px)] right-[-480px] bottom-[-760px] left-[0px] max-w-full overflow-hidden h-[804px]"
          alt=""
        />
        <div className="absolute top-[0px] left-[0px] bg-header-glass [backdrop-filter:blur(31px)] w-[375px] h-[50px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_12.5px)] right-[35px] flex flex-row items-start justify-start">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/menu05.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4px] left-[12px] flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-10 h-10 shrink-0" />
            <div className="relative text-base leading-[141.5%] font-roboto-mono-regular-16 text-ffffff text-center">
              We're on a Mission
            </div>
          </button>
        </div>
      </div>
      <ServicesContainer />
      <div className="self-stretch relative h-[46px] shrink-0 overflow-hidden bg-[url(/banner@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_1507.5px)] flex flex-row items-start justify-start gap-[53px]">
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
          <b className="relative leading-[141.5%] uppercase">
            We're on a Mission!
          </b>
        </div>
      </div>
      <EnvironmentContainer />
      <FAQContainer />
    </div>
  );
};

export default Home375;
