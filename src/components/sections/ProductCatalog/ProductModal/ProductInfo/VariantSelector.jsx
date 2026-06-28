import clsx from "clsx";

export default function VariantSelector({
  variants = [],
  selectedVariant,
  onChange,
}) {
  if (!variants.length) return null;

  return (
    <div className="space-y-4">
      <h3
        className="
          text-lg
          font-semibold
          text-white
        "
      >
        Pilih Varian
      </h3>

      <div className="space-y-3">
        {variants.map((variant) => {
          const active = selectedVariant?.id === variant.id;

          const outOfStock = variant.stock <= 0;

          const lowStock = variant.stock > 0 && variant.stock < 10;

          return (
            <button
              key={variant.id}
              type="button"
              disabled={outOfStock}
              onClick={() => onChange(variant.id)}
              className={clsx(
                `
                w-full
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-300
                `,
                active
                  ? `
                    border-cyan-400
                    bg-cyan-400/10
                    shadow-[0_0_20px_rgba(0,255,255,.18)]
                  `
                  : `
                    border-white/10
                    hover:border-cyan-400/30
                  `,
                outOfStock &&
                  `
                  cursor-not-allowed
                  opacity-50
                `,
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h4
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {variant.name}
                  </h4>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      text-sm
                      text-zinc-400
                    "
                  >
                    <span>Material : {variant.material}</span>

                    <span>•</span>

                    <span>Warna : {variant.color}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  {outOfStock ? (
                    <span
                      className="
                        rounded-full
                        bg-red-500/20
                        px-3
                        py-1
                        text-xs
                        text-red-300
                      "
                    >
                      Habis
                    </span>
                  ) : lowStock ? (
                    <span
                      className="
                        rounded-full
                        bg-yellow-500/20
                        px-3
                        py-1
                        text-xs
                        text-yellow-300
                      "
                    >
                      Stok Menipis
                    </span>
                  ) : (
                    <span
                      className="
                        rounded-full
                        bg-green-500/20
                        px-3
                        py-1
                        text-xs
                        text-green-300
                      "
                    >
                      Ready
                    </span>
                  )}

                  <span
                    className="
                      text-sm
                      text-zinc-400
                    "
                  >
                    {variant.stock} pcs
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
