import { motion } from "framer-motion";

export default function ModalContent({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,

        scale: 0.95,

        y: 30,
      }}
      animate={{
        opacity: 1,

        scale: 1,

        y: 0,
      }}
      exit={{
        opacity: 0,

        scale: 0.95,

        y: 30,
      }}
      transition={{
        duration: 0.35,
      }}
      className="

                relative

                w-full

                max-w-7xl

                rounded-3xl

                glass

                overflow-hidden

                border

                border-white/10

            "
    >
      {children}
    </motion.div>
  );
}
