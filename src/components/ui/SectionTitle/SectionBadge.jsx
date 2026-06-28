export default function SectionBadge({ children }) {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-2
      px-5
      py-2
      rounded-full
      border
      border-cyan-400/20
      bg-cyan-400/5
      backdrop-blur-xl
      "
    >
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

      <span
        className="
        uppercase
        tracking-[0.3em]
        text-xs
        text-cyan-300
        font-semibold
        "
      >
        {children}
      </span>

      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
    </div>
  );
}
