import * as THREE from 'three'
import { useState, useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Float, RoundedBox, Sphere } from '@react-three/drei'

function Noodle() {
  const { viewport, camera } = useThree()
  const [speed] = useState(() => 0.2 + Math.random() / 10)
  const position = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport])
  return (
    <Float position={position} speed={speed} rotationIntensity={100} floatIntensity={90} dispose={null}>
      <RoundedBox args={[1, 1, 1]} radius={0.5} smoothness={4}>
        <meshPhongMaterial color="#480ca8" wireframe />
      </RoundedBox>
      <Sphere args={[1, 1, 1]} radius={0.05} smoothness={4}>
        <meshPhongMaterial color="red" wireframe />
      </Sphere>
    </Float>
  )
}

export default function Noodles() {
  return Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)
}

