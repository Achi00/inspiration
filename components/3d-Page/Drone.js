import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useTimer } from "use-timer";

export function Drone(props) {
  const { nodes, materials } = useGLTF("/drone.glb");
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    ref.current.position.y = (1 + Math.sin(t / 2)) / 10
  })

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? 'pointer' : 'auto'
  //   return ()=> document.body.style.cursor = 'auto';
  // }, [hovered])

  const { time, start, pause, reset, status } = useTimer();

  useFrame(() => {
    if (status === "RUNNING") {
     ref.current.position.x += 0.03;
     ref.current.position.y += 0.03;
    }
   
    if (status === "RUNNING" && time >= 0.1) {
     pause();
     reset();
    }
   })

   const handleClick = () => {
    if (status === "PAUSED" || status === "STOPPED") {
      start();
    }};

  return (
    <group {...props}
    position={active ? [0,1,0] : [0, 0.5,0]} 
    dispose={null} 
    ref={ref} 
    onClick={handleClick}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 63.8, 0.37]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              geometry={nodes["Box001_Material_#4_0"].geometry}
              material={materials.Material_4}
            />
          </group>
          <group position={[0, 63.8, 0.37]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              geometry={nodes["Object002_Material_#5_0"].geometry}
              material={materials.Material_5}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/drone.glb");