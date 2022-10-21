import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import { EffectComposer, SSAO, Bloom, Noise } from '@react-three/postprocessing'
import FooterNoodles from './FooterNoodles'

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
      <pointLight intensity={1} color="red" />
      <spotLight intensity={10.2} position={[70, 70, 70]} penumbra={1} color="lightblue" />
        <FooterNoodles />
        <Caption>{`Inspiration in your inbox`}</Caption>
        <Rig />
      </Suspense>
    </Canvas>
  )
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
    <Text
      position={[0, 1, -9]}
      lineHeight={0.8}
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      color="#3f37c9"
      anchorY="middle">
      {children}
    </Text>
    <Text
      position={[0, -2, -5]}
      lineHeight={0.8}
      fontSize={width / 12}
      material-toneMapped={false}
      anchorX="center"
      color="#b5179e"
      anchorY="middle">
      Amazing art & design,
    </Text>
    </>
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
        <Depth colorB="purple" colorA="#6a040f" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        {/* <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} /> */}
      </LayerMaterial>
      <EffectComposer multisampling={0}>
        <Noise opacity={0.8} />
        <Bloom intensity={0.5} kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.3} />
        <Bloom intensity={0.5} kernelSize={4} luminanceThreshold={0} luminanceSmoothing={0.0} />
      </EffectComposer>
    </mesh>
  )
}
