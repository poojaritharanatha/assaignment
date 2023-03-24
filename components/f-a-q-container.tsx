import type { NextPage } from "next";

const FAQContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-d overflow-hidden flex flex-row py-20 px-5 items-center justify-start text-left text-26xl text-ffffff font-inter">
      <div className="flex-1 flex flex-col items-start justify-start gap-[75px]">
        <div className="self-stretch relative h-[82px] shrink-0">
          <b className="absolute top-[0px] left-[0px] leading-[92%] uppercase inline-block w-[335px]">
            Frequently Asked
          </b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px] text-xl font-roboto-mono-regular-16">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
                <div className="flex-1 relative leading-[115%] uppercase font-medium">{`What is Node Army? `}</div>
                <img
                  className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
                  alt=""
                  src="/frame-1321314700.svg"
                />
              </div>
              <div className="self-stretch relative text-base leading-[147%] opacity-[0.8]">
                Node Army is a cloud-native blockchain infrastructure provider
                that empowers individuals and businesses to deploy and manage
                nodes, even without technical expertise. Our infrastructure is
                secure and scalable, with advanced features such as co-nodes,
                compounding, and managed nodes.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
            <div className="flex-1 relative leading-[115%] uppercase font-medium">
              How can I benefit from using Node Army?
            </div>
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/frame-13213147001.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
            <div className="flex-1 relative leading-[115%] uppercase font-medium">
              Do I need technical expertise to use Node Army?
            </div>
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/frame-13213147001.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
            <div className="flex-1 relative leading-[115%] uppercase font-medium">
              What kind of support does Node Army provide?
            </div>
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/frame-13213147001.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
            <div className="flex-1 relative leading-[115%] uppercase font-medium">
              How do I get started with Node Army?
            </div>
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/frame-13213147002.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[66px]">
            <div className="flex-1 relative leading-[115%] uppercase font-medium">
              How will I be rewarded by using Node Army?
            </div>
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/frame-13213147001.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContainer;
