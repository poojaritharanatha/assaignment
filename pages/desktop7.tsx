import type { NextPage } from "next";
import ManagedNodesContainer from "../components/managed-nodes-container";
import NodeContainer from "../components/node-container";

const Desktop7: NextPage = () => {
  return (
    <div className="relative bg-d w-full h-[2016px] overflow-hidden flex flex-row pt-20 px-[75px] pb-[140px] box-border items-center justify-center text-left text-101xl text-ffffff font-inter">
      <div className="w-[1290px] shrink-0 flex flex-col items-start justify-start gap-[60px]">
        <b className="relative leading-[92%] uppercase">services</b>
        <div className="self-stretch flex flex-col items-center justify-center gap-[40px] text-5xl font-roboto-mono-regular-16">
          <ManagedNodesContainer />
          <div className="self-stretch flex flex-col items-end justify-start">
            <NodeContainer
              nodeServiceDescription="Nodes as a service"
              nodeServiceDetails="An industrial node solution for projects requiring robust decentralised node infrastructures at scale. Node Army collaborates with projects during development phase and through a blockchain lifecycle."
              nodeServiceRewardDetails="/target051.svg"
              propFlexShrink="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[410px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
              <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <b className="flex-1 relative tracking-[-0.21px] uppercase">
                    Rewards
                  </b>
                </div>
                <textarea className="[border:none] bg-[transparent] font-roboto-mono-regular-16 text-lg self-stretch relative tracking-[-0.21px] leading-[168%] text-ffffff text-left opacity-[0.7]">
                  <p className="m-0">
                    Participate in underlying projects offering rewards for
                    staking, validating, and securing their network through a
                    transparent process. Node Army does not offer or promote its
                    own Node Army yield, but rewards are transparently
                    distributed on the blockchain according to the underlying
                    project's protocol and tokenomics.
                  </p>
                </textarea>
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/percent031.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <b className="flex-1 relative tracking-[-0.21px] uppercase">
                    Node build templates
                  </b>
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.21px] leading-[168%] opacity-[0.7]">
                  Easily deploy nodes with pre-built templates hosted in the
                  Marketplaces of premier cloud computing providers. Templates
                  are specific to the different underlying blockchain networks,
                  designed to make deployment seamless.
                </div>
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/cpuchip011.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end gap-[30px]">
            <img
              className="relative w-[410px] h-[410px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/frame-13213146911@2x.png"
            />
            <div className="w-[410px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
              <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <b className="flex-1 relative tracking-[-0.21px] uppercase">{`Blockchain scalability `}</b>
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.21px] leading-[168%] opacity-[0.7]">
                  <p className="m-0">
                    Leverage scalable blockchain infrastructure and a
                    substantial and growing community of committed datapreneurs
                    for rapid and effective scaling of blockchain-based
                    applications. Maintain high performance and security in a
                    decentralised approach.
                  </p>
                </div>
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/cube011.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop7;
