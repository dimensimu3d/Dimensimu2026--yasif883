import { AnimatePresence, motion } from "framer-motion";
import DropdownItem from "./DropdownItem";

const OPTIONS = [
  { value: "default", label: "Default" },
  { value: "name", label: "Product Name" },
  { value: "category", label: "Category" },
];

export default function DropdownMenu({ open, value, onSelect }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          className="
            glass
            absolute
            right-0
            mt-2
            w-56
            rounded-2xl
            border
            border-white/10
            p-2
            z-30
          "
        >
          {OPTIONS.map((item) => (
            <DropdownItem
              key={item.value}
              active={value === item.value}
              onClick={() => onSelect(item.value)}
            >
              {item.label}
            </DropdownItem>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
