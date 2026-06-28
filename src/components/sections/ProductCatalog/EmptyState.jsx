import { SearchX } from "lucide-react";
import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        py-20
        flex
        flex-col
        items-center
        text-center
      "
    >
      <SearchX size={60} className="text-cyan-400 mb-6" />

      <h3 className="text-2xl font-bold text-white">No Products Found</h3>

      <p className="mt-3 text-slate-400">Try another keyword or category.</p>
    </motion.div>
  );
}
