
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../../assets/Image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';
import { Nex_Svg, Next_Svg, QRKEarned_Svg, Qrk_Svg, QuizName_Svg, SkillUnlocked_Svg, line_Svg } from '../../assets/Svgs/SvgGroup';
export default function Summary(props: any) {
    const handleTabPressModal = () => {

        props.navigation.navigate('SummaryQuestion');
    };
    return (
        <View style={styles.container}>
            <View>
                <Image source={Images.Summarybg} style={styles.img} />
            </View>
            <View style={styles.viewone}>
                <SvgXml xml={line_Svg} style={styles.svgg} />
                <Text style={styles.ach}>Your Achievements</Text>
                <View style={styles.viewsec}>
                    <View style={{ flexDirection: 'row', width: wp(60) }}>
                        <SvgXml xml={QuizName_Svg} />
                        <View style={{ flexDirection: 'column', left: hp(1) }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>Quiz Name</Text>
                            <Text style={{ fontSize: 12, color: 'black', }}>Science and Technology</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', top: hp(2), width: wp(60) }}>
                        <SvgXml xml={QRKEarned_Svg} />
                        <View style={{ flexDirection: 'column', left: hp(1) }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>QRK Earned</Text>
                            <Text style={{ fontSize: 12, color: 'black', }}>You have earned 2 QRK points</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', top: hp(4), width: wp(60) }}>
                        <SvgXml xml={SkillUnlocked_Svg} />
                        <View style={{ flexDirection: 'column', left: hp(1) }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>Skill Unlocked</Text>
                            <Text style={{ fontSize: 12, color: 'black', }}>You have earned 2 QRK points</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={handleTabPressModal} style={{ alignSelf: 'center', top: hp(13) }}>
                    <SvgXml xml={Nex_Svg} />
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
        right: wp(14)
    }
})