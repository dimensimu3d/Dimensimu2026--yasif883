import { useGLTF } from "@react-three/drei";

export default function PrinterModel() {
  const model = useGLTF("/models/printer.glb");

  return <primitive object={model.scene} scale={2} />;
}
useGLTF.preload("/models/printer.glb");
