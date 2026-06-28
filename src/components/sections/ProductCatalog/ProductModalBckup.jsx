import { AnimatePresence, motion } from "framer-motion";

import ProductViewer from "./ProductViewer";

import ProductInfo from "./ProductInfo";

export default function ProductModal({
  open,

  product,

  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="

fixed

inset-0

bg-black/80

backdrop-blur-md

z-50

flex

items-center

justify-center

p-6

"
          onClick={onClose}
        >
          <motion.div
            initial={{
              scale: 0.9,

              opacity: 0,
            }}
            animate={{
              scale: 1,

              opacity: 1,
            }}
            exit={{
              scale: 0.9,

              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="

glass

rounded-3xl

max-w-6xl

w-full

overflow-hidden

"
          >
            <div
              className="

grid

lg:grid-cols-2

"
            >
              <div className="h-125">
                <ProductViewer model={product.model} image={product.image} />
              </div>

              <div className="p-10">
                <ProductInfo product={product} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
