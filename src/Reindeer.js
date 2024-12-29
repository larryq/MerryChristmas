import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Reindeer(props) {
  const { nodes, materials } = useGLTF('/reindeer.glb')
  return (
    <group {...props} dispose={null}>
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
