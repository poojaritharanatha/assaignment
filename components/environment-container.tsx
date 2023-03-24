import type { NextPage } from "next";
import ProofOfStakeSection from "./proof-of-stake-section";

const EnvironmentContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-d overflow-hidden flex flex-row pt-[60px] pb-20 pr-0 pl-3 items-start justify-start text-left text-5xl text-ffffff font-roboto-mono-regular-16">
      <div className="flex-1 flex flex-col items-start justify-start gap-[60px]">
        <div className="self-stretch flex flex-col items-start justify-start text-26xl font-inter">
          <b className="self-stretch relative leading-[92%] uppercase">
            Environment statement
          </b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <ProofOfStakeSection
            validationText="proof of stake"
            environmentallyFriendlyTe="Proof of stake blockchain validation is more environmentally friendly than proof of work, as it consumes significantly less energy by not requiring computational puzzles to be solved. Validators are selected based on cryptocurrency holdings, reducing the carbon footprint of the network."
            proofOfStakeText="Unless directly disclosed none of the projects we support will operate through Proof of Work."
            proofOfStakeValidationTex="/shieldtick.svg"
          />
          <ProofOfStakeSection
            validationText="Cloud computing"
            environmentallyFriendlyTe="Cloud computing provides more efficient resource usage , reducing the need for physical hardware and lowering the carbon footprint of the network. Other benefits include increased scalability, faster transaction speeds, and improved accessibility. "
            proofOfStakeText="Overall, cloud computing provides an eco-friendly and efficient solution for validating and recording transactions on PoS blockchains."
            proofOfStakeValidationTex="/dataflow03.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[410px] shrink-0 object-cover"
            alt=""
            src="/frame-1321314690@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[-0.21px] uppercase">
                  Node army
                </b>
              </div>
              <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
                <p className="m-0">
                  We regularly review cloud computing platforms to ensure you
                  can choose from proven, reliable, scalable and environmentally
                  responsible providers. Node Army will endeavor to integrate a
                  energy utilization metric to our and your dashboards in the
                  near future for transparency of impact
                </p>
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/barchartcircle01.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentContainer;
