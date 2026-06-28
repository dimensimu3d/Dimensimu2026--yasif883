import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  const target = useRef(new THREE.Vector3());

  useFrame(() => {
    target.current.set(mouse.x * 0.5, mouse.y * 0.2 + 1.5, 6);

    camera.position.lerp(target.current, 0.05);

    camera.lookAt(0, 1, 0);
  });

  return null;
}
