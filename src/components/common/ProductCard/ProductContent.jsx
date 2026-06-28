import Chip from "../../ui/Chip";
import { getTotalStock } from "../../../services/product.service";

export default function ProductContent({ product }) {
  return (
    <>
      <p
        className="
          text-cyan-400
          text-sm
        "
      >
        {product.category}
      </p>

      <h3
        className="
          mt-2
          text-xl
          font-bold
          text-white
        "
      >
        {product.name}
      </h3>

      <p
        className="
          mt-3
          line-clamp-2
          text-slate-400
        "
      >
        {product.shortDescription}
      </p>

      <div
        className="
          mt-5
          flex
          flex-wrap
          gap-2
        "
      >
        {product.material.slice(0, 2).map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-sm text-slate-400">
          Lead Time
          <span className="ml-2 text-cyan-400">{product.leadTime}</span>
        </p>

        <p className="text-sm text-slate-400">
          Stock
          <span className="ml-2 text-green-400">
            {getTotalStock(product)} pcs
          </span>
        </p>
      </div>
    </>
  );
}
