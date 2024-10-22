// import * as THREE from "three";
// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei/native";
// import { GLTF } from "three-stdlib";

// type GLTFResult = GLTF & {
//   nodes: {
//     Cylinder007: THREE.Mesh;
//     Cylinder007_1: THREE.Mesh;
//     bred_down001: THREE.Mesh;
//     meat001: THREE.Mesh;
//     tomato004: THREE.Mesh;
//     green_002: THREE.Mesh;
//     Plane003: THREE.Mesh;
//     tomato005: THREE.Mesh;
//     tomato006: THREE.Mesh;
//     tomato007: THREE.Mesh;
//   };
//   materials: {
//     bred: THREE.MeshStandardMaterial;
//     sumsum: THREE.MeshStandardMaterial;
//     meat: THREE.MeshStandardMaterial;
//     tomato: THREE.MeshStandardMaterial;
//     green: THREE.MeshStandardMaterial;
//     chees: THREE.MeshStandardMaterial;
//   };
// };

// export default function Model(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF(
//     require("./uploads_files_3998079_burger_2.glb")
//   ) as GLTFResult;
//   return (
//     <group {...props} dispose={null} position={[0, -0.5, 0]}>
//       <group position={[0, 1.368, 0]} scale={[0.948, 1.006, 0.959]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cylinder007.geometry}
//           material={materials.bred}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cylinder007_1.geometry}
//           material={materials.sumsum}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.bred_down001.geometry}
//         material={materials.bred}
//         position={[0, 0.452, 0]}
//         scale={[1.259, 0.222, 1.186]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.meat001.geometry}
//         material={materials.meat}
//         position={[0, 0.951, 0]}
//         scale={[1.047, 0.28, 1.047]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.tomato004.geometry}
//         material={materials.tomato}
//         position={[0.475, 1.155, 0.758]}
//         rotation={[0.046, -0.572, -0.02]}
//         scale={[0.584, 0.109, 0.584]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.green_002.geometry}
//         material={materials.green}
//         position={[0, -0.187, 0]}
//         rotation={[-Math.PI, 0.185, -Math.PI]}
//         scale={1.434}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane003.geometry}
//         material={materials.chees}
//         position={[-0.025, 1.434, 0.01]}
//         scale={1.136}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.tomato005.geometry}
//         material={materials.tomato}
//         position={[-0.688, 1.213, 0.225]}
//         rotation={[0.048, 0.033, 0.107]}
//         scale={[0.534, 0.1, 0.534]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.tomato006.geometry}
//         material={materials.tomato}
//         position={[-0.579, 1.194, -0.663]}
//         rotation={[-0.076, 0.013, 0.067]}
//         scale={[0.534, 0.1, 0.534]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.tomato007.geometry}
//         material={materials.tomato}
//         position={[0.66, 1.198, -0.582]}
//         rotation={[-0.119, 0, -0.043]}
//         scale={[0.534, 0.1, 0.534]}
//       />
//     </group>
//   );
// }

// useGLTF.preload(require("./uploads_files_3998079_burger_2.glb"));

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

/////Character 1 Model ////////////
// import * as THREE from "three";
// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei/native";
// import { GLTF } from "three-stdlib";

// type GLTFResult = GLTF & {
//   nodes: {
//     EyeLeft: THREE.Mesh;
//     EyeRight: THREE.Mesh;
//     Head: THREE.Mesh;
//     Hair: THREE.Mesh;
//     Body: THREE.Mesh;
//     Outfit_Bottom001: THREE.Mesh;
//     Outfit_Footwear001: THREE.Mesh;
//     Outfit_Top001: THREE.Mesh;
//   };
//   materials: {
//     Wolf3D_Eye: THREE.MeshStandardMaterial;
//     Wolf3D_Skin: THREE.MeshStandardMaterial;
//     Wolf3D_Hair: THREE.MeshStandardMaterial;
//     Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
//     Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
//     Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
//   };
// };

// let imageVarName = require('./textures/baseColor_dark.jpg')
// const loader = new THREE.TextureLoader();
// const _material = new THREE.PointsMaterial({
//   map: loader.load(imageVarName),
// });

// export default function Model(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF(require("./Character_1.glb")) as GLTFResult;
//   return (
//     <group {...props} dispose={null} position={[0, -0.7, 0]}>
//       <mesh
//         name="EyeLeft"
//         castShadow
//         receiveShadow
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//       />
//       <mesh
//         name="EyeRight"
//         castShadow
//         receiveShadow
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//       />
//       <mesh
//         name="Head"
//         castShadow
//         receiveShadow
//         geometry={nodes.Head.geometry}
//         material={_material}
//         // material={materials.Wolf3D_Skin}
//         morphTargetDictionary={nodes.Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Head.morphTargetInfluences}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Hair.geometry}
//         material={materials.Wolf3D_Hair}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Body.geometry}
//         material={materials.Wolf3D_Skin}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Outfit_Bottom001.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Outfit_Footwear001.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Outfit_Top001.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//       />
//     </group>
//   );
// }

// useGLTF.preload(require("./Character_1.glb"));
///////////////////////////////////
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

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
let imageVarName = require('./textures/skintone2.jpg')
const loader = new THREE.TextureLoader();

const _texture = loader.load(imageVarName);
_texture.colorSpace = THREE.SRGBColorSpace;

let _material = new THREE.MeshStandardMaterial({
  map: _texture,
});
// _texture.wrapS = THREE.RepeatWrapping;
_texture.wrapT = THREE.RepeatWrapping;
_texture.repeat.y = - 1;

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require("../../assets/3DModel/Fat_Character_Base.glb")) as GLTFResult
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

useGLTF.preload(require("../../assets/3DModel/Fat_Character_Base.glb"));


////////////Custom Character Model ///////////////////

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import * as THREE from "three";
// import React from "react";
// import { useGLTF } from "@react-three/drei/native";
// import { GLTF } from "three-stdlib";

// type GLTFResult = GLTF & {
//   nodes: {
//     Outfit_Top: THREE.Mesh;
//     Outfit_Footwear: THREE.Mesh;
//     Outfit_Bottom: THREE.Mesh;
//   };
//   materials: {
//     ["Wolf3D_Outfit_Top.001"]: THREE.MeshStandardMaterial;
//     ["Wolf3D_Outfit_Footwear.001"]: THREE.MeshStandardMaterial;
//     ["Wolf3D_Outfit_Bottom.001"]: THREE.MeshStandardMaterial;
//   };
// };



// export default function Model(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF(require(
//     "./Character_1_Costume_1.glb")
//   ) as GLTFResult;
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Outfit_Top.geometry}
//         material={_material}
//       // material={materials["Wolf3D_Outfit_Top.001"]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Outfit_Footwear.geometry}
//         material={materials["Wolf3D_Outfit_Footwear.001"]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Outfit_Bottom.geometry}
//         material={materials["Wolf3D_Outfit_Bottom.001"]}
//       />
//     </group>
//   );
// }

// useGLTF.preload(require(
//   "./Character_1_Costume_1.glb"));



