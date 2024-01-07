import React, { useRef, useEffect } from "react";
import { a } from "@react-spring/three";
import { useAnimations, useGLTF } from "@react-three/drei";

import geoScene from "../../assets/3d/geodude.glb";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ankush Gupta (https://sketchfab.com/Ankush4135)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/geodude-pokemon-6ef171b93a964203b7b72335e512a311
Title: Geodude Pokemon
*/

const Geodude = (props) => {
  const geoRef = useRef();
  const {
    nodes: geoNodes,
    materials: geoMaterials,
    animations: geoAnimations,
  } = useGLTF(geoScene);
  const { actions } = useAnimations(geoAnimations, geoRef);

  useEffect(() => {
    if (actions && actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  return (
    <>
      <a.group ref={geoRef} {...props} dispose={null}>
        <a.group name="Sketchfab_Scene">
          <a.group
            name="Sketchfab_model"
            rotation={[-Math.PI / 1.9, 0, 2.1]}
            position={[270, 70, -150]}
            scale={0.8}
          >
            <a.group
              name="8c373c4e5d3c40ca866961699c1d0d14fbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <a.group name="Object_2">
                <a.group name="RootNode">
                  <a.group name="Character">
                    <a.group name="modelGroup">
                      <a.group name="modelbody" />
                      <a.group name="modeleye" />
                      <a.group name="modeltongue" />
                    </a.group>
                    <a.group name="modelBaketransform1" scale={15}>
                      <a.group name="Object_10">
                        <primitive object={geoNodes._rootJoint} />
                        <skinnedMesh
                          name="Object_13"
                          geometry={geoNodes.Object_13.geometry}
                          material={geoMaterials.modelgeodude_Arnold_mat}
                          skeleton={geoNodes.Object_13.skeleton}
                        />
                        <skinnedMesh
                          name="Object_15"
                          geometry={geoNodes.Object_15.geometry}
                          material={geoMaterials.modelgeodude_Arnold_mat}
                          skeleton={geoNodes.Object_15.skeleton}
                        />
                        <skinnedMesh
                          name="Object_17"
                          geometry={geoNodes.Object_17.geometry}
                          material={geoMaterials.modelgeodude_Arnold_mat}
                          skeleton={geoNodes.Object_17.skeleton}
                        />
                        <a.group name="Object_12" />
                        <a.group name="Object_14" />
                        <a.group name="Object_16" />
                      </a.group>
                    </a.group>
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

export default Geodude;
