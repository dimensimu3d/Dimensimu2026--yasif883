import { motion } from "framer-motion";

export default function ModalOverlay({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50

        bg-black/70
        backdrop-blur-xl
      "
    />
  );
}
