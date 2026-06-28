import { useGLTF } from "@react-three/drei";
import { asset } from "../../utils/asset";

export default function PrinterModel() {
  const model = useGLTF(asset("/models/printer.glb"));

  return <primitive object={model.scene} scale={2} />;
}
useGLTF.preload(asset("/models/printer.glb")) ;
