import { motion } from "framer-motion";

export default function Chip({ active = false, children, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={`

                px-5

                py-2

                rounded-full

                border

                transition-all

                text-sm

                ${
                  active
                    ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.4)]"
                    : "glass border-white/10 text-slate-300 hover:border-cyan-400/40"
                }

            `}
    >
      {children}
    </motion.button>
  );
}
