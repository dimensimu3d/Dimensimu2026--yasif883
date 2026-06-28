import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  as = "button",
  ...props
}) {
  const Component = as === "a" ? motion.a : motion.button;

  const variants = {
    primary: "bg-cyan-400 text-black hover:shadow-[0_0_30px_#00F5FF]",

    secondary: "glass border border-white/10 text-white",
  };

  return (
    <Component
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
