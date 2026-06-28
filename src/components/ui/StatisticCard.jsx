// import CountUp from "react-countup";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function StatisticCard({ value, suffix, label }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard className="p-8 text-center h-full">
        <h3 className="text-5xl font-black text-cyan-400 mb-3">
          {value}
          {suffix}
        </h3>

        <p className="text-slate-400">{label}</p>
      </GlassCard>
    </motion.div>
  );
}
