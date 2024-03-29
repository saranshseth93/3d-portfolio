import React, { useRef, useEffect } from "react";
import { a } from "@react-spring/three";
import { useAnimations, useGLTF } from "@react-three/drei";

import mewtwoScene from "../../assets/3d/mewtwo.glb";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokedex-3d-pro-mewtwo-7954664d9c5142ebb22b36f7f90ef4f6
Title: PokeDex 3D pro Mewtwo
*/

const Mewtwo = (props) => {
  const mewtwoRef = useRef();
  const { nodes, materials, animations } = useGLTF(mewtwoScene);
  const { actions } = useAnimations(animations, mewtwoRef);

  useEffect(() => {
    if (actions && actions["ArmatureAction"]) {
      actions["ArmatureAction"].play();
    }
  }, [actions]);

  return (
    <>
      <a.group ref={mewtwoRef} {...props} dispose={null}>
        <a.group name="Sketchfab_Scene">
          <a.group
            name="Sketchfab_model"
            position={[-400, 40, 200]}
            rotation={[-Math.PI / 2, 0, 4.8]}
          >
            <a.group name="root" scale={8}>
              <a.group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <a.group
                  name="Armature_76"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={5}
                >
                  <a.group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials["Eye.004"]}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials["Body.003"]}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials["Body.003"]}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials["Body.003"]}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <a.group name="Object_0_72" />
                    <a.group name="Object_1_73" />
                    <a.group name="Object_2_74" />
                    <a.group name="Object_3_75" />
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

export default Mewtwo;
