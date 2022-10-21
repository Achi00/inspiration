import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF, useTexture, Center, Decal, Text3D, Text, OrbitControls, ContactShadows, Environment, MeshReflectorMaterial, Plane, Lightformer, PerspectiveCamera, useScroll, ScrollControls, Tetrahedron } from '@react-three/drei'
import { Model } from '../components/3d-Page/about-page/AboutText'
import { Grid } from '../components/3d-Page/about-page/Grid'
import { Floor } from '../components/3d-Page/about-page/Floor'
import { Cubes } from '../components/3d-Page/about-page/Cubes'
import { Effects } from '../components/3d-Page/Effects'
const Content = () => {
  const { width } = useThree((state) => state.viewport)
 
  return (
    <>
    <group rotation={[0,Math.PI / 2,0]}>
    <Text
      position={[0, 1.5, -3]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#faa307"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`Tech--`}
    </Text>
    <Text
      position={[0, 0.5, -3]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#ff8500"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. \nTempora placeat alias`}
    </Text>
    </group>
    <group rotation={[0,Math.PI,0]}>
    <Text
      position={[0, 1.5, -3]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#48cae4"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`Company--`}
    </Text>
    <Text
      position={[0, 0.5, -3]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#48cae4"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. \nTempora placeat alias`}
    </Text>
    </group>
    <group rotation={[0,-Math.PI / 2,0]}>
    <Text
      position={[0, 1.5, -3]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#7b2cbf"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`Design--`}
    </Text>
    <Text
      position={[0, 0.5, -3]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#7b2cbf"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. \nTempora placeat alias`}
    </Text>
    </group>
    
    </>
  )
}

const Objects = () => {
  const group = useRef()
  useFrame(({ clock, state }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    // group.current.position.y = t / 3
    group.current.rotation.x += 0.005
    group.current.rotation.x = group.current.rotation.z -= 0.005
  })
  return(
    <group ref={group} position={[0,2,0]}>
        <Tetrahedron args={[1, 1]}>
        <meshBasicMaterial  color="#ff8500" wireframe />
        </Tetrahedron>
    </group>
  )
}

const Camera = () => {
  const ref = useRef()
  const scroll = useScroll()
  useFrame(() => (ref.current.position.z = -scroll.offset * 1,ref.current.rotation.y = scroll.offset * 3.5))
  return (
    <group ref={ref}>
    <PerspectiveCamera  
    makeDefault 
    fov={45}
    position={[4, 1.5, 4]} 
    rotation={[0, Math.PI / 4, 0]}/>
    </group>
  )
}


const about = () => {
  return (
  <Canvas style={{position: 'absolute', top: '0', left: '0', zIndex: '-1'}} gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} >
    <color attach="background" args={['#000000']} />
    <spotLight position={[-5, 15, 0]} angle={10} penumbra={1} castShadow intensity={1} shadow-bias={-0.0001} />
    <spotLight position={[5, 15, 0]} angle={10} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
    <ambientLight intensity={0.2} />
    <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
    <Suspense fallback={null}> 
    <ScrollControls pages={2}>
      <Camera />
    </ScrollControls>
      <Model /> 
      <Grid />
      <Content />
      <Cubes />
      <Objects />
    </Suspense>
    {/* <OrbitControls /> */}
    <hemisphereLight intensity={0.5} />
      <ContactShadows resolution={1024} frames={1} position={[0, 0.05, 0]} scale={15} blur={0.5} opacity={1} far={20} />
      <mesh scale={4} position={[3, 0.01, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 1, 1]} />
        <meshStandardMaterial color="blue" roughness={0.75} />
      </mesh>
      <mesh scale={2} position={[0, 0.01, 2]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 1, 1]} />
        <meshStandardMaterial color="blue" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[-3, 0.01, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.3, 0.5, 1, 1]} />
        <meshStandardMaterial color="purple" roughness={0.75} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#050505"
            metalness={1.9}
            roughness={0}
          />
        </mesh>
      <Effects />
 </Canvas>
  )
}

export default about