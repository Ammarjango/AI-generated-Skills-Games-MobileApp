import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontFamily from '../../assets/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'white',

    },
    headerText: {
        fontSize: 16,
        alignSelf: 'flex-start',
        fontFamily: FontFamily.OpenSansSemiBold,
        fontWeight: 'bold',
        color: 'black'
    },
    headerTexty: {
        fontSize: 12,
        alignSelf: 'flex-start',
        marginTop: hp(1.5),
        fontFamily: FontFamily.OpenSansRegular,
        color: 'grey'
    },
    headerTexta: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: wp(1.5),
        alignSelf: 'center'

    },
    headerTextax: {
        marginBottom: hp(0),
        fontSize: 10,
        fontWeight: 'bold',

        alignSelf: 'center',
        color: 'black',
        marginRight: wp(7),
        bottom: hp(2)

    },
    item: {
        flex: 1,
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center'
    },
    image: {
        width: wp(20),
        height: hp(11),
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: hp(2),
        marginVertical: hp(1),
        marginRight: hp(5),
        marginLeft: wp(1),
        justifyContent: 'space-between',
        position: 'relative',
    },
    image1: {
        width: wp(10),
        height: hp(5),
        borderRadius: 8,
        // marginVertical: 4,
        alignSelf: 'center',
        top: hp(2.5)
    },
    selectedCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 2,
        bottom: 2,
        borderRadius: 40,
        width: wp(20),
        height: hp(10),
        backgroundColor: '#CFF4FF',
        borderColor: '#00A9FF',
        borderWidth: hp(0.1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectButton: {
        backgroundColor: '#FF9900',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        bottom: hp(15),
        width: wp(70),
        alignSelf: 'center'
    },
    selectButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});