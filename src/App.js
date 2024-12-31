import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, useVideoTexture, useAnimations, Sparkles, Html } from '@react-three/drei'
import { EffectComposer, Bloom, HueSaturation, BrightnessContrast, TiltShift2, WaterEffect, ToneMapping } from '@react-three/postprocessing'
import Santa from './Santa'
import MrsClaus from './MrsClaus'
import Reindeer from './Reindeer'
import Reindeer2 from './Reindeer2'
import StackOfPresents from './StackOfPresents'
import StackOfPresents2 from './StackOfPresents2'
import Ornaments from './Ornaments'
import ChristmasTree1 from './ChristmasTree1'
import ReindeerIdle from './ReindeerIdle'

function Loader3() {
  return (
    <Html>
      <div id="loading-dialog" class="hidden">
        <img src="santa_and_mrs_claus.png" alt="Loading..." id="loading-image" />
      </div>
    </Html>
  );
}

export default function App() {
  return (
    <Canvas gl={{ antialias: false }} flat shadows camera={{ position: [0, 0, 8], fov: 35 }}>
      <color attach="background" args={['#353535']} />
      <fog attach="fog" args={['#353535', 5, 20]} />
      <ambientLight intensity={2.5} />
      <Suspense fallback={<Loader3 />}>


      
            <MrsClaus position={[1.5, .225, 1]} scale={1.5} rotation={[0, -Math.PI/2, 0]}/> 
            <Santa position ={[-1.5, .275, 1]} scale={0.020}/>
            <Reindeer2 position ={[0, .225, 1]} scale={1.48} rotation={[0, -Math.PI, 0]}/>
            <StackOfPresents position ={[1.5, 0, -1]} scale={0.5} rotation={[0, -Math.PI/2, 0]}/>
            <StackOfPresents2 position ={[-1.5, 0, -1]} scale={1} rotation={[0, -Math.PI/2, 0]}/>
            <Ornaments position ={[0, .65, -1]} scale={2.5} rotation={[0, -Math.PI/2, 0]}/>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.51, 0]} scale={100}>
              <planeGeometry />
              <meshLambertMaterial color="#ffffff" />
            </mesh>
            <Environment preset="city" />
            <OrbitControls autoRotate autoRotateSpeed={0.6} enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />

            <Sparkles color="white" count={1200} scale={10} size={1.5}/>
        </Suspense>
    </Canvas>
  )
}



