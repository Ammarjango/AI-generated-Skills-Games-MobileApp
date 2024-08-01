import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontFamily from "../../assets/fonts";


export const styles = StyleSheet.create({
    wrapper: {

    },
    slide: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        position: 'absolute',
        bottom: hp(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#FF9900',
        borderWidth: 2,
        borderRadius: wp(6),
        padding: wp(2),
        width: wp(90),
        height: hp(27),
        top: hp(60),
    },
    text: {
        textAlign: "center",
        color: 'black',
        fontSize: 11,
        fontFamily: FontFamily.OpenSansMedium,
        marginBottom: hp(2)
    },
    textaxa: {
        textAlign: 'justify',
        color: 'black',
        fontSize: 12,
        fontFamily: FontFamily.OpenSansMedium,
        marginBottom: hp(2)
    },
    textaxxa: {
        textAlign: 'justify',
        color: 'black',
        fontSize: 12,
        fontFamily: FontFamily.OpenSansMedium,
        marginBottom: hp(2)
    },
    textaxxxa: {
        textAlign: 'justify',
        color: 'black',
        fontSize: 12,
        fontFamily: FontFamily.OpenSansMedium,
        marginBottom: hp(2)
    },
    nextButton: {
        paddingVertical: hp(1.5),
        backgroundColor: '#FF9900',
        borderRadius: wp(2),
        width: hp(35)
    },
    nextButtontext: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
    },
    button: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
        borderRadius: 5,
        marginBottom: hp(-5),
        color: 'white',
    },
    buttony: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
        borderRadius: 5,
        marginBottom: hp(2),
        marginLeft: hp(40),
        color: 'white',
    },
    buttonText: {
        color: 'white',
    },
    quizButton: {
        backgroundColor: '#FF9900',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('5%'),
        borderRadius: wp('2%'),
        marginBottom: hp(5.5),
        alignSelf: 'center',
    },
    quizButtonText: {
        color: 'white',
        fontSize: hp('2%'),
        fontWeight: 'bold',
    },
    containerx: {
        flex: 1,
        position: 'absolute',
        bottom: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

        padding: wp(2),
        width: wp(100),
        height: hp(50),
        top: hp(60),
    },
    textx: {
        textAlign: 'justify',
        color: '#FF9900',
        paddingHorizontal: wp(5),
        bottom: hp(10),
    },
    textxx: {
        textAlign: 'left',
        color: '#FF9900',
        marginRight: wp(32),
        bottom: hp(10),
    },
    textxxx: {
        textAlign: 'left',
        color: 'white',
        marginRight: wp(27.3),
        bottom: hp(10),
    },
    textxxxx: {
        color: 'white',
        marginRight: wp(17),
        bottom: hp(10),
    },
    texta: {
        color: 'white',
        paddingHorizontal: wp(2),
        bottom: hp(10),
        fontWeight: 'bold'
    },
    textb: {
        color: 'white',
        paddingHorizontal: wp(2),
        bottom: hp(10),
        fontWeight: 'bold',
        marginRight: wp(11)
    },
    textc: {
        color: '#FF9900',
        paddingHorizontal: wp(2),
        bottom: hp(10),
        fontWeight: 'bold',
        marginRight: wp(19)
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginVertical: hp(1),
        width: '80%',
        alignSelf: 'flex-start',
        position: 'relative',
        top: hp(-10),
        marginLeft: wp(6)
    },
    linea: {
        borderBottomWidth: 1,
        borderBottomColor: '#FF9900',
        marginVertical: hp(0.5),
        width: '80%',
        alignSelf: 'flex-start',
        position: 'relative',
        top: hp(-10),
        marginLeft: wp(5)
    },


});
