import ProductHeader from "./ProductHeader";
import PriceCard from "./PriceCard";
import VariantSelector from "./VariantSelector";
import ProductMeta from "./ProductMeta";
import Tags from "./Tags";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductInfo({
  product,
  selectedVariant,
  onVariantChange,
  phone,
}) {
  if (!product) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <ProductHeader product={product} />

      {/* Price */}
      <PriceCard product={product} selectedVariant={selectedVariant} />

      {/* Variant */}
      <VariantSelector
        variants={product.variants}
        selectedVariant={selectedVariant}
        onChange={onVariantChange}
      />

      {/* Product Info */}
      <ProductMeta product={product} />

      {/* Tags */}
      <Tags title="Tags" items={product.tags} />

      {/* CTA */}
      <WhatsAppButton
        phone={phone}
        product={product}
        selectedVariant={selectedVariant}
      />
    </div>
  );
}
