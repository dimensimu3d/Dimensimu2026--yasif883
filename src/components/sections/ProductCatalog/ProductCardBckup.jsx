import Card from "../../ui/Card";
import ProductBadge from "./ProductBadge";

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="
w-full
h-64
object-cover
"
      />

      <div className="p-6">
        <ProductBadge category={product.category} />

        <h3
          className="
text-2xl
font-bold
mt-4
"
        >
          {product.name}
        </h3>

        <p className="text-slate-400 mt-2">{product.material}</p>
      </div>
    </Card>
  );
}
