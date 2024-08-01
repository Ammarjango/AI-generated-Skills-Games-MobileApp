// Created by Asma Ijaz on 1/11/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Asma Ijaz
import React, { useEffect } from 'react';
import MainStack from './src/navigation/MainStack';
import ThreeDTest from './src/screens/3dTest/3dTest';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { LogLevel, OneSignal, InAppMessage } from 'react-native-onesignal'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native';



const App = () => {

  const NotificationHandler = async () => {
    OneSignal.initialize("4378771c-ec5d-40ad-8de1-3b7b0d2d724a");
    OneSignal.Notifications.requestPermission(true);

    OneSignal.User.addTag("key", "value");
    // console.log('user', OneSignal.User.pushSubscription.getIdAsync())

    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });

  };


  useEffect(() => {
    NotificationHandler();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack />
        <Toast position="bottom" bottomOffset={20} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
