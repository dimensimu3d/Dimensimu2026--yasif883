import { motion } from "framer-motion";
import { asset } from "../../../utils/asset";
import Card from "../../ui/Card";

export default function AboutImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      className="relative"
    >
      <Card>
        <img
          src={asset("/images/about.jpg")}  
          alt="About"
          className="
                    w-full
                    rounded-3xl
                    object-cover
                    "
        />
      </Card>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
                absolute

                bottom-8

                right-8

                glass

                rounded-2xl

                p-6
                "
      >
        <h2 className="text-4xl font-bold text-cyan-400">5000+</h2>

        <p>Products Printed</p>
      </motion.div>
    </motion.div>
  );
}
