import { motion } from "framer-motion";

export default function ProductImage({ product }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        aspect-square
      "
    >
      <motion.img
        layoutId={`product-image-${product.slug}`}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.4,
        }}
        src={product.thumbnail}
        alt={product.name}
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>
  );
}
