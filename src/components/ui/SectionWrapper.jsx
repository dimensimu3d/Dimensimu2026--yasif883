import { motion } from "framer-motion";
import Container from "./Container";

export default function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_60%)]
        pointer-events-none
        "
      />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
