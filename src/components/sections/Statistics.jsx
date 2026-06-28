import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import StatisticCard from "../ui/StatisticCard";

import { statisticsData } from "../../data/statistics";

export default function Statistics() {
  return (
    <section id="statistics" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Achievement"
          subtitle="Trusted by businesses, creators, and manufacturers."
        />

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {statisticsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <StatisticCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
