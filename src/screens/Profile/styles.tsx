import { Platform, StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: ' rgba(246, 246, 246, 1) ',
        // backgroundColor: "red"
    },

    firstView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: hp(1),
        height: hp(10),
        width: wp(92),
        alignSelf: 'center',

        borderRadius: hp(2),
    },


    image: {
        width: wp(15),
        height: hp(8),
        resizeMode: 'contain',
        borderRadius: wp(40),

        marginLeft: wp(2),

    },



    FirstTextx: {
        marginTop: hp(2),
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FF9900'
    },
    FirstTextxx: {
        bottom: hp(-2),
        top: hp(13),
        fontSize: 17,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FF9900'
    },
    FirstTextxxx: {
        bottom: hp(14),
        fontSize: 27,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FF9900'
    },
    FirstTexta: {

        fontSize: 15,
        right: wp(12),
        color: '#FF9900',
        marginTop: Platform.OS === 'ios' ? hp(1) : hp(0)
    },
    FirstTextaa: {

        fontSize: 15,
        left: wp(15.5),
        color: '#FF9900',

        marginTop: Platform.OS === 'ios' ? hp(1) : hp(0)
    },
    FirstTextxxa: {

        fontSize: 20,
        top: hp(2),
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FF9900'
    },
    FirstText: {

        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF9900'
    },
    SecText: {

        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9900',

    },
    verticalLine: {
        height: '60%',
        borderRightWidth: 1,
        borderRightColor: '#FF9900',
    },
    FrstTextView: {
        marginTop: hp(0),
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9900'
    },
    SecTextView: {
        marginTop: hp(0),
        fontSize: 10,
        color: '#FF9900'
    },
    SecView: {
        flexDirection: 'row',
        borderColor: '#FF9900',
        marginTop: hp(1),
        padding: 10,
        width: wp(90),
        marginLeft: wp(2),
        borderRadius: hp(2),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    SecTextx: {

        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9900',
        borderWidth: 1,
        borderColor: '#FF9900',
        borderRadius: hp(10),
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        marginLeft: wp(19),
        bottom: hp(6)
    },
    selectedTab: {
        backgroundColor: '#FF9900',
        color: 'white',
        borderWidth: 1,
        borderColor: '#FF9900',
        borderRadius: hp(1),
        paddingHorizontal: wp(4),
        margin: hp(1),
        paddingVertical: hp(0.5),
        overflow: 'hidden'

    },
    bodyTypeImagex: {
        width: '90%',
        height: hp(35),
        resizeMode: 'contain',
        top: wp(3),
        alignSelf: 'center'

    },
    SecTextxx: {

        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9900',
        borderWidth: 1,
        borderColor: '#FF9900',
        borderRadius: hp(1),
        paddingHorizontal: wp(4),
        margin: hp(1),
        paddingVertical: hp(0.5),


    },



});