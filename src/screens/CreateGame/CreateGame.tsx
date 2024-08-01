import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Cate_Svg, Hr_Svg, Levels_Svg, Qrk_Svg, Skill_Svg, whitearrow_Svg, whiteheart_Svg } from '../../assets/Svgs/SvgGroup';
import { styles } from '../Home/styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function CreateGame(props: any) {
    const navigation = useNavigation()
    const handleModalOpenax = () => {
        props.navigation.navigate('Loading');
    };
    return (
        <ScrollView style={styles.modalContainer}>

            <View style={styles.modalContenta}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>

                    <SvgXml xml={whitearrow_Svg} width={24} height={24} style={{ marginLeft: 0 }} onPress={() => navigation.goBack()} />
                    <Text style={{ color: 'white' }}>Home</Text>
                    <SvgXml xml={whiteheart_Svg} width={24} height={24} />
                </View>

                <SvgXml xml={Hr_Svg} style={{ bottom: hp(7), right: wp(4.7), width: wp(100) }} />

                <View style={styles.containerx}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: wp(4), }}>
                        <SvgXml xml={Skill_Svg} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: wp(2), fontWeight: 'bold', color: 'black' }}>Skill Name</Text>
                            <Text style={{ marginLeft: wp(2), fontSize: 10, color: 'black' }}>Mathematics</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: wp(4) }}>
                        <SvgXml xml={Levels_Svg} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: wp(2), fontWeight: 'bold', color: 'black' }}>Total Levels</Text>
                            <Text style={{ marginLeft: wp(2), fontSize: 10, color: 'black' }}>15 levels</Text></View>
                    </View>
                    <View style={styles.viewsec}>
                        <SvgXml xml={Cate_Svg} />
                        <View style={styles.catt}>
                            <Text style={styles.cat}>Game Category</Text>
                            <Text style={styles.textskills}>Algebra Skills</Text></View>
                    </View>
                    <View style={styles.viewfirst}>
                        <SvgXml xml={Qrk_Svg} />
                        <View style={styles.view1}>
                            <Text style={styles.qrktext}>QRK Earn</Text>
                            <Text style={styles.qrk}>10 QRK can be earned</Text></View>
                    </View>
                    <TouchableOpacity onPress={handleModalOpenax} style={styles.Buttona}><Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Create Game</Text></TouchableOpacity>
                </View>






            </View>





        </ScrollView>
    )
}

