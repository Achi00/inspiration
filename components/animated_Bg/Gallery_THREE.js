import * as THREE from 'three'
import { Suspense, useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import { EffectComposer, Glitch , Bloom } from '@react-three/postprocessing'
import Noodles from './Noodles'

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <pointLight position={[0, 1, 4]} intensity={0.1} />
        <ambientLight intensity={0.2} />
        <spotLight
          position={[1, 1, 1]}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      <BackGrid />
      <Suspense fallback={null}>
      <pointLight intensity={1} color="red" />
      <spotLight intensity={10.2} position={[70, 70, 70]} penumbra={1} color="lightblue" />
        <Noodles />
        <Rig />
      </Suspense>
    </Canvas>
  )
}

function BackGrid() {
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.FogExp2(0, 0.05);
  }, [scene]);

  // useFrame(() => (floorRef.current.position.y = scroll.offset * 6))
  return (
    <group>
    <Plane 
      position={[0, -2, -8]}
      rotation={[Math.PI / 2, 0, 0]}
      args={[80, 80, 128, 128]}
    >
      <meshStandardMaterial color="#ea5455" wireframe side={THREE.DoubleSide} />
    </Plane>
    </group>
  );
}


function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="#560bad" colorA="#480ca8" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
      </LayerMaterial>
      <EffectComposer multisampling={0}>
        <Bloom intensity={5.5} kernelSize={4} luminanceThreshold={0} luminanceSmoothing={0.0} />
        <Bloom mipmapBlur luminanceSmoothing={0} intensity={1.25} />
        <Glitch
            delay={[1.5, 5.5]} // min and max glitch delay
            duration={[0.05, 0.1]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
      </EffectComposer>
    </mesh>
  )
}