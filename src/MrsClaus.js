import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

//gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })


export default function MrsClaus(props) {
  const groupo = useRef();
  const { contextSafe } = useGSAP({ scope: groupo });   
  const onClick = contextSafe((currentElement) => {
    console.log(currentElement)
    currentElement.stopPropagation()
    //currentElement.bubbles = false;
    //currentElement.nativeEvent.stopPropagation();
    gsap.to(currentElement.object.rotation, { duration: 1, y: currentElement.object.rotation.y + Math.PI * 2 });


    });

  const { nodes, materials } = useGLTF('/mrs_claus.glb')
  return (
    <group {...props} dispose={null} onClick={onClick}>
      <mesh ref={groupo} 

        castShadow
        receiveShadow
        geometry={nodes['tripo_node_81480df9-1b58-4f0f-89a5-f305db66907a'].geometry}
        material={materials['tripo_material_81480df9-1b58-4f0f-89a5-f305db66907a']}
      />
    </group>
  )
}

useGLTF.preload('/mrs_claus.glb')
