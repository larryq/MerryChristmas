import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export default function Ornaments(props) {
    const groupo = useRef();
    const { contextSafe } = useGSAP({ scope: groupo }); 
        const onClick = contextSafe((currentElement) => {
          currentElement.stopPropagation()
          gsap.to(currentElement.object.rotation, { duration: 1, y: currentElement.object.rotation.y + Math.PI * 2 });
    });
  const { nodes, materials } = useGLTF('/ornaments.glb')
  return (
    <group {...props} dispose={null} onClick={onClick}>
      <mesh ref={groupo}
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_9fb4a3b4-0674-4ae7-be12-ecf50bcdc9a6'].geometry}
        material={materials['tripo_material_9fb4a3b4-0674-4ae7-be12-ecf50bcdc9a6']}
      />
    </group>
  )
}

useGLTF.preload('/ornaments.glb')
