import type { NextPage } from "next";
import NodeContainer from "./node-container";

const ManagedNodesContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-left text-5xl text-ffffff font-roboto-mono-regular-16">
      <div className="w-[410px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
        <textarea className="[border:none] bg-[transparent] flex font-roboto-mono-regular-16 text-5xl w-[410px] flex-col items-start justify-start" />
        <img
          className="relative w-6 h-6 shrink-0 overflow-hidden"
          alt=""
          src="/usersplus1.svg"
        />
      </div>
      <NodeContainer
        nodeServiceDescription="Managed nodes"
        nodeServiceDetails="Outsource node deployment, management, and maintenance to Node Army for a small commission of earned rewards. Develop a passive yield portfolio with minimum time and skill commitment."
        nodeServiceRewardDetails="/server011.svg"
      />
      <img
        className="relative w-[410px] h-[410px] shrink-0 overflow-hidden object-cover"
        alt=""
        src="/frame-13213146903@2x.png"
      />
    </div>
  );
};

export default ManagedNodesContainer;
