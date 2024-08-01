import React, { useState } from 'react';
import { FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Arrow_Svg, Btn_Svg, Cross_Svg, Fire_Svg, Gam_Svg, Hero_Svg, Home_Svg, Mathss_Svg, Rocket_Svg, Star_Svg, Algebra_Svg, Num_Svg, Fin_Svg, Stat_Svg, Cal_Svg } from '../../assets/Svgs/SvgGroup';
import { styles } from '../Home/styles';
import { Images } from '../../assets/Image';
const skillData = [
    { id: '1', name: Algebra_Svg },
    { id: '2', name: Cal_Svg },
    { id: '3', name: Num_Svg },
    { id: '4', name: Stat_Svg },
    { id: '5', name: Fin_Svg },
    // Add more skills as needed
];

const SearchSkill = (props) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState(0.5);
    const [skill, setSkill] = useState('');

    const handleModalOpen = () => {
        props.navigation.navigate('CreateGame');
        setModalVisible(false);
    };

    const handleItemPress = (id) => {
        setSelectedItemId(id);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const renderCustomLabel = (value) => (
        <View style={{ width: 30, height: 30, backgroundColor: '#FF9900', borderRadius: 25, top: hp(0.5), justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FBFDFF', fontWeight: 'bold' }}>
                {Math.round(value)}
            </Text>
        </View>
    );

    const handleValuesChange = (values) => {
        setSliderValue(values[0]);
    };

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <SvgXml xml={Arrow_Svg} width={30} height={30} style={{ marginLeft: 0 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FF9900' }}>Home</Text>
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginLeft: 15 }} />
                </View>
                <Text style={styles.headerTextabc}>Search Skill</Text>
                <TextInput
                    style={[styles.inputa]}
                    placeholder="Search Skill"
                    placeholderTextColor="#2A2A2A"
                    onChangeText={(text) => setSkill(text)}
                />
                <Text style={styles.headerTextab}>Did You Mean This?</Text>
                <FlatList
                    data={skillData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleItemPress(item.id)}
                            style={[styles.itemContainer, selectedItemId === item.id && styles.selectedItem]}
                        >
                            <SvgXml xml={item.name} />
                        </TouchableOpacity>
                    )}
                />
                <Text style={styles.headerTextabcd}>or Stick with</Text>
                <SvgXml xml={Mathss_Svg} style={styles.headerTextabcd} />
            </View>
            <Modal visible={isModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleModalClose} style={styles.closeIcon}>
                            <SvgXml xml={Cross_Svg} />
                        </TouchableOpacity>
                        <SvgXml xml={Hero_Svg} style={styles.imagex} />
                        <View style={styles.firstViewa}>
                            <Image source={Images.Gam} style={{ width: wp(25), height: hp(10), resizeMode: "center" }} />
                            {/* <SvgXml xml={Gam_Svg} style={styles.imageax} /> */}
                            <View style={{ flexDirection: 'column', right: wp(5) }}>
                                <Text style={styles.texta}>Name: Let’s play the Music</Text>
                                <Text style={styles.textb}>Category: Music & Media</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 5 }}>
                            <Text style={styles.textc}>The higher the numbers, the slower the gradation of difficulty will be.</Text>
                            <SvgXml xml={Fire_Svg} />
                            <SvgXml xml={Star_Svg} />
                            <SvgXml xml={Rocket_Svg} />
                        </View>
                        <View>
                            <Text style={{ color: '#FF9900', marginLeft: 10, fontWeight: 'bold', fontSize: 25 }}>
                                Select Level
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', top: hp(2) }}>
                                <MultiSlider
                                    customMarker={() => renderCustomLabel(sliderValue)}
                                    values={[sliderValue]}
                                    onValuesChange={handleValuesChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                    enabledOne
                                    minMarkerOverlapDistance={1}
                                    trackStyle={{ width: '90%', height: hp(1.5), borderRadius: 5, backgroundColor: 'lightgray' }}
                                    selectedStyle={{ backgroundColor: '#FF9900' }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={handleModalOpen} style={styles.Button}>
                            <SvgXml xml={Btn_Svg} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SearchSkill;
