import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom intensity={0.8} luminanceThreshold={0.4} />
    </EffectComposer>
  );
}
