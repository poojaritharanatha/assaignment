import type { NextPage } from "next";
import NodeArmyContainer from "../components/node-army-container";

const FAQ: NextPage = () => {
  return (
    <div className="relative bg-d w-full h-[1184px] overflow-hidden text-left text-101xl text-ffffff font-inter">
      <div className="absolute w-full top-[351px] right-[0px] left-[0px] [background:linear-gradient(107.99deg,_#ffcc97,_#d5d9c5)] h-[46px]" />
      <div className="absolute top-[36.28px] left-[111px] w-[1016px] h-[1016px] mix-blend-lighten" />
      <div className="absolute w-[calc(100%_-_630px)] top-[173.28px] right-[315px] left-[315px] flex flex-col items-start justify-start gap-[75px]">
        <div className="self-stretch relative h-[110px] shrink-0">
          <b className="absolute top-[0px] left-[0px] leading-[92%] uppercase inline-block w-[1290px]">
            Frequently Asked
          </b>
        </div>
        <NodeArmyContainer />
      </div>
    </div>
  );
};

export default FAQ;
