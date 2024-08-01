
import axios from 'axios';

import {
    CommonActions,
    createNavigationContainerRef,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';
import { PROD_URL } from '../assets/constants/env';
import { useEffect } from 'react';

export const navigationRef = createNavigationContainerRef();


const UseAccessToken = async () => {
    const accessToken = await AsyncStorage.getItem('userToken');
    console.log("//////", accessToken)
    return accessToken;
};


const dataServer = axios.create({
    baseURL: PROD_URL,
    timeout: 10000,
    // maxBodyLength: Infinity,
    // maxContentLength: Infinity,
    headers: {
        'Content-Type': 'application/json',
    },
});
dataServer.interceptors.request.use(config => {
    return new Promise((resolve, reject) => {
        NetInfo.addEventListener(async (state: { isConnected: any }) => {
            // UseAccessToken()
            const accessToken = await UseAccessToken();
            console.log(accessToken, "????")
            if (!state.isConnected) {
                return reject({ message: 'No internet connection' });
            }
            if (config.data && config.data instanceof FormData) {
                config.headers['Content-Type'] = 'multipart/form-data';
            }
            if (accessToken) {
                console.log('gggggggggggg', accessToken);
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            console.log(JSON.stringify(config), 'config in inteceptor');
            return resolve(config);
        });
    });
});
dataServer.interceptors.response.use(
    response => {
        //    console.log(response)

        return response;
    },
    error => {
        if (error?.response?.status === 401) {
            // navigate();
        } else if (error?.response?.status === 409) {
            return Promise.resolve(error?.response);
        } 
        else if (error?.response?.status === 500) {
            return Promise.resolve(error?.response);
        }
        console.log(error?.response?.status, 'error in config');

        return Promise.resolve(error?.response);
    },
);
export { dataServer };
// SignUp


