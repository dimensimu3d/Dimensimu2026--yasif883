import ProductBadge from "./ProductBadge";
import Button from "../../ui/Button";

export default function ProductInfo({ product }) {
  const message = `Halo,

Saya tertarik dengan produk:

${product.name}

Mohon informasi harga.

Terima kasih.`;

  return (
    <div>
      <ProductBadge category={product.category} />

      <h2
        className="

text-4xl

font-bold

mt-5

"
      >
        {product.name}
      </h2>

      <div
        className="

mt-8

space-y-3

"
      >
        <p>
          <b>Material</b>

          {product.material}
        </p>

        <p>
          <b>Technology</b>

          {product.technology}
        </p>
      </div>

      <p
        className="

mt-8

text-slate-400

leading-8

"
      >
        {product.description}
      </p>

      <div className="mt-10">
        <Button
          onClick={() => {
            window.open(
              `https://wa.me/628123456789?text=${encodeURIComponent(message)}`,
            );
          }}
        >
          Request Quotation
        </Button>
      </div>
    </div>
  );
}
