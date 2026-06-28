import { motion } from "framer-motion";

import Card from "../../ui/Card";

import ProductImage from "./ProductImage";

import ProductContent from "./ProductContent";

import ProductFooter from "./ProductFooter";

import FeaturedBadge from "./FeaturedBadge";

import RatingBadge from "./RatingBadge";

export default function ProductCard({
  product,

  onClick,
}) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -8,
      }}
    >
      <Card
        className="

                    p-5

                    h-full

                "
      >
        {product.featured && <FeaturedBadge />}

        <RatingBadge rating={product.rating} />

        <ProductImage product={product} />

        <div
          className="

                        mt-6

                    "
        >
          <ProductContent product={product} />

          <ProductFooter product={product} onClick={onClick} />
        </div>
      </Card>
    </motion.div>
  );
}
