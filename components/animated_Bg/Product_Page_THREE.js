import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { Text, Plane } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import { EffectComposer, Glitch , Bloom, Noise } from '@react-three/postprocessing'
import Noodles from './Noodles'
import img from './img/adobe.jpeg'

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
      {/* <Image /> */}
      <pointLight intensity={1} color="red" />
      <spotLight intensity={10.2} position={[70, 70, 70]} penumbra={1} color="lightblue" />
        <Noodles />
        <Caption>{`Buy\nAdobe\nProducts`}</Caption>
        <Rig />
      </Suspense>
    </Canvas>
  )
}

function Image() {
    const texture = useLoader(THREE.TextureLoader, img)
    return (
      <mesh>
        <planeBufferGeometry attach="geometry" args={[6, 4]} />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
      </mesh>
    )
  }

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      fontSize={width / 15}
      material-toneMapped={false}
      anchorX="center"
      color="#FF9A00"
      anchorY="middle">
      {children}
    </Text>
  )
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
        <Depth colorB="blue" colorA="#001E36" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
      </LayerMaterial>
      <EffectComposer multisampling={0}>
        <Noise opacity={0.8} />
        <Bloom intensity={0.5} kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.3} />
        <Bloom intensity={0.5} kernelSize={4} luminanceThreshold={0} luminanceSmoothing={0.0} />
        <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.6, 1.0]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
      </EffectComposer>
    </mesh>
  )
}
