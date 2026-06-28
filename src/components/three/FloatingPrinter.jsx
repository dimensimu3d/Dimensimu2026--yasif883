import { Float } from "@react-three/drei";
import PrinterModel from "./PrinterModel";

export default function FloatingPrinter() {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <PrinterModel />
    </Float>
  );
}
