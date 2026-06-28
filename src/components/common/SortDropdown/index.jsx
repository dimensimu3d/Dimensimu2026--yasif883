import { useState } from "react";

import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";

const LABELS = {
  default: "Sort by",
  name: "Product Name",
  category: "Category",
};

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);

  function handleSelect(val) {
    onChange(val);
    setOpen(false);
  }

  return (
    <div className="relative">
      <DropdownButton
        label={LABELS[value]}
        open={open}
        onClick={() => setOpen(!open)}
      />

      <DropdownMenu open={open} value={value} onSelect={handleSelect} />
    </div>
  );
}
