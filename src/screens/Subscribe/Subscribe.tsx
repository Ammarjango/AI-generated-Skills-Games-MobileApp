import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Images } from '../../assets/Image/index';
import { SvgXml } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TickSUb_Svg, Crosssub_Svg, BtnSub_Svg, Copy_Svg, Share_Svg, close } from '../../assets/Svgs/SvgGroup';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Subscribe = () => {

    const navigation = useNavigation()

    const [selectedOption, setSelectedOption] = useState('monthly');
    const [modalVisible, setModalVisible] = useState(false);
    const [referralCode, setReferralCode] = useState('');
    const handleBtnPress = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };
    const handlePress = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const [selectedTab, setSelectedTab] = useState('hero');
    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };
    const data = [{ id: 'hero', textone: 'Does not include ads.', texttwo: '5% discount on costumes.', textthree: 'No ads, just fun' },
    { id: 'super', textone: 'Does not include ads.', texttwo: '10% discount on costumes.', textthree: 'No ads, just fun' },
    { id: 'ultra', textone: 'It’s free & Contain Ads', texttwo: 'Just play and fun', textthree: 'Upgrade to remove Ads' },
    ]
    const renderPlanContent = () => {
        const selectedPlan = data.find((item) => item.id === selectedTab);

        return (
            <View style={styles.planContentContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}><SvgXml xml={TickSUb_Svg} style={{ top: hp(0.6) }} />
                    <Text style={styles.planContentText}>{selectedPlan?.textone}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}><SvgXml xml={TickSUb_Svg} style={{ top: hp(0.6) }} />
                    <Text style={styles.planContentText}>{selectedPlan?.texttwo}</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}><SvgXml xml={TickSUb_Svg} style={{ top: hp(0.6) }} />
                    <Text style={styles.planContentText}>{selectedPlan?.textthree}</Text></View>
            </View>
        );
    };

    return (

        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={Images.Sub} style={{ height: hp(50) }}
                >
                    <View style={{ marginLeft: wp(4), top: hp(6) }}>
                        <SvgXml xml={close} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: hp(35) }}>
                        <View style={styles.ViewOne}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: selectedOption === 'monthly' ? '#636366' : 'transparent',
                                    width: wp(30),
                                    alignItems: 'center',
                                    padding: 8,
                                    justifyContent: "center",
                                    borderRadius: 5,
                                    // marginHorizontal: 5,
                                }}
                                onPress={() => handlePress('monthly')}
                            >
                                <Text style={styles.TextOne}>Monthly</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: selectedOption === 'annual' ? '#636366' : 'transparent',
                                    width: wp(30),
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    borderRadius: 5,
                                    padding: 8,
                                    // marginHorizontal: 5,
                                }}
                                onPress={() => handlePress('annual')}
                            >
                                <Text style={styles.TextOne}>Annualy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ViewTwo}>
                        <Text style={styles.TextTwo}>Try for free. Cancel any time.</Text>
                    </View>
                </ImageBackground>
                <View style={styles.ViewThree}>
                    <Text style={styles.TextThree}>Pick your plan</Text>
                </View>
                <View style={styles.ViewFour}>
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={selectedTab === 'hero' ? ['#FF990075', '#FFAB2E',] : ['#636366', '#636366']}
                        style={styles.toucha}
                    >
                        <TouchableOpacity
                            onPress={() => handleTabPress('hero')}
                            style={[selectedTab === 'hero' && styles.selectedTab]}
                        >
                            <Text style={styles.TextFive}>HERO PLAN</Text>
                            <Text style={styles.TextSix}>It’s Free to use </Text>
                        </TouchableOpacity>
                    </LinearGradient>


                    <View style={styles.verticalLine} />
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={selectedTab === 'super' ? ['#FF990075', '#FFAB2E',] : ['#636366', '#636366']}
                        style={styles.touchb}
                    >

                        <TouchableOpacity
                            onPress={() => handleTabPress('super')}
                            style={[selectedTab === 'super' && styles.selectedTab]}
                        >
                            <Text style={styles.TextFive}>SUPERHERO {'\n'}PLAN</Text>
                            <Text style={styles.TextSix}>9.99€/month{'\n'}
                                after trial</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <View style={styles.verticalLine} />
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={selectedTab === 'ultra' ? ['#FF990075', '#FFAB2E',] : ['#636366', '#636366']}
                        style={styles.touchc}
                    >
                        <TouchableOpacity
                            onPress={() => handleTabPress('ultra')}
                            style={[, selectedTab === 'ultra' && styles.selectedTab]}
                        >
                            <Text style={styles.TextFive}>ULTRAHERO{'\n'}
                                PLAN</Text>
                            <Text style={styles.TextSix}>9.99€/month{'\n'}after trial</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {renderPlanContent()}
                <View>
                    <SvgXml xml={BtnSub_Svg} style={styles.btn} onPress={handleBtnPress} />
                </View>

                <Text style={styles.btnn}>14 days free, then 5,99€ month</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleModalClose}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={{ alignSelf: 'center', backgroundColor: '#2A2A2A', borderTopLeftRadius: 10, borderTopRightRadius: 10, bottom: 19.8, width: wp(80), height: hp(10) }}>
                                <Text style={styles.modalTitle}>Referral Code</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#727272', fontSize: 11, textAlign: 'center', margin: 4 }}>Invite your friends to feel the fun and excitement of this game</Text>

                            </View>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#FF9900'}
                                placeholder="Referral Code"
                                onChangeText={(text) => setReferralCode(text)}
                            />
                            <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: hp(0.5) }}>
                                    <SvgXml xml={Copy_Svg} />
                                    <Text style={styles.modalButtonText}>Submit</Text>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <SvgXml xml={Share_Svg} />
                                <Text style={{ color: '#8E8D90', bottom: hp(0.3), left: wp(2) }}>Share</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default Subscribe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    ViewOne: {
        flexDirection: 'row',
        alignItems: 'center',
        // bottom: hp(25),
        backgroundColor: "#76768052",
        padding: 2,
        borderRadius: 2

    },

    TextOne: {
        color: 'white',
    },
    verticalLine: {
        height: '99%',
        borderRightWidth: 1,
        borderRightColor: 'white',

    },
    touchaInner: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toucha: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(30),
        height: hp(19.5),
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
    },
    touchb: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    touchc: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    selectedTab: {
        //    backgroundColor: '#FFAB2E'
    },
    planContentContainer: {
        alignItems: 'flex-start',
        left: wp(15.5)
    },
    planContentText: {
        color: 'white',
        margin: 10,


    },
    ViewTwo: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: hp(5),
        borderRadius: 50,
        // bottom: hp(24)
    },
    TextTwo: {
        color: 'white',
        marginTop: hp(1)
    },
    ViewThree: {
        alignItems: 'center',
        height: hp(5),
    },
    TextThree: {
        color: 'white',
        marginTop: hp(1), fontWeight: 'bold'
    },
    ViewFour: {
        backgroundColor: '#636366',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: wp(93),
        padding: 1,
        height: hp(20),
        borderRadius: 15,
        alignSelf: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 1
    },
    TextFive: {
        color: 'white',
        fontWeight: 'bold', textAlign: 'center'
    },
    TextSix: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        marginTop: hp(2),
        alignSelf: 'center'
    },
    btnn: {
        color: 'white',
        alignSelf: 'center',
        marginTop: hp(2),
        marginBottom: hp(5)
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#F9FAFB',
        padding: 20,
        borderRadius: 10,
        height: hp(50),
        width: wp(80),
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
        top: hp(4),
        color: 'white'
    },
    input: {
        height: hp(7),
        borderColor: '#FF9900',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 25,

        color: '#FF9900',
        width: wp(60),
        alignSelf: 'center',
        margin: 10

    },
    modalButton: {
        backgroundColor: '#FFAB2E',
        padding: 10,
        height: hp(7),
        borderRadius: 25,
        width: wp(60),
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

})       