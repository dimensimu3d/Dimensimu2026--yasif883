// src/components/sections/ProductCatalog/ProductModal/ProductInfo/ProductMeta.jsx

import { Clock3, Box, Layers3, BriefcaseBusiness } from "lucide-react";

export default function ProductMeta({ product }) {
  if (!product) return null;

  const items = [
    {
      icon: Clock3,
      label: "Lead Time",
      value: product.leadTime,
    },
    {
      icon: Box,
      label: "Dimensi",
      value: product.dimensions,
    },
    {
      icon: Layers3,
      label: "Material",
      value: product.material?.join(", "),
    },
    {
      icon: BriefcaseBusiness,
      label: "Aplikasi",
      value: product.applications?.join(", "),
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Informasi Produk</h3>

      <div className="space-y-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/10
              "
            >
              <Icon size={18} className="text-cyan-400" />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-sm
                  text-zinc-400
                "
              >
                {label}
              </p>

              <p
                className="
                  mt-1
                  wrap-break-word
                  font-medium
                  text-white
                "
              >
                {value || "-"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
