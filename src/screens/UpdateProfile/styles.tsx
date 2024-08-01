import { StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5),
        backgroundColor: 'white'

    },
    highlightedInput: {
        borderColor: '#FF9900', // Customize the border color for highlighted input
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // Add a border bottom
        paddingVertical: 10, // Add vertical padding
        marginBottom: 20, // Add margin bottom
    },
    title: {
        fontSize: hp(3),
        fontWeight: 'bold',
        marginBottom: hp(3),
        color: '#FF9900'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black', // Adjust this color as needed
        marginBottom: 5,
        width: hp(40),
        alignSelf: 'center',
        color: 'black'

    },
    signUpButton: {
        backgroundColor: '#FF9900',
        padding: hp(2),
        width: hp(30),
        borderRadius: hp(1),
        marginTop: hp(3),

    },
    signUpButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: hp(2),
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(2),
    },
    orLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#000000',
    },
    orText: {
        marginHorizontal: wp(4),
        color: '#000000',
        fontSize: hp(2),
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',

        padding: hp(2),
        borderRadius: hp(2),
        marginVertical: hp(1),
    },
    socialIcon: {
        width: hp(2.5),
        height: hp(2.5),
        marginRight: wp(2),
    },
    socialButtonText: {
        color: '#FF9900',
        fontSize: hp(2),
    },
    alreadyHaveAccountContainer: {
        flexDirection: 'row',
        marginTop: hp(3),
    },
    alreadyHaveAccountText: {
        color: '#A9A9A9',
    },
    signInLink: {
        color: '#4285F4',
    },
});