import Chip from "../../ui/Chip";

export default function CategoryFilter({
  categories,

  selected,

  onChange,
}) {
  return (
    <div
      className="

            flex

            flex-wrap

            gap-3

            "
    >
      {categories.map((category) => (
        <Chip
          key={category}
          active={selected === category}
          onClick={() => onChange(category)}
        >
          {category}
        </Chip>
      ))}
    </div>
  );
}
