import Lighting from "./Lighting";
import EnvironmentScene from "./EnvironmentScene";
import FloatingPrinter from "./FloatingPrinter";
import CameraRig from "./CameraRig";
import Effects from "./Effects";

export default function Scene() {
  return (
    <>
      <Lighting />

      <EnvironmentScene />

      <FloatingPrinter />

      <CameraRig />

      <Effects />
    </>
  );
}
