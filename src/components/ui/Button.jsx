import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const variants = {
    primary: "bg-cyan-400 text-black hover:shadow-[0_0_30px_#00F5FF]",
    secondary: "glass border border-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      type={type}
      className={`
                px-6
                py-3
                rounded-xl
                transition-all
                font-semibold
                ${variants[variant]}
                ${className}
            `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
