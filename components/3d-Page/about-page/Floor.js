
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Floor(props) {
  const { nodes, materials } = useGLTF("/floor.glb");
  const bakedTexture = useTexture('/floorBaked.jpg')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0, 0.01, 0]}
        scale={5}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/floor.glb");
