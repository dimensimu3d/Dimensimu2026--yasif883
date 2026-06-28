export default function GlowText({ children }) {
  return (
    <span
      className="
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-purple-500

            bg-clip-text

            text-transparent

            drop-shadow-[0_0_18px_rgba(0,245,255,.5)]
            "
    >
      {children}
    </span>
  );
}
