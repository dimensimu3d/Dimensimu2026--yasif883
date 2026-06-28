// src/components/sections/ProductCatalog/ProductModal/ProductInfo/PriceCard.jsx

import Card from "../../../../ui/Card";

export default function PriceCard({ product, selectedVariant }) {
  if (!product || !selectedVariant) return null;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  const info = [
    {
      label: "Stock",
      value: `${selectedVariant.stock} pcs`,
    },
    {
      label: "Lead Time",
      value: product.leadTime,
    },
    {
      label: "SKU",
      value: selectedVariant.sku,
    },
  ];

  return (
    <Card className="p-6 space-y-6">
      <div>
        <p className="text-sm text-zinc-400">Harga</p>

        <h3
          className="
            mt-2
            text-3xl
            font-bold
            text-cyan-400
          "
        >
          {formatter.format(selectedVariant.price)}
        </h3>
      </div>

      <div className="h-px bg-white/10" />

      <div className="space-y-4">
        {info.map((item) => (
          <div
            key={item.label}
            className="
              flex
              items-center
              justify-between
            "
          >
            <span className="text-zinc-400">{item.label}</span>

            <span
              className="
                font-medium
                text-white
              "
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
