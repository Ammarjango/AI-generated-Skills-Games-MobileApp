import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5), // 5% of the screen's width
        backgroundColor: 'white'
    },
    title: {
        fontSize: hp(3), // 3% of the screen's height
        fontWeight: 'bold',
        marginBottom: hp(2), // 2% of the screen's height
        color: '#FF9900',
    },
    message: {
        fontSize: hp(1.7), // 1.5% of the screen's height
        marginBottom: hp(1), // 1% of the screen's height
        color: '#7E7E7E'
    },
    root: { padding: 20, minHeight: 300 },
    titlee: { textAlign: 'center', fontSize: 25, color: '#FF9900', fontWeight: 'bold', bottom: hp(4) },
    codeFieldRoot: {
        marginTop: 15,
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
        bottom: hp(4)
    },
    cellRoot: {
        width: wp(10),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    cellText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    phoneNumber: {
        fontSize: hp(1.7), // 2% of the screen's height
        fontWeight: 'bold',
        marginBottom: hp(3), // 3% of the screen's height
        color: 'black',
    },
    input: {
        height: hp(6), // 6% of the screen's height
        width: wp(80), // 80% of the screen's width
        borderColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        marginBottom: hp(3), // 3% of the screen's height
        textAlign: 'center',
        fontSize: hp(2), // 2% of the screen's height
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    resendButton: {
        marginBottom: hp(3), // 3% of the screen's height
        flexDirection: 'row'
    },
    txtt: {
        fontSize: hp(1.5),
        color: 'black'
    },
    resendButtonText: {
        color: '#FF9900',
        fontSize: hp(1.5), // 1.5% of the screen's height
    },
    verifyButton: {
        backgroundColor: '#FF9900',
        padding: hp(2), // 2% of the screen's height
        borderRadius: 5,
        width: wp(80), // 80% of the screen's width
    },
    verifyButtonText: {
        color: 'white',
        fontSize: hp(2), // 2% of the screen's height
        textAlign: 'center',
        fontWeight: 'bold',
    },
    wrongNumber: {
        marginTop: hp(3), // 3% of the screen's height
        color: 'black',
        fontSize: hp(1.5), // 1.5% of the screen's height

        bottom: hp(6),
        fontWeight: 'bold'
    },
    termsText: {
        marginTop: hp(3), // 3% of the screen's height
        fontSize: hp(1.5), // 1.5% of the screen's height
        textAlign: 'center',
    },
});
