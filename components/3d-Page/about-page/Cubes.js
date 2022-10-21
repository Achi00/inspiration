
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Cubes(props) {
  const { nodes, materials } = useGLTF("/cubes.glb");
  const bakedTexture = useTexture('/cubeBaked.jpg')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-3.75, 0.21, 0.96]}
        scale={0.2}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-3.75, 0.21, 0.49]}
        scale={0.2}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-3.75, 0.21, 0]}
        scale={0.2}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-3.75, 0.62, 0.23]}
        scale={0.2}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-3.75, 0.62, 0.73]}
        scale={0.2}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-3.75, 1.02, 0.48]}
        scale={0.2}
        >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/cubes.glb");