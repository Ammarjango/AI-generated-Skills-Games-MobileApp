import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useIsFocused, useNavigation } from '@react-navigation/native'; // Import from React Navigation
import { Images } from '../../assets/Image';
import { styles } from './styles';

import { StartGameGrey_Svg, StartGameOrange_Svg } from '../../assets/Svgs/SvgGroup';
import { OpenSans_Bold, Orbitron_Bold, Orbitron_Regular } from '../../assets/fonts/index';

export default function Loading(props: any) {

    const [progress, setProgress] = useState(0);
    // Access navigation object\
    const focus = useIsFocused()
    const [showAnotherSvg, setShowAnotherSvg] = useState(false);
    useEffect(() => {
        if (focus) {

            const interval = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 1 ? 0 : prevProgress + 0.1));
            }, 500);

            return () => clearInterval(interval);
        }
    }, [focus]);

    useEffect(() => {
        if (progress >= 1) {
            // When the progress is completed (100%), navigate to a new screen
            setShowAnotherSvg(true);
            //props.navigation.navigate('QUIZ'); // Replace 'YourNewScreen' with the name of your new screen
        }
    }, [progress]);

    const percentage = Math.round(progress * 100);
    const handleStartGamePress = () => {

        setShowAnotherSvg(true);
        props.navigation.navigate('QUIZ');
    };
    const handleStartGamePressa = () => {

        setShowAnotherSvg(false);

    };



    return (
        <View style={styles.container}>

            <Image source={Images.image50} />
            <Text style={{ color: 'white', fontFamily: OpenSans_Bold, fontSize: 14, position: 'absolute', bottom: heightPercentageToDP(37), }}>Game info: Double Press on Option for hint</Text>
            <View style={{ position: 'absolute', bottom: heightPercentageToDP(30) }}>



                <Progress.Bar
                    progress={progress}
                    width={widthPercentageToDP(80)}
                    height={heightPercentageToDP(5)}
                    color={'#B1DFFF'}
                    borderColor='black'
                    style={{ backgroundColor: 'black', }}

                    useNativeDriver
                />
                <View style={{ position: 'absolute', top: heightPercentageToDP(1), alignSelf: 'center', }}>
                    <Text style={{ color: '#FF9900', fontFamily: Orbitron_Bold, fontSize: 20, bottom: heightPercentageToDP(0.5) }}>{`${percentage}%`}</Text>
                </View>
            </View>
            {showAnotherSvg ? (
                <TouchableOpacity onPress={handleStartGamePressa} style={{ position: 'absolute', bottom: heightPercentageToDP(6) }} >
                    <SvgXml xml={StartGameOrange_Svg} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleStartGamePress} style={{ position: 'absolute', bottom: heightPercentageToDP(6) }} >
                    <SvgXml xml={StartGameGrey_Svg} />
                </TouchableOpacity>
            )}
        </View>
    );
}
