import { motion } from "framer-motion";

export default function Tags({ title, items = [] }) {
  if (!items.length) return null;

  return (
    <div className="space-y-4">
      {title && (
        <h3
          className="
            text-lg
            font-semibold
            text-white
          "
        >
          {title}
        </h3>
      )}

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >
        {items.map((item, index) => (
          <motion.span
            key={`${item}-${index}`}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
              transition-colors
              hover:border-cyan-400
              hover:bg-cyan-400/15
            "
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
