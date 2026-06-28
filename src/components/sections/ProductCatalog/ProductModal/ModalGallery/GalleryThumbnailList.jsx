import GalleryThumbnail from "./GalleryThumbnail";

export default function GalleryThumbnailList({
  images,
  activeImage,
  onSelect,
}) {
  if (!images.length) return null;

  return (
    <div
      className="
        flex
        gap-4
        overflow-x-auto
        pb-2
      "
    >
      {images.map((image) => (
        <GalleryThumbnail
          key={image}
          image={image}
          active={image === activeImage}
          onClick={() => onSelect(image)}
        />
      ))}
    </div>
  );
}
