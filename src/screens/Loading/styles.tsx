import { StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
    },
    tooltipContainer: {
        position: 'absolute',
        top: 10, // Adjust this as needed
        left: 10, // Adjust this as needed
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        borderRadius: 10,
        alignItems: 'center',
    },
    infoText: {
        color: 'white',
        marginBottom: 5,
    },
    progressContainer: {
        width: '100%',
        height: 20,
        backgroundColor: 'grey',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'skyblue',
        borderRadius: 10,
    },
    percentageText: {
        color: 'white',
        marginTop: 5,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'orange',
        marginHorizontal: 2,
    },
});
