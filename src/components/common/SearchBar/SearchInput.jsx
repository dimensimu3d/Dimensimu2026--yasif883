import SearchIcon from "./SearchIcon";
import ClearButton from "./ClearButton";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search products...",
}) {
  return (
    <div
      className="
        glass
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        px-4
        py-3
      "
    >
      <SearchIcon />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          flex-1
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-500
        "
      />

      <ClearButton
        visible={value.length > 0}
        onClick={() =>
          onChange({
            target: {
              value: "",
            },
          })
        }
      />
    </div>
  );
}
