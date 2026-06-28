import { X } from "lucide-react";

export default function ModalHeader({ title, onClose }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-white/10
        px-8
        py-5
      "
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>

      <button
        onClick={onClose}
        className="
          rounded-full
          p-2
          transition
          hover:bg-white/10
        "
      >
        <X className="text-white" />
      </button>
    </div>
  );
}
