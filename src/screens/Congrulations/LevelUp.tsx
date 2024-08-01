import { View, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { PlayAgain_Svg, Again_Svg } from '../../assets/Svgs/SvgGroup';
import React from 'react';
import { Images } from '../../assets/Image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';

export default function LevelUp(props: any) {
    console.log('After Quizzzzzzzzzz Oneeeeeeeee');
    return (
        <View style={styles.container}>

            <Image source={Images.xxx} style={{ width: wp(99.9), height: hp(100) }} />
            <SvgXml xml={PlayAgain_Svg} style={styles.congratssSvg} />

            <SvgXml xml={Again_Svg} style={styles.nextSvg}
                onPress={() => {
                    if (props.navigation) {
                        // Call the navigate function from the props 
                        props.navigation.navigate('Correct');
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
        position: 'relative',
    },
    congratssSvg: {
        position: 'absolute',
        top: 0, // Adjust this value based on your preference
    },
    nextSvg: {
        position: 'absolute',
        bottom: hp(10),
    },
});
