export default function BlurCircle({
  top,

  left,

  color = "cyan",
}) {
  const colors = {
    cyan: "bg-cyan-400",
    purple: "bg-purple-500",
    blue: "bg-blue-500",
  };
  return (
    <div
      style={{
        top,

        left,
      }}
      className={`absolute w-80 h-80 rounded-full blur-[120px] opacity-20 ${colors[color]}`}
    />
  );
}
