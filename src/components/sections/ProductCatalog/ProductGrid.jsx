import ProductCard from "../../common/ProductCard";
import { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductGrid({ products, onProductClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className="
        grid
        grid-cols-1
        gap-8

        md:grid-cols-2

        xl:grid-cols-4
      "
      >
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            onClick={() => {
              onProductClick(product);
              setSelectedProduct(product);
              setModalOpen(true);
            }}
          />
        ))}
      </div>
      <ProductModal
        key={selectedProduct?.id}
        product={selectedProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
