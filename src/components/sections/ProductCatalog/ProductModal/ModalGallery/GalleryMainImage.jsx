import { motion } from "framer-motion";
import { useState } from "react";
import { asset } from "../../../../../utils/asset";

export default function GalleryMainImage({ product, image }) {
  const [error, setError] = useState(false);

  const src = !error && image ? image : asset("/images/placeholder.webp");

  return (
    <motion.div
      layoutId={`product-${product.slug}`}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        shadow-[0_0_40px_rgba(0,255,255,.08)]
      "
    >
      <motion.img
        key={src}
        src={src}
        alt={product.name}
        loading="lazy"
        onError={() => setError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="
          aspect-square
          w-full
          object-cover
        "
      />
    </motion.div>
  );
}
