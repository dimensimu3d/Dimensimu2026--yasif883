import Button from "../../ui/Button";
import { getLowestPrice }  from "../../../services/product.service";


export default function ProductFooter({ product, onClick }) {
  const lowestPrice = getLowestPrice(product);
  return (
    <div
      className="
        mt-8

        flex

        items-center

        justify-between
      "
    >
      <div>
        <p
          className="
            text-sm

            text-slate-500
          "
        >
          Starting From
        </p>

        <h3
          className="
            text-2xl

            font-bold

            text-cyan-400
          "
        >
          Rp {lowestPrice.toLocaleString("id-ID")}
        </h3>
      </div>

      <Button onClick={onClick}>Detail</Button>
    </div>
  );
}
