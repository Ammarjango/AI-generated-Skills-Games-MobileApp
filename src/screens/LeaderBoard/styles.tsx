import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontFamily from "../../assets/fonts";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9900',
        flexDirection: 'column'
    },
    tab: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        width: wp(22),
        paddingVertical: 5,
    },
    selectedTab: {
        alignItems: 'center',
        backgroundColor: '#FF9900',
        color: 'white',
        fontSize: 13, fontFamily: FontFamily.OpenSansRegular,

    },
    mainview: { top: hp(2), width: wp(90), backgroundColor: 'white', height: hp(4), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 5, flexDirection: 'row' },
    qrk: { color: '#FF9900', fontWeight: 'bold', fontSize: 13, fontFamily: FontFamily.OpenSansRegular },
    txt: { color: '#FF9900', fontSize: 13 },
    secview: { top: hp(4), width: wp(90), backgroundColor: '#EAEFFF', height: hp(5), alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', borderRadius: 5, flexDirection: 'row', borderWidth: 1, borderColor: '#EAEFFF', },
    thirdview: { flexDirection: 'row', justifyContent: 'space-evenly', top: hp(6), alignItems: 'center' },
    downone: { flexDirection: 'row', justifyContent: 'space-evenly', },
    textx: { color: 'white', top: hp(6), fontWeight: 'bold', fontSize: 12 },
    textxx: { color: 'white', fontWeight: 'bold', fontSize: 12 },
    textxxx: { color: 'white', top: hp(14), fontWeight: 'bold', fontSize: 12 },
    viewx: { flexDirection: 'row', justifyContent: 'space-evenly', },
    viewxa: { flexDirection: 'row', justifyContent: 'space-evenly', },
    textxa: { fontSize: 11, top: hp(3.5), zIndex: 1, fontWeight: 'bold', color: '#FF9900', marginLeft: wp(5) },
    textxxa: { fontSize: 11, top: hp(3.5), zIndex: 1, fontFamily: FontFamily.OpenSansRegular, fontWeight: 'bold', color: '#FF9900', },
    textxxxa: { fontSize: 11, top: hp(3.5), zIndex: 1, fontFamily: FontFamily.OpenSansRegular, fontWeight: 'bold', color: '#FF9900', left: wp(1) },
    viewt: { flexDirection: 'row', justifyContent: 'space-evenly', },
    viewg: { flexDirection: 'row', justifyContent: 'space-evenly', },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF9900',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 8,
        // marginHorizontal: 16,
        borderRadius: 5,

        borderColor: '#ccc',
        width: wp(88),
        borderwidth: 1

    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(50),
        justifyContent: "space-around",

    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        width: wp(30)
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',

        fontFamily: FontFamily.OpenSansRegular,
    },
    qrkNumber: {
        fontSize: 12,
        color: 'white',
    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    followButton: {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 5,
        // marginRight: 10,
        flexDirection: 'row',
        paddingHorizontal: 12

    },
    followButtonText: {
        color: '#FF9900',
        // left: wp(1),
        fontSize: 10

    },
    itemBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(100)

    },
    vieww:
    {
        backgroundColor: 'red',
        width: wp(92),
        alignContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10,

        height: hp(20),

    },
    curveContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 20,
        backgroundColor: 'orange',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: "red",
        // top: -\50
    },

})

