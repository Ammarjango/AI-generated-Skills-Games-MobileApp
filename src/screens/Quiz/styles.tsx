import { StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFF4FF'

    },
    optionsContainer: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    optionsRow: {
        flexDirection: 'column',
        justifyContent: 'center',



    },
    feedbackIcone: {
        width: wp(6),
        height: hp(0),
        borderRadius: hp(10),
        marginRight: wp(8),
        bottom: hp(3),

        borderColor: 'white',

        left: wp(3)


        // Adjust as needed
    },
    feedbackIcon: {
        width: wp(6),
        height: hp(0),
        borderRadius: hp(10),
        marginRight: wp(8),
        bottom: hp(3),
        left: wp(3.2),
        borderColor: 'white',



        // Adjust as needed
    },

    feedbackText: {
        color: '#FF9900',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        bottom: hp(0.3),


    },
    optionItem: {
        width: wp(90),
        height: hp(8),

        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF9900',
        margin: 4,



    },
    pagination: {
        flexDirection: 'row',

        marginTop: hp(1),


    },
    paginationItem: {
        marginHorizontal: wp(2),
        padding: hp(1),
        height: hp(5),
        width: wp(10),
        alignItems: 'center',
        borderRadius: hp(10),
        bottom: hp(0.5),
        borderWidth: 1,
        borderColor: '#FF9900',
    },
    paginationItemSelected: {
        backgroundColor: '#FF9900',
        color: 'white',
    },
    circle: {
        width: 20, // adjust the width based on your preference
        height: 20, // adjust the height based on your preference
        borderRadius: 15, // half of the width and height to make it a circle
        backgroundColor: 'white', // background color of the circle
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#FF9900',
        borderWidth: 1,
        textAlign: 'center',
        right: wp(4)


    },
    circlee: {
        width: 20, // adjust the width based on your preference
        height: 20, // adjust the height based on your preference
        borderRadius: 15, // half of the width and height to make it a circle
        backgroundColor: 'white', // background color of the circle
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#FF9900',
        borderWidth: 1,
        textAlign: 'center',
        right: wp(4)


    },


    firstView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: hp(0),
        height: hp(10),
        width: wp(96),
        justifyContent: 'space-between',
        borderRadius: hp(2),
        alignItems: 'center',
        alignSelf: 'center'
    },
    image: {
        width: wp(16),
        height: hp(8),
        // resizeMode: 'contain',
        borderRadius: wp(40),
        left: wp(3)


    },
    imagea: {
        width: wp(100),
        height: hp(60),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: hp(-16),



    },

    FirstText: {

        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF9900',
        right: wp(3)
    },
    SecText: {
        marginTop: hp(-3),
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9900'
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
        right: wp(3)


    },
    SecTexta: {

        fontSize: 12,

        color: '#FF9900',
        marginLeft: wp(4)
    },
    SecTextab: {

        fontSize: 12,
        marginTop: hp(-16),
        color: 'black',
        marginLeft: wp(1)
    },
    firstViewa: {

        backgroundColor: '#FFFFFF',
        borderColor: '#EFEEFC',
        marginTop: hp(1),
        height: hp(5),
        width: wp(96),
        marginLeft: wp(2),

    },

});