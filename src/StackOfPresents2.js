import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function StackOfPresents2(props) {
  const { nodes, materials } = useGLTF('/stack_of_presents.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_defc5649-882d-4af1-8b87-7b0f29b1b3b9'].geometry}
        material={materials['tripo_material_defc5649-882d-4af1-8b87-7b0f29b1b3b9']}
      />
    </group>
  )
}

useGLTF.preload('/stack_of_presents.glb')
