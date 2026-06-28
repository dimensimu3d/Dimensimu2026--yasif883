import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";

import { motion } from "framer-motion";

import PrinterModel from "../three/PrinterModel";

export default function Hero3D() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      relative
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-10
        items-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span
            className="
            px-4 py-2
            rounded-full
            bg-cyan-500/20
            text-cyan-400
            "
          >
            Professional 3D Printing
          </span>

          <h1
            className="
            text-5xl
            lg:text-6xl
            font-black
            mt-6
            mb-6
            "
          >
            Ubah Idemu Menjadi
            <span className="text-cyan-400"> Kenyataan</span>
          </h1>

          <p
            className="
            text-slate-400
            text-lg
            mb-8
            "
          >
            High precision 3D printing, rapid prototyping, product development,
            and custom manufacturing.
          </p>

          <div className="flex gap-4">
            <button
              className="
              bg-cyan-500
              text-black
              px-8
              py-3
              rounded-xl
              font-semibold
              "
            >
              Explore Catalog
            </button>

            <button
              className="
              border
              border-white/20
              px-8
              py-3
              rounded-xl
              "
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        <div
          className="
          h-150
          glass
          rounded-3xl
          overflow-hidden
          "
        >
          <Canvas camera={{ position: [0, 2, 6] }}>
            <ambientLight intensity={1.5} />

            <directionalLight position={[3, 3, 3]} />

            <Environment preset="city" />

            <Float speed={2} rotationIntensity={0.5}>
              <PrinterModel />
            </Float>

            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
