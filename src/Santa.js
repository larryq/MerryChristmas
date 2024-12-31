import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, useVideoTexture, useAnimations } from '@react-three/drei'
  
  
  export default function Santa(props) {
    const group = useRef()
    const [isWalking, setWalking] = useState(false);
    //let isWalking = false;
    const { nodes, materials, animations } = useGLTF('/santa.glb')
    //console.log(animations)
    const { actions } = useAnimations(animations, group)
    console.log(actions)
    useEffect(() =>
      {
          const action = actions['rig|rig|walk|rig|walk']
          isWalking ?  action.reset().fadeIn(0.5).play() : /* action.fadeOut(2.5).stop() */null
          console.log("sdfsdfsfdsdfsdf")
          return () =>
            {
                action.fadeOut(0.5)
                
            }
      }, [isWalking])
    return (
      <group ref={group} {...props} dispose={null} >
        <group name="Scene">
          <group name="rig" rotation={[Math.PI / 2, 0, 0]}>
            <skinnedMesh
              onClick={ (event) => {setWalking(!isWalking); event.stopPropagation()} }
              name="model"
              geometry={nodes.model.geometry}
              material={materials['mat_5e0128c0-8cf7-48ce-bc08-c1fc17951ada']}
              skeleton={nodes.model.skeleton}
            />
            <primitive object={nodes.root} />
          </group>
        </group>
      </group>
    )
  }
