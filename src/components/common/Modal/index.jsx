import { AnimatePresence } from "framer-motion";

import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

export default function Modal({
  open,

  title,

  children,

  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <ModalOverlay onClose={onClose} />

          <div
            className="

                                fixed

                                inset-0

                                z-60

                                flex

                                items-center

                                justify-center

                                p-6

                            "
          >
            <ModalContent>
              <ModalHeader title={title} onClose={onClose} />

              {children}
            </ModalContent>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
