import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Room1(props) {
  const { nodes } = useGLTF("/room.glb");
  const bakedTexture = useTexture('/bakedDay.jpg')
  const AdobeLogo = useTexture('/Adobe-logo.png')
  return (
    <group {...props} dispose={null}>
      <group position={[0.81, 1.3, -1.53]}>
        <mesh
          geometry={nodes.Cube318.geometry}
          material={nodes.Cube318.material}
          position={[-0.68, 0.12, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      </group>
      <mesh
        geometry={nodes.Cube320.geometry}
        material={nodes.Cube320.material}
        position={[4.87, 3.15, -0.53]}
        rotation={[0, Math.PI / 2, 0]}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      <mesh
        geometry={nodes.Plane013.geometry}
        material={nodes.Plane013.material}
        position={[-1.4, 2.66, -3.42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      <mesh
        geometry={nodes.Plane034.geometry}
        material={nodes.Plane034.material}
        position={[-0.06, 4.59, -4.56]}
        rotation={[1.82, -0.09, -0.34]}
        scale={1.1}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      <mesh
        geometry={nodes.led2.geometry}
        material={nodes.led2.material}
        position={[1.02, 1.12, 1]}
        rotation={[0.04, Math.PI / 2, 0]}
        scale={0.02}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      <mesh
        geometry={nodes.led3.geometry}
        material={nodes.led3.material}
        position={[1.02, 1.11, 1.04]}
        rotation={[0.12, Math.PI / 2, 0]}
        scale={0.02}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      <mesh
        geometry={nodes.led1.geometry}
        material={nodes.led1.material}
        position={[1.02, 1.12, 0.96]}
        rotation={[-0.04, -Math.PI / 2, 0]}
        scale={0.02}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      <mesh
        geometry={nodes.led0.geometry}
        material={nodes.led0.material}
        position={[1.02, 1.11, 0.92]}
        rotation={[-0.12, -1.57, 0]}
        scale={0.02}
      ><meshBasicMaterial map={bakedTexture} map-flipY={false} /></mesh>
      {/* pc monitor small */}
      <mesh
        geometry={nodes.top001.geometry}
        material={nodes.top001.material}
        position={[2.22, 2.62, -4.3]}
        rotation={[1.52, -0.02, 0.3]}
      >
        <meshBasicMaterial map={AdobeLogo}  />
      </mesh>
      {/* pc monitor 1 */}
      <mesh
        geometry={nodes.Cube271.geometry}
        material={nodes.Cube271.material}
        position={[0.31, 3.36, -4.59]}
        rotation={[0, 1.57, -1.57]}
      >
        <meshBasicMaterial map={AdobeLogo}  />
      </mesh>
    </group>
  );
}

useGLTF.preload("/room.glb");