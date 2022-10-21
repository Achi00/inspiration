import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/text.glb");
  const bakedTexture = useTexture('/textBaked.jpg')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[0, 0.25, -2.98]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/text.glb");
