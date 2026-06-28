// src/components/sections/ProductCatalog/ProductModal/ProductInfo/WhatsAppButton.jsx

import { MessageCircle } from "lucide-react";
import Button from "../../../../common/Button";

export default function WhatsAppButton({ phone, product, selectedVariant }) {
  if (!product || !selectedVariant) return null;

  const message = [
    "Halo Dimensimu 👋",
    "",
    "Saya tertarik dengan produk berikut:",
    "",
    `Produk : ${product.name}`,
    `Varian : ${selectedVariant.name}`,
    `Material : ${selectedVariant.material}`,
    `Warna : ${selectedVariant.color}`,
    `SKU : ${selectedVariant.sku}`,
    `Harga : Rp${selectedVariant.price.toLocaleString("id-ID")}`,
    "",
    "Mohon informasi lebih lanjut. Terima kasih.",
  ].join("\n");

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <Button
      as="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full
        justify-center
        gap-2
        bg-green-500
        hover:bg-green-400
        text-white
      "
    >
      <MessageCircle size={20} />
      Hubungi via WhatsApp
    </Button>
  );
}
