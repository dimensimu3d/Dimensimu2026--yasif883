import SectionTitle from "../ui/SectionTitle";
import SectionWrapper from "../ui/SectionWrapper";
import ServiceCard from "../ui/ServiceCard";

import { servicesData } from "../../data/services";

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Services"
          title="Our Services"
          subtitle="Complete solutions from design to production."
        />

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
