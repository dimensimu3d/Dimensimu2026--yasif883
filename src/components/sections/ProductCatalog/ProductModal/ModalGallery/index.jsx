import { useMemo, useState } from "react";

import GalleryMainImage from "./GalleryMainImage";
import GalleryThumbnailList from "./GalleryThumbnailList";

export default function ModalGallery({ product }) {
  const images = useMemo(() => {
    if (!product) return [];

    const gallery = Array.isArray(product.gallery) ? product.gallery : [];

    if (product.thumbnail && !gallery.includes(product.thumbnail)) {
      return [product.thumbnail, ...gallery];
    }

    return gallery;
  }, [product]);

  const [selectedImage, setSelectedImage] = useState(null);

  const activeImage =
    selectedImage && images.includes(selectedImage)
      ? selectedImage
      : images[0] || "";

  if (!product) return null;

  return (
    <div className="space-y-6">
      <GalleryMainImage product={product} image={activeImage} />

      <GalleryThumbnailList
        images={images}
        activeImage={activeImage}
        onSelect={setSelectedImage}
      />
    </div>
  );
}
