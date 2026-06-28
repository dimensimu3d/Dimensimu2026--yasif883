import { Sparkles } from "lucide-react";

export default function FeaturedBadge() {
  return (
    <div
      className="
        glass
        absolute
        left-4
        top-4
        z-20

        flex
        items-center
        gap-2

        rounded-full

        px-3

        py-1
      "
    >
      <Sparkles size={14} />

      <span className="text-xs">Featured</span>
    </div>
  );
}
