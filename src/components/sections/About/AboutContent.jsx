import GlowText from "../../ui/GlowText";
import Button from "../../ui/Button";

import { companyInfo, aboutFeatures } from "../../../data/about";

import FeatureList from "./FeatureList";

export default function AboutContent() {
  return (
    <div>
      <p className="text-cyan-400 mb-3">ABOUT COMPANY</p>

      <h2 className="text-5xl font-bold leading-tight">
        <GlowText>{companyInfo.title}</GlowText>
      </h2>

      <p
        className="
                mt-8
                text-slate-400
                leading-8
                "
      >
        {companyInfo.description}
      </p>

      <FeatureList features={aboutFeatures} />

      <div className="mt-10">
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
