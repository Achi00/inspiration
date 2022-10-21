import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Grid(props) {
  const { nodes, materials } = useGLTF("/grid.glb");
  const bakedTexture = useTexture('/gridBaked.jpg')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0, 0.04, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/grid.glb");