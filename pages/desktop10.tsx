import type { NextPage } from "next";

const Desktop10: NextPage = () => {
  return (
    <div className="relative bg-d w-full overflow-hidden flex flex-row pt-20 px-[75px] pb-[140px] box-border items-center justify-center text-left text-5xl text-ffffff font-roboto-mono-regular-16">
      <div className="flex flex-col items-start justify-start gap-[78px]">
        <div className="flex flex-col items-start justify-start text-101xl font-inter">
          <b className="relative leading-[92%] uppercase inline-block w-[1290px]">
            Environment statement
          </b>
        </div>
        <div className="w-[1290px] flex flex-row items-start justify-start gap-[30px]">
          <div className="w-[410px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
            <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[-0.21px] uppercase">
                  proof of stake
                </b>
              </div>
              <div className="self-stretch relative text-lg tracking-[-0.21px] leading-[168%] opacity-[0.7]">
                <p className="m-0">
                  Proof of stake blockchain validation is more environmentally
                  friendly than proof of work, as it consumes significantly less
                  energy by not requiring computational puzzles to be solved.
                  Validators are selected based on cryptocurrency holdings,
                  reducing the carbon footprint of the network.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Unless directly disclosed none of the projects we support will
                  operate through Proof of Work.
                </p>
              </div>
            </div>
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/shieldtick1.svg"
            />
          </div>
          <div className="w-[410px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
            <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[-0.21px] uppercase">
                  Cloud computing
                </b>
              </div>
              <div className="self-stretch relative text-lg tracking-[-0.21px] leading-[168%] opacity-[0.7]">
                <p className="m-0">{`Cloud computing provides more efficient resource usage , reducing the need for physical hardware and lowering the carbon footprint of the network. Other benefits include increased scalability, faster transaction speeds, and improved accessibility. `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Overall, cloud computing provides an eco-friendly and
                  efficient solution for validating and recording transactions
                  on PoS blockchains.
                </p>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 shrink-0 overflow-hidden">
              <img
                className="absolute h-[91.67%] w-[91.67%] top-[4.17%] right-[4.17%] bottom-[4.17%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/icon5.svg"
              />
            </button>
          </div>
        </div>
        <div className="w-[1290px] flex flex-row items-start justify-end gap-[30px]">
          <img
            className="relative w-[410px] h-[410px] shrink-0 overflow-hidden object-cover"
            alt=""
            src="/frame-13213146902@2x.png"
          />
          <div className="w-[410px] shrink-0 flex flex-col items-start justify-start">
            <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[-0.21px] uppercase">
                  Node army
                </b>
              </div>
              <textarea className="[border:none] bg-[transparent] font-roboto-mono-regular-16 text-lg self-stretch relative tracking-[-0.21px] leading-[168%] text-ffffff text-left opacity-[0.7]">
                <p className="m-0">
                  We regularly review cloud computing platforms to ensure you
                  can choose from proven, reliable, scalable and environmentally
                  responsible providers. Node Army will endeavor to integrate a
                  energy utilization metric to our and your dashboards in the
                  near future for transparency of impact
                </p>
              </textarea>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="/barchartcircle011.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop10;
