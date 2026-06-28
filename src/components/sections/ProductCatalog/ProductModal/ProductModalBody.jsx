import ModalGallery from "./ModalGallery";
import ProductInfo from "./ProductInfo";

export default function ProductModalBody({ product, selectedVariant, onVariantChange }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10

        p-8
      "
    >
      <ModalGallery product={product} />

      <ProductInfo
        product={product}
        selectedVariant={selectedVariant}
        onVariantChange={onVariantChange}
        phone={"085282318710"}
      />
    </div>
  );
}
