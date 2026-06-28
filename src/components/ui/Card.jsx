import GradientBorder from "./GradientBorder";

export default function Card({
  children,

  className = "",

  ...props
}) {
  return (
    <div
      className={`
relative
glass
rounded-3xl
overflow-hidden

transition-all
duration-300

hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(34,211,238,.15)]

${className}

`}
      {...props}
    >
      <GradientBorder />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
