import React, { useRef } from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";

import pikaScene from "../../assets/3d/pikachu.glb";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Raghav Gupta (https://sketchfab.com/raghav-wd)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pikachu-37c740f674cd4719a1d1d2970bbe8c30
Title: Pikachu
*/

const Pika = (props) => {
  const pikaRef = useRef();
  const { nodes: pikaNodes, materials: pikaMaterials } = useGLTF(pikaScene);
  return (
    <>
      <a.group ref={pikaRef} {...props} dispose={null}>
        <a.group name="Sketchfab_Scene">
          <a.group
            name="Sketchfab_model"
            position={[230, 38, 100]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <a.group name="root">
              <a.group
                name="GLTF_SceneRootNode"
                rotation={[Math.PI / 2, 1.5, 0]}
              >
                <a.group
                  name="Pikachu_49"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.4}
                >
                  <a.group name="GLTF_created_0">
                    <primitive object={pikaNodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={pikaNodes.Object_7.geometry}
                      material={pikaMaterials.Material_160}
                      skeleton={pikaNodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_8"
                      geometry={pikaNodes.Object_8.geometry}
                      material={pikaMaterials["Material.001"]}
                      skeleton={pikaNodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={pikaNodes.Object_9.geometry}
                      material={pikaMaterials["Material.003"]}
                      skeleton={pikaNodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={pikaNodes.Object_10.geometry}
                      material={pikaMaterials["Material.002"]}
                      skeleton={pikaNodes.Object_10.skeleton}
                    />
                    <a.group name="PikachuM_48" />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </>
  );
};

export default Pika;
