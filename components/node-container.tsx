import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type NodeContainerType = {
  nodeServiceDescription?: string;
  nodeServiceDetails?: string;
  nodeServiceRewardDetails?: string;

  /** Style props */
  propFlexShrink?: Property.FlexShrink;
};

const NodeContainer: NextPage<NodeContainerType> = ({
  nodeServiceDescription,
  nodeServiceDetails,
  nodeServiceRewardDetails,
  propFlexShrink,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      flexShrink: propFlexShrink,
    };
  }, [propFlexShrink]);

  return (
    <div
      className="w-[410px] shrink-0 flex flex-col items-start justify-start gap-[32px] text-left text-5xl text-ffffff font-roboto-mono-regular-16"
      style={frameDivStyle}
    >
      <div className="w-[410px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start">
          <b className="flex-1 relative tracking-[-0.21px] uppercase">
            {nodeServiceDescription}
          </b>
        </div>
        <div className="self-stretch relative text-lg tracking-[-0.21px] leading-[168%] opacity-[0.7]">
          {nodeServiceDetails}
        </div>
      </div>
      <img
        className="relative w-6 h-6 shrink-0 overflow-hidden"
        alt=""
        src={nodeServiceRewardDetails}
      />
    </div>
  );
};

export default NodeContainer;
