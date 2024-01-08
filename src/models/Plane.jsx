import { useEffect, useRef } from "react";
import { a } from "@react-spring/three";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/mew-flying.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { nodes, materials, scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    // if (isRotating) {
    actions["Take 001"].play();
    // } else {
    //   actions["Take 001"].stop();
    // }
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene}>
        <a.group ref={ref} {...props} dispose={null}>
          <a.group name="Sketchfab_Scene" position={[0, 0, 0]}>
            <a.group
              name="Sketchfab_model"
              rotation={[-Math.PI / 2, 0, -0.7]}
              position={[0, 0, 0]}
              scale={0.1}
            >
              <a.group
                name="75afd621d7d146fda0d38fe0b2c7af9dfbx"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <a.group name="Object_2">
                  <a.group name="RootNode">
                    <a.group name="Object_4">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_7"
                        geometry={nodes.Object_7.geometry}
                        material={materials.blinn1}
                        skeleton={nodes.Object_7.skeleton}
                      />
                      <a.group name="Object_6" />
                      <a.group name="Mew" />
                    </a.group>
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </primitive>
    </mesh>
  );
}
