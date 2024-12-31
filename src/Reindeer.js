import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export default function Reindeer(props) {
const groupo = useRef();
const { contextSafe } = useGSAP({ scope: groupo }); // we can pass in a config object as the 1st parameter to make scoping simple
const tl = gsap.timeline();
const onClick = contextSafe((currentElement) => {

   tl.to(currentElement.object.position, { duration: 1, y: currentElement.object.position.y + Math.PI * 2 /10 })
   .to(currentElement.object.position, { duration: 1, y: 0/*currentElement.object.position.y - Math.PI * 2 / 10*/})
   ; currentElement.stopPropagation()
});

  const { nodes, materials } = useGLTF('/reindeer.glb')
  return (
    <group {...props} dispose={null} ref={groupo} onClick={onClick}>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes['tripo_mesh_47a37ccd-156b-4ce9-8879-8a771dfc5f16'].geometry}
        material={materials['tripo_material_47a37ccd-156b-4ce9-8879-8a771dfc5f16']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_mesh_47a37ccd-156b-4ce9-8879-8a771dfc5f16_1'].geometry}
        material={materials.eyes}
      />
    </group>
  )
}

useGLTF.preload('/reindeer.glb')
