import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Html,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  const { scene } = useGLTF(url);

  return <primitive object={scene} scale={1.5} />;
}

function Loader() {
  return (
    <Html center>
      <div className="text-cyan-400">Loading...</div>
    </Html>
  );
}

export default function ProductViewer({
  model,

  image,
}) {
  if (!model) {
    return (
      <img
        src={image}
        className="
                w-full
                h-full
                object-cover
                rounded-2xl
                "
      />
    );
  }

  return (
    <Canvas
      camera={{
        position: [0, 1.5, 5],
        fov: 40,
      }}
    >
      <ambientLight intensity={1} />

      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Suspense fallback={<Loader />}>
        <Model url={model} />

        <Environment preset="city" />

        <ContactShadows blur={3} opacity={0.4} />
      </Suspense>

      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
