import type { NextPage } from "next";

type SectionCardType = {
  nodeServiceDescription?: string;
  nodeServiceDetails?: string;
  nodeServiceIds?: string;
};

const SectionCard: NextPage<SectionCardType> = ({
  nodeServiceDescription,
  nodeServiceDetails,
  nodeServiceIds,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-5xl text-ffffff font-roboto-mono-regular-16">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start">
          <b className="flex-1 relative tracking-[-0.21px] uppercase">
            {nodeServiceDescription}
          </b>
        </div>
        <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
          {nodeServiceDetails}
        </div>
      </div>
      <img
        className="relative w-6 h-6 shrink-0 overflow-hidden"
        alt=""
        src={nodeServiceIds}
      />
    </div>
  );
};

export default SectionCard;
