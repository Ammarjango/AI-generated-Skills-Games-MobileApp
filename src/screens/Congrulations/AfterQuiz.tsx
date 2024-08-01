import { View, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Congratss_Svg, Nex_Svg } from '../../assets/Svgs/SvgGroup';
import React from 'react';
import { Images } from '../../assets/Image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function AfterQuiz(props: any) {
    console.log('After Quizzzzzzzzzz ');

    return (
        <View style={styles.container}>

            <Image source={Images.c} style={{ width: wp(99.9), height: hp(100) }} />
            <SvgXml xml={Congratss_Svg} style={styles.congratssSvg} />

            <SvgXml xml={Nex_Svg} style={styles.nextSvg} onPress={() => {
                if (props.navigation) {
                    // Call the navigate function from the props 
                    props.navigation.navigate('AfterQuizOne');
                }
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    congratssSvg: {
        position: 'absolute',
        top: 0,
    },
    nextSvg: {
        position: 'absolute',
        bottom: hp(10),
    },
});
