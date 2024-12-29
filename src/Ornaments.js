import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Ornaments(props) {
  const { nodes, materials } = useGLTF('/ornaments.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_9fb4a3b4-0674-4ae7-be12-ecf50bcdc9a6'].geometry}
        material={materials['tripo_material_9fb4a3b4-0674-4ae7-be12-ecf50bcdc9a6']}
      />
    </group>
  )
}

useGLTF.preload('/ornaments.glb')
