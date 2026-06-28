import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: 3,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard
        className="
        p-8
        h-full
        relative
        overflow-hidden
        "
      >
        <div
          className="
          absolute
          inset-0
          bg-linear-to-br
          from-cyan-500/10
          to-purple-500/10
          "
        />

        <div className="relative z-10">
          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-cyan-500/15
            flex
            items-center
            justify-center
            mb-6
            "
          >
            <Icon size={28} className="text-cyan-400" />
          </div>

          <h3
            className="
            text-2xl
            font-bold
            mb-4
            "
          >
            {title}
          </h3>

          <p className="text-slate-400">{description}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
