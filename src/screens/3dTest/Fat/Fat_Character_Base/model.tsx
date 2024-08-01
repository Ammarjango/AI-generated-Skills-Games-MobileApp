import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux'

type GLTFResult = GLTF & {
    nodes: {
        Head002: THREE.Mesh
        Head001: THREE.Mesh
        Head003: THREE.Mesh
        Head004: THREE.Mesh
        Head009: THREE.Mesh
        Head010: THREE.Mesh
        Head011: THREE.Mesh
        Head012: THREE.Mesh
        Head005: THREE.Mesh
        Head006: THREE.Mesh
        Head007: THREE.Mesh
        Head008: THREE.Mesh
    }

    materials: {
        Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
        Wolf3D_Eye: THREE.MeshStandardMaterial
        Wolf3D_Hair: THREE.MeshStandardMaterial
    }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(require("../../../../assets/3DModel/Fat_Character_Base.glb")) as GLTFResult
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
                name="Head002"
                castShadow
                receiveShadow
                geometry={nodes.Head002.geometry}
                material={materials.Wolf3D_Outfit_Top}

                morphTargetDictionary={nodes.Head002.morphTargetDictionary}
                morphTargetInfluences={nodes.Head002.morphTargetInfluences}
            />
            <mesh
                name="Head001"
                castShadow
                receiveShadow
                geometry={nodes.Head001.geometry}
                material={materials.Wolf3D_Outfit_Bottom}

                morphTargetDictionary={nodes.Head001.morphTargetDictionary}
                morphTargetInfluences={nodes.Head001.morphTargetInfluences}
            />
            <mesh
                name="Head003"
                castShadow
                receiveShadow
                geometry={nodes.Head003.geometry}

                // material={materials.Wolf3D_Skin}
                material={_material}
                morphTargetDictionary={nodes.Head003.morphTargetDictionary}
                morphTargetInfluences={nodes.Head003.morphTargetInfluences}
            />
            <mesh
                name="Head004"
                castShadow
                receiveShadow
                geometry={nodes.Head004.geometry}
                // material={materials.Wolf3D_Skin}
                material={_material}
                morphTargetDictionary={nodes.Head004.morphTargetDictionary}
                morphTargetInfluences={nodes.Head004.morphTargetInfluences}
            />
            <mesh
                name="Head009"
                castShadow
                receiveShadow
                geometry={nodes.Head009.geometry}
                material={materials.Wolf3D_Skin}
                morphTargetDictionary={nodes.Head009.morphTargetDictionary}
                morphTargetInfluences={nodes.Head009.morphTargetInfluences}
            />
            <mesh
                name="Head010"
                castShadow
                receiveShadow
                geometry={nodes.Head010.geometry}
                material={materials.Wolf3D_Skin}

                morphTargetDictionary={nodes.Head010.morphTargetDictionary}
                morphTargetInfluences={nodes.Head010.morphTargetInfluences}
            />
            <mesh
                name="Head011"
                castShadow
                receiveShadow
                geometry={nodes.Head011.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                morphTargetDictionary={nodes.Head011.morphTargetDictionary}
                morphTargetInfluences={nodes.Head011.morphTargetInfluences}
            />
            <mesh
                name="Head012"
                castShadow
                receiveShadow
                geometry={nodes.Head012.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                morphTargetDictionary={nodes.Head012.morphTargetDictionary}
                morphTargetInfluences={nodes.Head012.morphTargetInfluences}
            />
            <mesh
                name="Head005"
                castShadow
                receiveShadow
                geometry={nodes.Head005.geometry}
                // material={materials.Wolf3D_Skin}
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

useGLTF.preload(require("../../../../assets/3DModel/Fat_Character_Base.glb"));