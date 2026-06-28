import { X } from "lucide-react";

export default function ModalHeader({
  title,

  onClose,
}) {
  return (
    <div
      className="

                flex

                items-center

                justify-between

                border-b

                border-white/10

                px-8

                py-6

            "
    >
      <h2
        className="

                    text-2xl

                    font-bold

                "
      >
        {title}
      </h2>

      <button
        onClick={onClose}
        className="

                    rounded-xl

                    p-3

                    transition

                    hover:bg-white/10

                "
      >
        <X />
      </button>
    </div>
  );
}
