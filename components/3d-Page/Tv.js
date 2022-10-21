import React, { useRef, useState } from "react";
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";

const TV = () => {

    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = "/Adobe-ad.mp4";
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });
    return (
      <group rotation={[0, -Math.PI * 2, 0]}>
  
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.4, 1.1]} />
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video]} />
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </group>
    );
  }

export function TvScreen(props) {
  const { nodes, materials } = useGLTF("/tv.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI * 2 ]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0.01, 83.88, 6.77]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.tv_base_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[0, 148.66, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn_base_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-10, 163.89, 0]}
            rotation={[-Math.PI / 2, -0.42, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn1_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-19.77, 186.01, 0]}
            rotation={[-Math.PI / 2, -0.42, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn2_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-33.98, 218.19, 0]}
            rotation={[-Math.PI / 2, -0.42, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn3_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-43.32, 239.32, 0]}
            rotation={[-Math.PI / 2, -0.42, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn4_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          {/*  */}
          <group
            position={[-4, 71.96, 61.71]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.frontal_panel_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-17.08, 73.29, 61.33]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <TV />
            {/* <mesh
              geometry={nodes.screen_low_Material_0.geometry}
              material={materials.Material}
            /> */}
          </group>
          <group
            position={[0.47, 71.94, -51.61]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.back_1_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          {/*  */}
          <group
            position={[69.12, 108.79, 69.55]}
            rotation={[0, 0.06, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.switch_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-26.35, 71.32, -66.9]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.back_2_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-62.36, -2.7, 42.57]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.leg_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[55.5, 21.46, -55.56]}
            rotation={[-1.21, -0.11, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.back_rubber_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[111.02, -2.34, -55.46]}
            rotation={[-2.53, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.cable_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[142.75, -2.88, 80.19]}
            rotation={[-Math.PI / 2, 0, 0.22]}
            scale={100}
          >
            <mesh
              geometry={nodes.plug_low_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[69.12, 77.92, 69.55]}
            rotation={[0, 0.06, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.switch_low001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[17.72, 158.53, 0]}
            rotation={[-Math.PI / 2, 0.8, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn1_low001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[24.25, 164.89, 0]}
            rotation={[-Math.PI / 2, 0.8, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn2_low001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[43.07, 183.24, 0]}
            rotation={[-Math.PI / 2, 0.8, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn3_low001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[59.62, 199.37, 0]}
            rotation={[-Math.PI / 2, 0.8, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.antenn4_low001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Plane_qr_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tv.glb");