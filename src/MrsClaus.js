import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MrsClaus(props) {
  const { nodes, materials } = useGLTF('/mrs_claus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_81480df9-1b58-4f0f-89a5-f305db66907a'].geometry}
        material={materials['tripo_material_81480df9-1b58-4f0f-89a5-f305db66907a']}
      />
    </group>
  )
}

useGLTF.preload('/mrs_claus.glb')
