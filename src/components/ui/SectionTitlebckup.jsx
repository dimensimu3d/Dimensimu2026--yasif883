import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
}) {
  const alignment = {
    center: {
      container: "items-center text-center",
      line: "mx-auto",
    },
    left: {
      container: "items-start text-left",
      line: "",
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`
                flex
                flex-col
                ${alignment[align].container}
                mb-20
            `}
    >
      {badge && (
        <span
          className="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-cyan-400/5
                        text-cyan-300
                        uppercase
                        tracking-[0.3em]
                        text-xs
                        font-semibold
                        "
        >
          {badge}
        </span>
      )}

      <h2
        className="
                mt-6
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                leading-tight
                "
      >
        <span
          className="
                    bg-gradient-to-r
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
                        max-w-2xl
                        text-slate-400
                        text-lg
                        leading-8
                        "
        >
          {subtitle}
        </p>
      )}

      <div
        className={`
                    mt-10
                    h-[2px]
                    w-32
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-cyan-300
                    to-transparent
                    ${alignment[align].line}
                `}
      />
    </motion.div>
  );
}
