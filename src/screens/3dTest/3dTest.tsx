import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree, } from '@react-three/fiber/native'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import useControls from 'r3f-native-orbitcontrols';
import Model from './model';
import { View } from 'react-native';

const ThreeDTest = () => {
  const [OrbitControls, events] = useControls();
  const onGestureEvent = (event: any) => {
    // Handle drag events here
    const rotationFactor = 0.005;
    // camera.rotation.y += event.nativeEvent.translationX * rotationFactor;
    // camera.rotation.x += event.nativeEvent.translationY * rotationFactor;

    // console.log(event.nativeEvent.translationX, event.nativeEvent.translationY);
  };
  return (
    <View style={{ flex: 1 }} {...events}>
      <Canvas
      // onTouchMove={(e) => { console.log(e); }}
      >
        <OrbitControls enablePan={false} />
        <directionalLight position={[1, 0, 0]} args={['white', 5]} />
        <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
        <directionalLight position={[0, 0, 1]} args={['white', 5]} />
        <directionalLight position={[0, 0, -1]} args={['white', 5]} />
        <directionalLight position={[0, 1, 0]} args={['white', 5]} />
        <directionalLight position={[0, -1, 0]} args={['white', 5]} />
        {/* <Suspense fallback={<Trigger setLoading={setLoading} />}> */}
        <Suspense fallback={null}>
          <Model position={[0, -0.5, 0]} />
        </Suspense>
      </Canvas>
    </View>
  )
}

export default ThreeDTest