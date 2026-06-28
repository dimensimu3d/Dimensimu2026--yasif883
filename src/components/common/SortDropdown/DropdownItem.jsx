import { motion } from "framer-motion";

export default function DropdownItem({ children, active, onClick }) {
  return (
    <motion.button
      whileHover={{
        x: 6,
      }}
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        px-4
        py-3
        text-left
        transition-colors

        ${
          active ? "bg-cyan-400 text-black" : "text-slate-300 hover:bg-white/10"
        }
      `}
    >
      {children}
    </motion.button>
  );
}
