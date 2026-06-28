import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Scene from "../three/Scene";
import Loader from "../three/Loader";

export default function HeroCanvas() {
  return (
    <div className="h-[650px] w-full rounded-[32px] overflow-hidden glass">
      <Canvas
        shadows
        camera={{
          position: [0, 1.5, 6],
          fov: 40,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
