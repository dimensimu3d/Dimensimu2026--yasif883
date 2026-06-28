export default function DecorativeLine() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div
        className="
        w-20
        h-px
        bg-gradient-to-r
        from-transparent
        via-cyan-400
        to-cyan-500
        "
      />

      <div
        className="
        w-3
        h-3
        rounded-full
        bg-cyan-400
        mx-4
        shadow-[0_0_18px_rgba(34,211,238,.8)]
        "
      />

      <div
        className="
        w-20
        h-px
        bg-gradient-to-l
        from-transparent
        via-cyan-400
        to-cyan-500
        "
      />
    </div>
  );
}
