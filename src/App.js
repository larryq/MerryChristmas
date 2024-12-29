import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, useVideoTexture, useAnimations } from '@react-three/drei'
import { EffectComposer, Bloom, HueSaturation, BrightnessContrast, TiltShift2, WaterEffect, ToneMapping } from '@react-three/postprocessing'
import StackOfPresents from './StackOfPresents'
import Santa from './Santa'
import MrsClaus from './MrsClaus'

export default function App() {
  return (
    <Canvas gl={{ antialias: false }} flat shadows camera={{ position: [0, 0, 8], fov: 35 }}>
      <color attach="background" args={['#353535']} />
      <fog attach="fog" args={['#353535', 5, 20]} />
      <ambientLight intensity={2.5} />

      <MrsClaus position={[1.5, .225, 1]} scale={1.5}/> 
      <Santa position ={[-1.5, .225, 1]} scale={0.025}/>
      <Environment preset="city" />
      <OrbitControls autoRotate autoRotateSpeed={0.9} enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
      {/* <Postpro /> */}
    </Canvas>
  )
}

function Postpro() {
  return (
    <EffectComposer disableNormalPass>
      {/* <HueSaturation saturation={-1} /> */}
      {/* <BrightnessContrast brightness={0} contrast={0.25} /> */}
      <WaterEffect factor={0.15} />
      <TiltShift2 samples={6} blur={0.5} />
      <Bloom mipmapBlur luminanceThreshold={0} intensity={2} />
      <ToneMapping />
    </EffectComposer>
  )
}

function Caustics(props) {
  const texture = useVideoTexture('/caustics.mp4')
  return <spotLight decay={0} map={texture} castShadow {...props} />
}



