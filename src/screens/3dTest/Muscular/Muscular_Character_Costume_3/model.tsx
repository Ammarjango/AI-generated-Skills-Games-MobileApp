import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux'

type GLTFResult = GLTF & {
    nodes: {
        Wolf3D_Outfit_Bottom001: THREE.Mesh
        Wolf3D_Outfit_Footwear001: THREE.Mesh
        Wolf3D_Outfit_Top001: THREE.Mesh
        Head005: THREE.Mesh
        Head006: THREE.Mesh
        Head007: THREE.Mesh
        Head008: THREE.Mesh
    }
    materials: {
        ['Wolf3D_Outfit_Bottom.003']: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Footwear.003']: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Top.003']: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        Wolf3D_Hair: THREE.MeshStandardMaterial
        Wolf3D_Eye: THREE.MeshStandardMaterial
    }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(require("../../../../assets/3DModel/Muscular_Character_Costume_3.glb")) as GLTFResult
    const TextureData = useSelector(
        (state: RootState) => state?.appReducer?.Textur
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
                geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
                material={materials['Wolf3D_Outfit_Bottom.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
                material={materials['Wolf3D_Outfit_Footwear.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wolf3D_Outfit_Top001.geometry}
                material={materials['Wolf3D_Outfit_Top.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Head005.geometry}
                material={_material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Head006.geometry}
                material={materials.Wolf3D_Hair}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Head007.geometry}
                material={materials.Wolf3D_Eye}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Head008.geometry}
                material={materials.Wolf3D_Eye}
            />
        </group>
    )
}

useGLTF.preload(require("../../../../assets/3DModel/Muscular_Character_Costume_3.glb"))



