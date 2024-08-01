import React from 'react';
import { View, Text, ImageBackground, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SlideContent = ({ imageSource, text, handleNext, styless, func, val }:any) => {
    return (
        <View style={styles.slide}>
            <ImageBackground source={imageSource} style={{ width: wp(100), height: hp(100) }}>
                <View style={styles.container}>
                    <Text style={[styless, { width: wp(80), textAlign:'justify' }]} numberOfLines={10}>{text}</Text>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextButtontext}>Next</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', top: hp(1) }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Already have an Account?</Text>
                        <TouchableOpacity onPress={func}>
                            <Text style={{ fontSize: 11, color: '#FF9900', left: wp(0.5) }}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
};


const styles = {
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',

    },
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#FF9900',
        borderWidth: 2,
        borderRadius: wp(6),
        padding: wp(4),
        bottom: Platform.OS === 'android' ? hp(8) : hp(11), 
        alignSelf:'center' 
    },
    nextButton: {
        paddingVertical: hp(1.5),
        backgroundColor: '#FF9900',
        borderRadius: wp(2),
        width: hp(35),
    },
    nextButtontext: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
    },
    text: {
        textAlign: 'justify',
        color: 'black',
        fontSize: 10,
    },
};


export default SlideContent;
