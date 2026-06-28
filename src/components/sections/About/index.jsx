import SectionWrapper from "../../ui/SectionWrapper";
import SectionTitle from "../../ui/SectionTitle";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import VisionMission from "./VisionMission";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        badge="About Us"
        title="Learn More About Our Company"
        subtitle="Professional 3D Printing Solution"
      />

      <div
        className="
                grid
                lg:grid-cols-2
                gap-20
                items-center
                "
      >
        <AboutImage />

        <AboutContent />
      </div>

      <VisionMission />
    </SectionWrapper>
  );
}
