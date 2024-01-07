import { useRef, useEffect } from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky2.glb";

export function Sky({ isRotating }) {
  const gltf = useGLTF(skyScene, true); // 'true' to draco decode if necessary
  const skyRef = useRef();

  // Optional: Check if GLTF is loaded
  useEffect(() => {
    if (gltf) {
      console.log("GLTF loaded", gltf);
    } else {
      console.log("Loading GLTF...");
    }
  }, [gltf]);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  if (!gltf) {
    return null; // or some loading placeholder
  }

  const { nodes, materials } = gltf;

  return (
    <a.group dispose={null}>
      <a.group rotation={[-Math.PI / 2, 0, 0]} scale={177.063}>
        <mesh
          ref={skyRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
        >
          <primitive object={gltf.scene}></primitive>
        </mesh>
      </a.group>
    </a.group>
  );
}
