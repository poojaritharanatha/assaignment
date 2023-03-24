import type { NextPage } from "next";

type ProofOfStakeSectionType = {
  validationText?: string;
  environmentallyFriendlyTe?: string;
  proofOfStakeText?: string;
  proofOfStakeValidationTex?: string;
};

const ProofOfStakeSection: NextPage<ProofOfStakeSectionType> = ({
  validationText,
  environmentallyFriendlyTe,
  proofOfStakeText,
  proofOfStakeValidationTex,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-5xl text-ffffff font-roboto-mono-regular-16">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start">
          <b className="flex-1 relative tracking-[-0.21px] uppercase">
            {validationText}
          </b>
        </div>
        <div className="self-stretch relative text-base leading-[147%] opacity-[0.7]">
          <p className="m-0">{environmentallyFriendlyTe}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{proofOfStakeText}</p>
        </div>
      </div>
      <img
        className="relative w-6 h-6 shrink-0 overflow-hidden"
        alt=""
        src={proofOfStakeValidationTex}
      />
    </div>
  );
};

export default ProofOfStakeSection;
