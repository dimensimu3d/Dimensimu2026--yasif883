import { motion } from "framer-motion";

export default function ModalOverlay({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="

                fixed

                inset-0

                bg-black/70

                backdrop-blur-md

                z-50

            "
    />
  );
}
