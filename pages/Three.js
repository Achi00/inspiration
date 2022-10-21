import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Text, PresentationControls, ContactShadows, ScrollControls, useScroll, PerspectiveCamera, Plane, OrbitControls, Html, useGLTF } from '@react-three/drei'
import { Room1 } from '../components/3d-Page/room1'
import { Drone } from '../components/3d-Page/Drone'
import { TvScreen } from '../components/3d-Page/Tv'
import { client } from '../lib/client'
import Level from '../components/3d-Page/Level'
import Sudo from '../components/3d-Page/Sudo'
import Cactus from '../components/3d-Page/Cactus'
import Icon from '../components/3d-Page/Icon'
import Pyramid from '../components/3d-Page/Pyramid'

const Content = () => {
  const { width } = useThree((state) => state.viewport)
  return (
    <group>
    <Text
      position={[0.5, 0.3, 1.2]}
      lineHeight={0.8}
      fontSize={width / 40}
      material-toneMapped={false}
      anchorX="center"
      color="#FF4651"
      font={'/Technology-BoldItalic.ttf'}
      anchorY="middle">
      {`01 Basic \nScene`}
    </Text>

    <Text
      position={[-1.5, 0, 0.5]}
      lineHeight={0.8}
      fontSize={width / 55}
      // rotation={[0, Math.PI / 2, 0]}
      material-toneMapped={false}
      anchorX="center"
      color="red"
      font='/VarelaRound-Regular.ttf'
      anchorY="middle">
      {`Illustrator and \nPhotoshop. \nBetter together.`}
    </Text>
    <Text
      position={[-0.45, 2, -0.5]}
      lineHeight={1}
      fontSize={0.1}
      // rotation={[0, Math.PI / 2, 0]}
      material-toneMapped={false}
      anchorX="center"
      color="red"
      anchorY="middle">
      {`Get 20+ creative desktop\nand mobile apps,\nincluding Photoshop,\nIllustrator, InDesign, \nPremiere Pro, and Acrobat pro.`}
    </Text>
    <Text
      position={[1.8, 2, 0.2]}
      lineHeight={1}
      fontSize={width / 30}
      font={'/Technology-BoldItalic.ttf'}
      material-toneMapped={false}
      anchorX="center"
      color="red"
      anchorY="middle">
      {`02\nModeling`}
    </Text>
    
    </group>
  )
}

const CC = () => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/cc.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
  return (
    <group rotation={[0, 0, 0]} position={[0.465,2.535,-2.84]}>

      <mesh rotation={[0, 0, 0]}>
        <planeGeometry args={[0.85, 0.455]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

const Camera = () => {
  const ref = useRef()
  const scroll = useScroll()
  useFrame(() => (ref.current.position.z = -scroll.offset * 2,ref.current.position.y = scroll.offset * 2))
  return (
    <group ref={ref}>
    <PerspectiveCamera  
    makeDefault 
    position={[3, 1, 3]} 
    rotation={[0, Math.PI / 4, 0]}/>
    </group>
  )
}


const Three = () => {
  
  return (
    <Canvas style={{position: 'absolute', top: '0', left: '0', zIndex: '-1'}} gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} >
       <color attach="background" args={['#F8BCAC']} />
      <Suspense fallback={null}>  
      <ScrollControls pages={1}>
        <ContactShadows resolution={1024} frames={1} position={[0, -0.78, 0]} scale={15} blur={0.5} opacity={1} far={20} />
      <Content />
        <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
         <directionalLight castShadow intensity={0.8} position={[7, 5, 6]} shadow-mapSize={[1024, 1024]} />
          <group position-y={-0.75} dispose={null}>
              <Room1 scale={0.2} position={[0.1,2,-2]} rotation={[0, Math.PI / 2, 0]}/>
              <Level />
              <CC />
              <Sudo />
              <Camera />
              <Cactus />
              <Icon />
              <Pyramid />
              <TvScreen position={[2,0,-1.5]} scale={0.5}/>
              <group  position={[0,1.5,2]}>
              <Drone scale={0.2} />
              </group>
          </group>
        </PresentationControls> 
        </ScrollControls>
    </Suspense>
    </Canvas>
  )
}

export async function getServerSideProps() {
  const photosQuery = '*[_type == "gallery"]';
  const photos = await client.fetch(photosQuery);

  return { props: { photos } }
}

export default Three