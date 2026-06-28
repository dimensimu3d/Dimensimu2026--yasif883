import { Star } from "lucide-react";

export default function RatingBadge({ rating }) {
  return (
    <div
      className="
        glass

        absolute

        right-4

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
      <Star size={14} fill="currentColor" />

      {rating}
    </div>
  );
}
