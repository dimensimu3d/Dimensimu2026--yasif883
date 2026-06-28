import { useState } from "react";
import Modal from "../../../common/Modal";

import ProductModalBody from "./ProductModalBody";
import DescriptionSection from "./DescriptionSection";
import SpecificationSection from "./SpecificationSection";
import ApplicationsSection from "./ApplicationsSection";

export default function ProductModal({ product, open, onClose }) {
  const [selectedVariantId, setSelectedVariantId] = useState(() => null);

  if (!product) return null;

  const defaultVariantId = product.variants[0]?.id;

  const selectedVariant =
    product.variants.find((variant) => variant.id === selectedVariantId) ??
    product.variants.find((variant) => variant.id === defaultVariantId);
  return (
    <Modal open={open} title={product.name} onClose={onClose} size="xl">
      <div className="max-h-[85vh] overflow-y-auto">
        <ProductModalBody
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariantId}
        />

        <div className="space-y-12 p-8">
          <DescriptionSection product={product} />

          <SpecificationSection product={product} />

          <ApplicationsSection product={product} />
        </div>
      </div>
    </Modal>
  );
}
