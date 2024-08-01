import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux'

type GLTFResult = GLTF & {
    nodes: {
        Outfit_Top001: THREE.Mesh
        Outfit_Top002: THREE.Mesh
        Outfit_Top003: THREE.Mesh
        Outfit_Top004: THREE.Mesh
        Outfit_Bottom010: THREE.Mesh
        Outfit_Bottom011: THREE.Mesh
        Outfit_Bottom012: THREE.Mesh
        Outfit_Bottom013: THREE.Mesh
    }
    materials: {
        ['Wolf3D_Outfit_Top.001']: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Bottom.001']: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Footwear.001']: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        Wolf3D_Eye: THREE.MeshStandardMaterial
        Wolf3D_Hair: THREE.MeshStandardMaterial
    }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(require("../../../../assets/3DModel/Skinny_Character_Costume_1.glb")) as GLTFResult
    const TextureData = useSelector(
        (state: RootState) => state?.appReducer?.Textu
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
                geometry={nodes.Outfit_Top001.geometry}
                material={materials['Wolf3D_Outfit_Top.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Top002.geometry}
                material={materials['Wolf3D_Outfit_Bottom.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Top003.geometry}
                material={materials['Wolf3D_Outfit_Footwear.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Top004.geometry}
                material={materials['Wolf3D_Outfit_Footwear.001']}
            />
            <mesh
                name="Outfit_Bottom010"
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Bottom010.geometry}
                material={_material}
                morphTargetDictionary={nodes.Outfit_Bottom010.morphTargetDictionary}
                morphTargetInfluences={nodes.Outfit_Bottom010.morphTargetInfluences}
            />
            <mesh
                name="Outfit_Bottom011"
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Bottom011.geometry}
                material={materials.Wolf3D_Eye}
                morphTargetDictionary={nodes.Outfit_Bottom011.morphTargetDictionary}
                morphTargetInfluences={nodes.Outfit_Bottom011.morphTargetInfluences}
            />
            <mesh
                name="Outfit_Bottom012"
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Bottom012.geometry}
                material={materials.Wolf3D_Eye}
                morphTargetDictionary={nodes.Outfit_Bottom012.morphTargetDictionary}
                morphTargetInfluences={nodes.Outfit_Bottom012.morphTargetInfluences}
            />
            <mesh
                name="Outfit_Bottom013"
                castShadow
                receiveShadow
                geometry={nodes.Outfit_Bottom013.geometry}
                material={materials.Wolf3D_Hair}
                morphTargetDictionary={nodes.Outfit_Bottom013.morphTargetDictionary}
                morphTargetInfluences={nodes.Outfit_Bottom013.morphTargetInfluences}
            />
        </group>
    )
}

useGLTF.preload(require("../../../../assets/3DModel/Skinny_Character_Costume_1.glb"))
