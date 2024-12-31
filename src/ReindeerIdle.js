import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, useVideoTexture, useAnimations } from '@react-three/drei'
  
  
  export default function ReindeerIdle(props) {
    const group = useRef()
    const [isChilling, setChilling] = useState(false);
    const { nodes, materials, animations } = useGLTF('/reindeer_idle.glb')
    //console.log(animations)
    const { actions } = useAnimations(animations, group)
    console.log(actions)
    // useEffect(() =>
    //   {
    //       const action = actions['rig|rig|walk|rig|walk']
    //       isChilling ?  action.reset().fadeIn(0.5).play() : /* action.fadeOut(2.5).stop() */null
    //       return () =>
    //         {
    //             action.fadeOut(0.5)
                
    //         }
    //   }, [isChilling])
    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="rig" rotation={[Math.PI / 2, 0, 0]}>
            <group name="reindeer">
              <skinnedMesh
                name="reindeer_1"
                onClick={ (event) => {setChilling(!isChilling); event.stopPropagation()} }
                geometry={nodes.reindeer_1.geometry}
                material={materials['tripo_material_47a37ccd-156b-4ce9-8879-8a771dfc5f16.001']}
                skeleton={nodes.reindeer_1.skeleton}
              />
              <skinnedMesh
                name="reindeer_2"
                geometry={nodes.reindeer_2.geometry}
                material={materials['eyes.001']}
                skeleton={nodes.reindeer_2.skeleton}
              />
            </group>
            <primitive object={nodes.body} />
          </group>
        </group>
      </group>
    //   <group ref={group} {...props} dispose={null} >
    //     <group name="Scene">
    //       <group name="rig" rotation={[Math.PI / 2, 0, 0]}>
    //         <skinnedMesh
    //           onClick={ (event) => {setChilling(!isChilling); event.stopPropagation()} }
    //           name="model"
    //           geometry={nodes.model.geometry}
    //           material={materials['mat_5e0128c0-8cf7-48ce-bc08-c1fc17951ada']}
    //           skeleton={nodes.model.skeleton}
    //         />
    //         <primitive object={nodes.root} />
    //       </group>
    //     </group>
    //   </group>
    )
  }
