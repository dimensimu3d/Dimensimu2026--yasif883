export default function ModalBody({ children }) {
  return (
    <div
      className="
        max-h-[75vh]
        overflow-y-auto
        p-8
      "
    >
      {children}
    </div>
  );
}
