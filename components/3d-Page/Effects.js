import { EffectComposer, Bloom, ChromaticAberration, DotScreen } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export function Effects() {
  return (
      <EffectComposer>
        <ChromaticAberration
    offset={[0.001, 0.002]} // color offset
  />
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={5.75} />
        <DotScreen
            blendFunction={BlendFunction.NORMAL} // blend mode
            angle={10} // angle of the dot pattern
            scale={10} // scale of the dot pattern
          />
      </EffectComposer>
  )
}