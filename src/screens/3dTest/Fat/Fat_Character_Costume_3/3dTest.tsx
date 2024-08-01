import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import useControls from 'r3f-native-orbitcontrols';
import Model from './model';
import { View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Loader from '../../../../components/loader';

const ThreeDTestFatCharacterCostumeThree = () => {
  const [OrbitControls, events] = useControls();

  return (
    <View style={{ flex: 1 }} {...events}>
      <Canvas
        shadows
        gl={{ antialias: true }}
        style={{ marginBottom: heightPercentageToDP(2) }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 70, 70]} intensity={1} castShadow />

        {/* Add directional lights from different angles to cast shadows */}
        <directionalLight
          position={[1, 2, 2]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight
          position={[-1, -2, -2]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight
          position={[2, -2, 1]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight
          position={[-2, 2, -1]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <OrbitControls
          enableRotate
          enableZoom={false}
          rotateSpeed={25}
          enablePan={false}
          maxZoom={3.25}
          minZoom={3.25}
          maxPolarAngle={Math.PI / 3.5}
          minPolarAngle={Math.PI / 3.5}
        />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </View>
  );
};

export default ThreeDTestFatCharacterCostumeThree;
