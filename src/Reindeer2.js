import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export default function Reindeer2(props) {
  const [noseColor, setNoseColor] = useState(false);
  const { nodes, materials } = useGLTF('/reindeer2.glb')
  return (
    <group {...props} dispose={null}
    onClick={ (event) => {setNoseColor(!noseColor) ; event.stopPropagation()} }>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_47a37ccd-156b-4ce9-8879-8a771dfc5f16001'].geometry}
       //material={materials['red nose']}
       material={!noseColor ? materials.eyes : materials['red nose']}
      />
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

useGLTF.preload('/reindeer2.glb')