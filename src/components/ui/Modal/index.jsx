import { AnimatePresence } from "framer-motion";

import Portal from "./Portal";
import ModalOverlay from "./ModalOverlay";
import ModalContainer from "./ModalContainer";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

function Modal({ open, children, onClose, size }) {
  return (
    <AnimatePresence>
      {open && (
        <Portal>
          <div
            className="
              fixed
              inset-0
              z-100
              flex
              items-center
              justify-center
              p-5
            "
          >
            <ModalOverlay onClose={onClose} />

            <ModalContainer size={size}>{children}</ModalContainer>
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
}

Modal.Header = ModalHeader;

Modal.Body = ModalBody;

Modal.Footer = ModalFooter;

export default Modal;
