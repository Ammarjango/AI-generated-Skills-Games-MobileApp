import { Platform, StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5),
        backgroundColor: 'white',


    },
    containerx: {

        padding: wp(5),
        backgroundColor: 'white',



    },
    linkText: {
        // Styles for the underlined, black, and bold links
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'justify',
        alignSelf: 'center'
    },
    highlightedInput: {
        borderColor: '#FF9900', // Customize the border color for highlighted input
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // Add a border bottom
        paddingVertical: hp(1), // Add vertical padding
        // Add margin bottom
        right: wp(2),
        marginTop: Platform.OS === 'ios' ? hp(2) : hp(0)
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
        color: 'black',


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
        color: '#FF9900',
    },
    termsText: {
        marginTop: hp(3), // 3% of the screen's height
        fontSize: hp(1.5), // 1.5% of the screen's height
        textAlign: 'justify',



    },
    containerx: {
        // Style your container
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,


    },
    containerxx: {
        // Style your container
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        color: 'black'


    },
    text: {
        // Style your text
        fontSize: 11,
        color: '#000',
        textAlign: 'center',

    },
    hyperlink: {
        // Style your hyperlinks
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',


    },
});