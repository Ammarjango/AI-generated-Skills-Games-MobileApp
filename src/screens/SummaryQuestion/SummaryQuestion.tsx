
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../../assets/Image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';
import { Homee_Svg, Nex_Svg, Next_Svg, QRKEarned_Svg, Qrk_Svg, QuizName_Svg, SkillUnlocked_Svg, line_Svg } from '../../assets/Svgs/SvgGroup';
export default function SummaryQuestion(props: any) {
    const handleTabPressModal = () => {

        props.navigation.navigate('Home');
    };
    const data = [
        { question: "Can you name the top 3 Premier League goal scorers?", answer: "Sadio Mane - Lorem ipsum is the dummy text", circleNumber: "1" },
        { question: "Can you name the top 3 Premier League goal scorers?", answer: "Sadio Mane - Lorem ipsum is the dummy text", circleNumber: "2" },
        { question: "Can you name the top 3 Premier League goal scorers?", answer: "Sadio Mane - Lorem ipsum is the dummy text", circleNumber: "3" },
        { question: "Can you name the top 3 Premier League goal scorers?", answer: "Sadio Mane - Lorem ipsum is the dummy text", circleNumber: "4" },

        // Add more data items as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.leftCircle}>
                <Text style={styles.circleText}>{item.circleNumber}</Text>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={styles.answerText}>{item.answer}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View>
                <Image source={Images.Summarybggg} style={styles.img} />
            </View>
            <View style={styles.viewone}>
                <SvgXml xml={line_Svg} style={styles.svgg} />
                <Text style={{ color: 'rgba(255, 153, 0, 1)', fontSize: 17, top: hp(2.4), fontWeight: 'bold', left: wp(8) }}>Learning Summary</Text>
                <View style={{ bottom: hp(10) }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.circleNumber}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </View>
                <TouchableOpacity onPress={handleTabPressModal} style={{ alignSelf: 'center', bottom: hp(9) }}>
                    <SvgXml xml={Homee_Svg} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewone: {
        top: hp(50),
        height: '60%',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 20
    },
    img: {

    },
    svgg: {
        alignSelf: 'center',
        top: hp(2)
    },
    ach: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        left: wp(5),
        top: hp(5)
    },
    viewsec: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: hp(7),
        right: wp(10)
    },
    flatListContainer: {
        paddingTop: hp(13), // Adjust the top padding as needed
        paddingHorizontal: wp(5),
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: hp(0.5)

    },
    leftCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        // Customize the circle background color
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(3),
        borderWidth: 1,
        borderColor: '#FF9900',

    },
    circleText: {
        color: '#FF9900', // Customize the circle text color
        fontWeight: 'bold',
        fontSize: 16,
    },
    questionContainer: {
        flex: 1,
    },
    questionText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    answerText: {
        fontSize: 11,
        color: 'gray',
    },
})