import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Stars
          radius={150}
          depth={70}
          count={6000}
          factor={6}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
