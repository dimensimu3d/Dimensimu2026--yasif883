import { ChevronDown } from "lucide-react";

export default function DropdownButton({ label, open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        glass
        flex
        items-center
        justify-between
        gap-3
        rounded-2xl
        border
        border-white/10
        px-4
        py-3
        min-w-52
        text-white
      "
    >
      <span>{label}</span>

      <ChevronDown
        size={18}
        className={`transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
}
