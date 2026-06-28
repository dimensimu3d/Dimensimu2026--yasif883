import { X } from "lucide-react";

export default function ClearButton({ visible, onClick }) {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="
        rounded-full
        p-1
        text-slate-400
        transition-colors
        hover:bg-white/10
        hover:text-white
      "
      type="button"
      aria-label="Clear search"
    >
      <X size={16} />
    </button>
  );
}
