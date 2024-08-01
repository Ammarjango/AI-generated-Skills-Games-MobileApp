

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux'

type GLTFResult = GLTF & {
    nodes: {
        Wolf3D_Outfit_Bottom: THREE.Mesh
        Wolf3D_Outfit_Bottom002: THREE.Mesh
        Wolf3D_Outfit_Bottom003: THREE.Mesh
        Wolf3D_Outfit_Bottom004: THREE.Mesh
        Head005: THREE.Mesh
        Head006: THREE.Mesh
        Head007: THREE.Mesh
        Head008: THREE.Mesh
    }
    materials: {
        ['Wolf3D_Outfit_Bottom.002']: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Top.002']: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Footwear.002']: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        Wolf3D_Eye: THREE.MeshStandardMaterial
        Wolf3D_Hair: THREE.MeshStandardMaterial
    }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(require("../../../../assets/3DModel/Fat_Character_Costume_2.glb")) as GLTFResult
    const TextureData = useSelector(
        (state: RootState) => state?.appReducer?.Texture
    );

    const loader = new THREE.TextureLoader();
    let _texture = null;
    if (TextureData) {
        _texture = loader.load(TextureData);
        _texture.colorSpace = THREE.SRGBColorSpace;
        // _texture.wrapS = THREE.RepeatWrapping;
        _texture.wrapT = THREE.RepeatWrapping;
        _texture.repeat.y = -1;
    }

    let _material;
    if (_texture) {
        _material = new THREE.MeshStandardMaterial({
            map: _texture,
        });
    } else {
        _material = materials.Wolf3D_Skin;
    }
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials['Wolf3D_Outfit_Bottom.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wolf3D_Outfit_Bottom002.geometry}
                material={materials['Wolf3D_Outfit_Top.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wolf3D_Outfit_Bottom003.geometry}
                material={materials['Wolf3D_Outfit_Footwear.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wolf3D_Outfit_Bottom004.geometry}
                material={materials['Wolf3D_Outfit_Footwear.002']}
            />
            <mesh
                name="Head005"
                castShadow
                receiveShadow
                geometry={nodes.Head005.geometry}
                material={_material}
                morphTargetDictionary={nodes.Head005.morphTargetDictionary}
                morphTargetInfluences={nodes.Head005.morphTargetInfluences}
            />
            <mesh
                name="Head006"
                castShadow
                receiveShadow
                geometry={nodes.Head006.geometry}
                material={materials.Wolf3D_Eye}
                morphTargetDictionary={nodes.Head006.morphTargetDictionary}
                morphTargetInfluences={nodes.Head006.morphTargetInfluences}
            />
            <mesh
                name="Head007"
                castShadow
                receiveShadow
                geometry={nodes.Head007.geometry}
                material={materials.Wolf3D_Eye}
                morphTargetDictionary={nodes.Head007.morphTargetDictionary}
                morphTargetInfluences={nodes.Head007.morphTargetInfluences}
            />
            <mesh
                name="Head008"
                castShadow
                receiveShadow
                geometry={nodes.Head008.geometry}
                material={materials.Wolf3D_Hair}
                morphTargetDictionary={nodes.Head008.morphTargetDictionary}
                morphTargetInfluences={nodes.Head008.morphTargetInfluences}
            />
        </group>
    )
}

useGLTF.preload(require("../../../../assets/3DModel/Fat_Character_Costume_2.glb"))