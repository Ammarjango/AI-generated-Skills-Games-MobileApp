import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Splash_Svg } from '../../assets/Svgs/SvgGroup';
import { styles } from './styles';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
export default function Splash(props: any) {
    useEffect(() => {

        getToken();
    }, []);

    const getToken = async () => {
        const data = await AsyncStorage.getItem('accessToken');
        const timeout = setTimeout(() => {
            if (data) {
                props.navigation.replace('HomeTabs');

            } else {
                props.navigation.replace('Onboarding');

            }
        }, 1000);
        return () => clearTimeout(timeout);

    }

    return (
        <View style={styles.container}>
            <SvgXml xml={Splash_Svg} />
            {/* <View style={{ width: widthPercentageToDP(55), height: heightPercentageToDP(40) }}>
                <Image source={require('../../../src/assets/Image/spla.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
            </View> */}
        </View>
    );
}


