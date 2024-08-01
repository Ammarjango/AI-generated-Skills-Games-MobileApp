import { Platform, StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ' rgba(246, 246, 246, 1) '

    },
    levelSelection: {
        alignItems: 'center',
        // Other styles for level selection
    },
    thumbContent: {
        backgroundColor: '#FF9900',
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    slider: {
        width: '80%',
        // Other styles for slider
    },
    modalContainer: {
        flex: 1,
        // top: hp(5),
        backgroundColor: 'white',
        //bottom: hp(5)
        // semi-transparent black background
    },

    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        top: Platform.OS === 'ios' ? hp(5) : hp(0),
        height: hp(90)
    },
    modalContenta: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        height: hp(100)
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
    verticalLine: {
        height: '60%',
        borderRightWidth: 1,
        borderRightColor: '#FF9900',
    },
    Button: {
        top: hp(4),
        alignSelf: 'center'
    },
    Buttona: {
        backgroundColor: '#FF9900',
        height: hp(7),
        alignItems: 'center',
        alignSelf: 'center',
        width: wp(70),
        borderRadius: 6,
        justifyContent:'center'

    },
    viewsec: { flexDirection: 'row', alignItems: 'flex-start', marginLeft: wp(4) },
    catt: { flexDirection: 'column' },
    cat: { marginLeft: wp(2), fontWeight: 'bold', color: 'black' },
    textskills: { marginLeft: wp(2), fontSize: 10, color: 'black' },
    qrk: {
        marginLeft: wp(2), fontSize: 10, color: 'black'
    },
    viewfirst: { flexDirection: 'row', alignItems: 'flex-start', marginLeft: wp(4) },
    view1: { flexDirection: 'column' },
    qrktext: { marginLeft: wp(2), fontWeight: 'bold', color: 'black' },
    image: {
        width: wp(14),
        height: hp(7),
        resizeMode: 'contain',
        borderRadius: wp(40),



    },
    progressView: {
        marginLeft: wp(15),
        marginTop: hp(4)
    },
    headerTexta: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: wp(1.5),
        alignSelf: 'center'

    },
    headerTextab: {
        top: hp(1),
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: wp(1.5),
        color: 'black'

    },
    headerTextabc: {
        fontSize: 16,
        fontWeight: 'bold',

        color: 'black',
        marginTop: Platform.OS === 'ios' ? hp(5) : hp(1)

    },
    closeIcon: {
        position: 'absolute',
        top: hp(2),
        right: wp(2),
        padding: 10,
        //  zIndex: 1

    },
    hr: {
        width: wp(100),
        height: hp(70),
        zIndex: 10
    },
    slide: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',

    },
    containerx: {
        flex: 1,
        position: 'absolute',
        bottom: hp(10),
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: hp(2),
        padding: wp(2),
        width: wp(100),
        height: hp(40),



    },
    headerTextax: {
        marginBottom: hp(4),
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: wp(1.5),
        alignSelf: 'center',
        color: 'black', top: hp(1)

    },
    FirstText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF9900',
    },
    SecText: {

        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9900',

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#FF9900', // Adjust this color as needed

        // marginBottom: hp(4),
        marginLeft: wp(3),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        width: hp(45),
        alignSelf: 'flex-start',
        color: 'black'

    },
    actionSheetContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color of the overlay
    },
    actionSheetContent: {
        backgroundColor: 'white', // Background color of the ActionSheet
        padding: 16,
        borderRadius: 10,
    },
    SvgMusic: {
        marginTop: hp(2)
    },
    SecView: {
        flexDirection: 'row',
        borderColor: '#FF9900',
        marginTop: hp(2),
        height: hp(15),
        width: wp(95),
        marginLeft: wp(2),
        borderRadius: hp(2),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    musicIcon: {
        marginLeft: 'auto',
        marginRight: 20,
    },
    progressBarContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
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
    FirstTexta: {
        fontSize: 16,
        marginLeft: wp(6),
        fontWeight: 'bold',
        color: '#FF9900',
        paddingVertical:hp(2),
    },
    FirstTextaa: {

        fontSize: 16,
        marginLeft: wp(2),
        fontWeight: 'bold',
        color: '#FF9900',

    },
    FirstTextaaa: {

        fontSize: 18,
        marginLeft: wp(2),
        fontWeight: 'bold',
        color: 'black',
        // top: hp(5),
        // marginBottom: hp(8)

    },
    imagea: {
        borderRadius: 8,
        width: wp(20),
        // height: hp(10),
        padding: 6,
        backgroundColor: '#F9FAFB',
        marginVertical: 4,
        marginLeft: hp(5),
        justifyContent: 'space-between',
        position: 'relative',
    },
    image1: {
        width: wp(17),
        height: hp(8),
        borderRadius: 8,
        marginVertical: 4,
        alignSelf: 'center',
        top: hp(1)
    },
    selectedCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: -2,
        bottom: 0,
        borderRadius: 8,
        width: wp(20),
        height: hp(10),
        backgroundColor: '#CFF4FF',
        borderColor: '#00A9FF',
        borderWidth: hp(0.1),
    },
    image11: {
        // width: wp(32),
        // height: hp(10),
        // borderRadius: 8,
        // marginVertical: 4,
        // alignSelf: 'center'
    },
    imagex: {
        width: wp(6),
        height: wp(6),
        alignSelf: 'center'
    },
    imageax: {

        alignSelf: 'center',
        marginHorizontal: wp(6.5),
    },
    texta: {
        marginTop: hp(2),
        fontWeight: 'bold',
        color: 'white',
        fontSize: hp(1.5),
    },
    textc: {
        marginTop: hp(2),

        color: '#FF9900',
        fontWeight: 'bold',
        fontSize: hp(1.5),
    },
    textb: {
        marginTop: hp(1),

        color: 'white',
        fontSize: hp(1.5),
    },
    firstViewa: {
        flexDirection: 'row',
        backgroundColor: '#FF9900',
        marginTop: hp(5),
        height: hp(11),
        width: wp(85),
        marginLeft: wp(2),
        justifyContent: 'space-around',
        borderRadius: hp(2),
    },
    itemContainer: {
        marginTop: hp(1),
        width: hp(15),
        height: hp(4),
        borderRadius: wp(5),
        alignItems: 'center',
        justifyContent: 'center'


    },
    selectedItem: {
        borderColor: '#00A9FF',
        borderWidth: 1,
        backgroundColor: '#CFF4FF',
        width: hp(15),
        height: hp(4),
        borderRadius: wp(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatListContainer: {

        flexDirection: 'column'
    },
    inputa: {
        borderBottomWidth: 1,
        borderBottomColor: '#FF9900', // Adjust this color as needed

        marginTop: Platform.OS === 'ios' ? hp(2) : hp(0.5),
        width: hp(45),

        color: '#2A2A2A'

    },
    headerTextabcd: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: wp(1.5),
        color: 'black',
        bottom: hp(33)

    },
});