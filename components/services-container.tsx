import type { NextPage } from "next";
import SectionCard from "./section-card";

const ServicesContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-d overflow-hidden flex flex-row pt-[60px] px-3 pb-20 items-start justify-start text-left text-26xl text-ffffff font-inter">
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[44px]">
          <b className="relative leading-[92%] uppercase">services</b>
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px] text-5xl font-roboto-mono-regular-16">
            <div className="self-stretch flex flex-col items-start justify-start gap-[80px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative w-[185px] h-8 shrink-0">
                    <b className="absolute top-[0px] left-[0px] tracking-[-0.21px] uppercase inline-block w-[185px]">{`Co-Nodes `}</b>
                    <img
                      className="absolute top-[2.11px] left-[116.62px] w-[7.48px] h-[7.9px]"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                  <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
                    Collaborative staking among users to pool to achieve
                    threshold stake and operate collectively. This democratises
                    participation and allows sub-stake holders to benefit from
                    reward protocols. It also enables compounding as
                    participants can sweep earned rewards into further Co-Nodes
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/usersplus.svg"
                />
              </div>
              <SectionCard
                nodeServiceDescription="Managed nodes"
                nodeServiceDetails="Outsource node deployment, management, and maintenance to Node Army for a small commission of earned rewards. Develop a passive yield portfolio with minimum time and skill commitment."
                nodeServiceIds="/server01.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[80px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[410px] shrink-0 object-cover"
                alt=""
                src="/frame-1321314690@2x.png"
              />
              <SectionCard
                nodeServiceDescription="Nodes as a service"
                nodeServiceDetails="An industrial node solution for projects requiring robust decentralised node infrastructures at scale. Node Army collaborates with projects during development phase and through a blockchain lifecycle."
                nodeServiceIds="/target05.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[80px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <b className="flex-1 relative tracking-[-0.21px] uppercase">
                      Rewards
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
                    <p className="m-0">
                      Participate in underlying projects offering rewards for
                      staking, validating, and securing their network through a
                      transparent process. Node Army does not offer or promote
                      its own Node Army yield, but rewards are transparently
                      distributed on the blockchain according to the underlying
                      project's protocol and tokenomics.
                    </p>
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/percent03.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <b className="flex-1 relative tracking-[-0.21px] uppercase">
                      Node build templates
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
                    Easily deploy nodes with pre-built templates hosted in the
                    Marketplaces of premier cloud computing providers. Templates
                    are specific to the different underlying blockchain
                    networks, designed to make deployment seamless.
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/cpuchip01.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[80px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[410px] shrink-0 object-cover"
                alt=""
                src="/frame-1321314691@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <b className="flex-1 relative tracking-[-0.21px] uppercase">{`Blockchain scalability `}</b>
                  </div>
                  <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
                    <p className="m-0">
                      Leverage scalable blockchain infrastructure and a
                      substantial and growing community of committed
                      datapreneurs for rapid and effective scaling of
                      blockchain-based applications. Maintain high performance
                      and security in a decentralised approach.
                    </p>
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/cube01.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
