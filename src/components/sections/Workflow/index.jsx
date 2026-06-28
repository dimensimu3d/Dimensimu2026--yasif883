import SectionWrapper from "../../ui/SectionWrapper";
import SectionTitle from "../../ui/SectionTitle";

import WorkflowCard from "./WorkflowCard";

import { workflowData } from "../../../data/workflow";

export default function Workflow() {
  return (
    <SectionWrapper id="workflow">
      <SectionTitle
        badge="Workflow"
        title="3D Printing Workflow"
        subtitle="Alur kerja kami dari ide hingga produk selesai."
      />

      <div className="relative max-w-4xl mx-auto">
        <div
          className="
          absolute
          left-8
          top-0
          bottom-0
          w-0.5
          bg-cyan-500/20
          hidden md:block
          "
        />

        <div className="space-y-10">
          {workflowData.map((step, index) => (
            <WorkflowCard key={step.id} {...step} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
