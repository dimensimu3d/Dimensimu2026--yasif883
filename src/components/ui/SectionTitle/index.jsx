import { motion } from "framer-motion";

import SectionBadge from "./SectionBadge";
import DecorativeLine from "./DecorativeLine";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
}) {
  const alignClass = {
    center: "items-center text-center",
    left: "items-start text-left",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        flex
        flex-col
        ${alignClass[align]}
        mb-20
      `}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}

      <h2
        className="
        mt-8
        text-4xl
        md:text-5xl
        xl:text-6xl
        font-black
        leading-tight
        max-w-5xl
        "
      >
        <span
          className="
          bg-linear-to-r
          from-white
          via-cyan-200
          to-cyan-400
          bg-clip-text
          text-transparent
          "
        >
          {title}
        </span>
      </h2>

      {subtitle && (
        <p
          className="
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-slate-400
          "
        >
          {subtitle}
        </p>
      )}

      <DecorativeLine />
    </motion.div>
  );
}
