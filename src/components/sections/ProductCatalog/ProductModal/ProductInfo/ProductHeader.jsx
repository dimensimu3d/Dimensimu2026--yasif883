import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductHeader({ product }) {
  if (!product) return null;

  return (
    <div className="space-y-5">
      {/* Category */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-400/10
          px-4
          py-1.5
          text-sm
          font-medium
          text-cyan-300
        "
      >
        {product.category}
      </motion.span>

      {/* Product Name */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="
          text-3xl
          lg:text-4xl
          font-bold
          leading-tight
          text-white
        "
      >
        {product.name}
      </motion.h2>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="
          flex
          flex-wrap
          items-center
          gap-3
          text-sm
        "
      >
        <div className="flex items-center gap-1">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />

          <span className="font-semibold text-white">{product.rating}</span>
        </div>

        <span className="text-zinc-400">({product.reviews} Reviews)</span>
      </motion.div>

      {/* Short Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="
          leading-8
          text-zinc-300
        "
      >
        {product.shortDescription}
      </motion.p>
    </div>
  );
}
