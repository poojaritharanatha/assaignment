import type { NextPage } from "next";

const NodeArmyContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[48px] text-left text-9xl text-ffffff font-roboto-mono-regular-16">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-d">
        <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
          <div className="flex-1 relative leading-[100.02%] uppercase font-medium">{`What is Node Army? `}</div>
          <img
            className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
            alt=""
            src="/frame-13213147003.svg"
          />
        </div>
        <div className="relative text-lg tracking-[-0.21px] leading-[168%] text-ffffff inline-block w-[1235px] opacity-[0.8]">
          Node Army is a cloud-native blockchain infrastructure provider that
          empowers individuals and businesses to deploy and manage nodes, even
          without technical expertise. Our infrastructure is secure and
          scalable, with advanced features such as co-nodes, compounding, and
          managed nodes.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
        <div className="flex-1 relative leading-[100.02%] uppercase font-medium">
          How can I benefit from using Node Army?
        </div>
        <img
          className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
          alt=""
          src="/frame-13213147004.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
        <div className="flex-1 relative leading-[100.02%] uppercase font-medium">
          Do I need technical expertise to use Node Army?
        </div>
        <img
          className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
          alt=""
          src="/frame-13213147004.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
        <div className="flex-1 relative leading-[100.02%] uppercase font-medium">
          What kind of support does Node Army provide?
        </div>
        <img
          className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
          alt=""
          src="/frame-13213147004.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
        <div className="flex-1 relative leading-[100.02%] uppercase font-medium">
          How do I get started with Node Army?
        </div>
        <img
          className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
          alt=""
          src="/frame-13213147004.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
        <div className="flex-1 relative leading-[100.02%] uppercase font-medium">
          How will I be rewarded by using Node Army?
        </div>
        <img
          className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
          alt=""
          src="/frame-13213147004.svg"
        />
      </div>
    </div>
  );
};

export default NodeArmyContainer;
