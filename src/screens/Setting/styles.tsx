import { Platform, StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    SecText: {
        marginTop: hp(0),
        fontSize: 10,
        textAlign: 'justify',
        color: '#FFFFFF',

    },
    firstView: {
        flexDirection: 'row',
        backgroundColor: '#FF9900',
        height: hp(10),
        width: wp(95),
        alignSelf: 'center',
        borderRadius: hp(2),
        marginHorizontal: wp(2)
    }, FirstText: {
        marginTop: hp(0),
        fontSize: 14,
        color: '#FFFFFF'
    },
    dropdownContainer: {
        marginBottom: 16,
    }, dropdown: {
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    dropdownContent: {
        marginTop: hp(2),
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderColor: '#ccc',
        borderRadius: 8,
    },
    dropdownItem: {
        paddingVertical: 8,

        backgroundColor: '#f5f5f5',
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    header: {
        justifyContent: 'flex-start',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9900'
    },
    headera: {
        justifyContent: 'flex-start',
        top: hp(3),
        marginBottom: 10,
    },
    headerTexta: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9900'
    },
    headerax: {
        justifyContent: 'center',
        width: wp(20),
        height: hp(4.7), alignSelf: 'center', marginTop: hp(3),
    },
    headerTextax: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9900',
        alignSelf: 'center'
    },
    headeraa: {
        justifyContent: "space-between",
        width: wp(88),
        alignItems: "center",
        top: hp(2),
        flexDirection: 'row',
    },
    headerTextaa: {
        fontSize: 14,
        color: 'black'
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        color: 'gray',
    },
    settingsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    settingsSectionb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
        marginTop: hp(2),
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 2,
            },
        }),

    },
    settingsSectionc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        marginTop: hp(2),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    settingsSectionh: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        marginTop: hp(2),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 2,
            },
        }),

    },


    settingsSectiond: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
        marginTop: hp(3),
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    settingsSectione: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
        marginTop: hp(3),
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    sectionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
});