import clsx from "clsx";

export default function GalleryThumbnail({ image, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        overflow-hidden
        rounded-2xl
        border
        transition-all
        duration-300
        `,
        active
          ? "border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,.35)]"
          : "border-white/10 hover:border-cyan-400/40",
      )}
    >
      <img
        src={image}
        loading="lazy"
        alt=""
        className="
          h-20
          w-20
          object-cover
        "
      />
    </button>
  );
}
