import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Images } from '../../assets/Image';
import { Svg, SvgXml } from 'react-native-svg';
import { Inst_Svg, Fb_Svg, Discord_Svg, twitter_Svg } from '../../assets/Svgs/SvgGroup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';
export default function Correct(props: any) {

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
        if (tab === 'HOME') {
            setModalVisible(true);
        }
    }; const [selectedTabModal, setSelectedTabModal] = useState('');
    const handleTabPressModal = (tab: string) => {
        setSelectedTabModal(tab);
        props.navigation.navigate('Summary');
    }; const [selectedTab, setSelectedTab] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[styles.container, modalVisible && styles.transparentBackground]}>
            <Image source={Images.Correct} style={styles.img} />
            <View style={{ backgroundColor: 'white', position: 'absolute', width: wp(90), height: hp(35), alignSelf: 'center', top: hp(50), padding: 20, borderRadius: 15 }}>
                <View style={styles.viewone}>

                    <Text style={styles.textone}>You have earned!</Text>
                    <Text style={styles.texts}> 1486</Text>
                    <Text style={styles.textt}>+3</Text></View>
                <Text style={styles.textr} >New Power Unlocked</Text>
                <View style={styles.viewx}>
                    <View style={styles.viewxx}>
                        <View style={styles.as}>
                            <Text style={styles.ss}>+1</Text>

                        </View>
                        <Text style={styles.p}>  Points</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.pp}>
                            <Text style={styles.px}>1</Text>

                        </View>
                        <Text style={styles.ppp}>  Wrong</Text>
                    </View>
                    <View style={{ flexDirection: 'row', right: wp(10) }}>
                        <View style={styles.ll}>
                            <Text style={styles.lx}>1</Text>

                        </View>
                        <Text style={styles.lk}>  Correct</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', top: hp(6), alignSelf: 'center' }}>

                    <TouchableOpacity onPress={() => handleTabPress('Restart')} >
                        <Text style={[styles.SecTextxx, selectedTab === 'Restart' && styles.selectedTab]}>RESTART</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleTabPress('HOME')} >
                        <Text style={[styles.SecTextxx, selectedTab === 'HOME' && styles.selectedTab]}>HOME</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ top: hp(7), fontSize: 12, alignSelf: 'center', color: 'black' }}>Share your scores</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', top: hp(8), }}>
                    <SvgXml xml={twitter_Svg} style={{ right: wp(14) }} />
                    <SvgXml xml={Discord_Svg} style={{ right: wp(6) }} />
                    <SvgXml xml={Fb_Svg} style={{ left: wp(3) }} />
                    <SvgXml xml={Inst_Svg} style={{ left: wp(12) }} />
                </View>
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    {/* Top image in the modal */}
                    <Image source={Images.TopImage} style={styles.topImage} />

                    {/* Buttons and text in the modal */}

                    {/* ... (similar components as in the main screen) */}
                    <Text style={{ top: hp(9), fontSize: 12, alignSelf: 'center', color: 'black', fontWeight: 'bold' }}>Share your score or invite others to play the game!</Text>
                    {/* ... (similar components as in the main screen) */}
                    <View style={{ flexDirection: 'row', top: hp(15), alignSelf: 'center' }}>

                        <TouchableOpacity onPress={() => handleTabPressModal('SCORE')} >
                            <Text style={[styles.SecTextxx, selectedTabModal === 'SCORE' && styles.selectedTab]}>SHARE SCORE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleTabPressModal('GAME')} >
                            <Text style={[styles.SecTextxx, selectedTabModal === 'GAME' && styles.selectedTab]}>SHARE GAME</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
