import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const NextButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.nextButton} onPress={onPress}>
            <Text style={styles.nextButtontext}>Next</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default NextButton;


