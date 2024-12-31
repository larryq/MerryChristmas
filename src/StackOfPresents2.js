import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export default function StackOfPresents2(props) {
    const [presentGlow, setPresentGlow] = useState(true);
  const { nodes, materials } = useGLTF('/stack_of_presents2.glb')
  const groupo = useRef();
  const { contextSafe } = useGSAP({ scope: groupo }); 
  const tl = gsap.timeline();
  const onClick = contextSafe((currentElement) => {
    console.log(currentElement)
    setPresentGlow(false)
    gsap.to(currentElement.object.rotation, { duration: 1, y: currentElement.object.rotation.y + Math.PI * 2, onComplete: () => {setPresentGlow(true)}});
    // tl.to(currentElement.object.position, { duration: 1, y: currentElement.object.position.y + Math.PI * 2 /10 })
    // .to(currentElement.object.position, { duration: 1, y: 0})
    currentElement.stopPropagation()
});
  return (
    <group {...props} dispose={null} ref={groupo} onClick={onClick}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d97a081e-797a-4d42-a4cf-e587e2d09ce2001'].geometry}
        material={materials['tripo_mat_d97a081e-797a-4d42-a4cf-e587e2d09ce2']}
        position={[0.003, 0.003, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d97a081e-797a-4d42-a4cf-e587e2d09ce2002'].geometry}
        material={materials['tripo_mat_d97a081e-797a-4d42-a4cf-e587e2d09ce2']}
        position={[-0.002, 0.005, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_defc5649-882d-4af1-8b87-7b0f29b1b3b9'].geometry}
        material={!presentGlow ? materials.glowing : materials['tripo_material_defc5649-882d-4af1-8b87-7b0f29b1b3b9']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_defc5649-882d-4af1-8b87-7b0f29b1b3b9001'].geometry}
        material={materials.glowing}
      />
    </group>
  )
}

useGLTF.preload('/stack_of_presents2.glb')
