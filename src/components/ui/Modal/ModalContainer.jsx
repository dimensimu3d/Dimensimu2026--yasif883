import { motion } from "framer-motion";

export default function ModalContainer({ children, size = "md" }) {
    const sizes = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  fullscreen: "max-w-[96vw] h-[92vh]",
};
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={(e) => e.stopPropagation()}
      className={`
        glass
        relative
        z-60
        w-full
        max-w-6xl
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        ${sizes[size]}
        `}
    >
      {children}
    </motion.div>
  );
}
