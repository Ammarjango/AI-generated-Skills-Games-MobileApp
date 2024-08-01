import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }, img: { width: wp(100), alignSelf: 'center', height: hp(104) },
    viewone: { flexDirection: 'row', alignSelf: 'center' },
    textone: { color: 'black', fontWeight: 'bold', },
    texts: { fontSize: 12, color: '#FF9900', fontWeight: 'bold', },
    textt: { fontSize: 10, color: '#FF9900', fontWeight: 'bold', },
    textr: { color: '#FF9900', alignSelf: 'center', fontSize: 11.5, },
    viewx: { flexDirection: 'row', justifyContent: 'space-between', top: hp(4) },
    viewxx: { flexDirection: 'row', left: wp(10) },
    as: { backgroundColor: '#FB9250', height: hp(3), width: wp(6.5), borderRadius: hp(8), flexDirection: 'row' },
    ss: { fontSize: 10, color: 'white', alignSelf: 'center', left: wp(1) },
    p: { fontSize: 10, top: hp(0.5), color: '#FB9250' },
    pp: { backgroundColor: '#FF5F5F', height: hp(3), width: wp(6), borderRadius: hp(8), flexDirection: 'row' },
    px: { fontSize: 10, color: 'white', alignSelf: 'center', left: wp(2) },
    ppp: { fontSize: 10, top: hp(0.5), color: '#FF5F5F' },
    ll: { backgroundColor: '#7BFF98', height: hp(3), width: wp(6), borderRadius: hp(8), flexDirection: 'row' },
    lx: { fontSize: 10, color: 'white', alignSelf: 'center', left: wp(2) },
    lk: { fontSize: 10, top: hp(0.5), color: '#7BFF98' }, SecTextxx: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FF9900',
        borderWidth: 1,
        borderColor: '#FF9900',
        width: wp(40),
        paddingVertical: hp(2),
        // height: hp(5),
        margin: hp(1),
        borderRadius: 6,
        // backgroundColor: 'red',
        textAlign: 'center'


    }
    , selectedTab: {
        backgroundColor: '#FF9900',
        color: 'white',
        width: wp(40),
        paddingVertical: hp(2),



    },
    modalContainer: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: wp(94),
        height: hp(60),
        alignItems: 'center',
        top: hp(26),
        borderRadius: 10,

    },
    transparentBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the alpha value for the desired transparency
        opacity: 0.8
    },
    topImage: {
        top: hp(6),
        width: wp(50),
        height: hp(30),
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },



})