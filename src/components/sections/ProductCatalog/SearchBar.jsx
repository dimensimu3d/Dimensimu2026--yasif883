import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
}) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-cyan-400
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          glass
          w-full
          rounded-2xl
          border
          border-white/10
          py-3
          pl-12
          pr-4
          text-white
          placeholder:text-slate-500
          outline-none
          focus:border-cyan-400
          transition
        "
      />
    </div>
  );
}
