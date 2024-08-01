import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, Modal, Platform, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Updated import statement
import { Qrka_Svg, profile_Svg, AccSetting_Svg, Display_Svg, Sub_Svg, Legal_Svg, Set_Svg, Frd_Svg } from '../../assets/Svgs/SvgGroup';
import { LocalSvg, SvgXml } from 'react-native-svg';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Setting(props: any) {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOptiona, setSelectedOptiona] = useState(null);
    const [isDropdownOpena, setDropdownOpena] = useState(false);
    const [selectedOptionab, setSelectedOptionab] = useState(null);
    const [isDropdownOpenab, setDropdownOpenab] = useState(false);
    const [selectedOptionabc, setSelectedOptionabc] = useState(null);
    const [isDropdownOpenabc, setDropdownOpenabc] = useState(false);
    const [selectedOptionabcd, setSelectedOptionabcd] = useState(null);
    const [selectedOptionabcde, setSelectedOptionabcde] = useState(null);
    const [isDropdownOpenabcd, setDropdownOpenabcd] = useState(false);
    const toggleSwitch = () => {
        setIsSwitchOn((prev) => !prev);
        // Add your logic for handling the switch state change here
    }
    const toggle = () => {
        props.navigation.navigate('Update Profile');
        // Add your logic for handling the switch state change here
    }
    const togglea = () => {
        props.navigation.navigate('Language');
        // Add your logic for handling the switch state change here
    }
    const toggleab = () => {
        props.navigation.navigate('Fonts');
        // Add your logic for handling the switch state change here
    }
    const toggleabc = () => {
        props.navigation.navigate('Feedback');
        // Add your logic for handling the switch state change here
    }
    const toggleabcd = () => {
        props.navigation.navigate('FAQs');
        // Add your logic for handling the switch state change here
    }
    const handleDropdownChange = (item: any) => {
        setSelectedOption(item.value);
        setDropdownOpen(false);
        // Add your logic for handling the selected option here
    };
    const handleDropdownChangea = (item: any) => {
        setSelectedOptiona(item.value);
        setDropdownOpena(false);
        // Add your logic for handling the selected option here
    };
    const handleDropdownChangeab = (item: any) => {
        setSelectedOptiona(item.value);
        setDropdownOpena(false);
        // Add your logic for handling the selected option here
    };
    const handleDropdownChangeabc = (item: any) => {
        setSelectedOptiona(item.value);
        setDropdownOpena(false);
        // Add your logic for handling the selected option here
    };
    const Logout = () => {
        AsyncStorage.clear();
        props.navigation.replace("Verify Account");
    };

    return (
        <ScrollView
        >
            <View style={styles.container}>
                <View style={styles.firstView}>
                    <SvgXml xml={Set_Svg} style={{ left: Platform.OS === 'ios' ? wp(5) : wp(5), top: hp(2) }} />
                    <View style={{ marginLeft: wp(6), paddingTop: hp(2), flexDirection: "row", justifyContent: "space-between", width: wp(70) }}>
                        <View>
                            <Text style={styles.FirstText}>Go Premium</Text>
                            <Text style={styles.SecText}>Upgrade to remove ads, unlimited {"\n"}play and access all game</Text>
                        </View>
                        <View style={{ marginTop: hp(1) }}>
                            <SvgXml xml={Sub_Svg} style={{ alignSelf: 'flex-end', marginLeft: Platform.OS === 'ios' ? wp(15) : wp(2), marginBottom: Platform.OS === 'ios' ? hp(3.5) : hp(3) }} onPress={() => props.navigation.navigate('Subscribe')} />
                        </View>
                    </View>
                </View>
                <View style={{ margin: "3%" }}>
                    <Text style={styles.headerText}>Account Setting</Text>
                </View>
                <View style={{ backgroundColor: "white", marginTop: hp(1) }}>
                    <TouchableOpacity
                        style={styles.settingsSection}
                        //@ts-ignore
                        onPress={() => setSelectedOption((prevOption) => (prevOption === 'updateUsername' ? null : 'updateUsername'))}
                    >
                        <SvgXml xml={profile_Svg} />
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={styles.sectionText}>Profile</Text>
                            <Text style={styles.userEmail}>Update username, avatar, etc</Text></View>
                        <Ionicons
                            name={selectedOption === 'updateUsername' ? 'chevron-down-outline' : 'chevron-forward-outline'}
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {selectedOption === 'updateUsername' && (
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggle}>
                                <Text style={{ color: 'black' }}>Update Username</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleDropdownChange('updateAvatar')}>
                                <Text style={{ color: 'black' }}>Update Avatar</Text>
                            </TouchableOpacity>
                            {/* Add more options as needed */}
                        </View>
                    )}

                    <TouchableOpacity
                        style={styles.settingsSectionb}
                        //@ts-ignore
                        onPress={() => setSelectedOptiona((prevOption) => (prevOption === 'updateUsername' ? null : 'updateUsername'))}
                    >
                        <SvgXml xml={AccSetting_Svg} />
                        <View style={{ flexDirection: 'column', marginRight: wp(16) }}>
                            <Text style={styles.sectionText}>Account Settings</Text>
                            <Text style={styles.userEmail}>email, passwords etc.</Text>
                        </View>
                        <Ionicons
                            name={selectedOptiona === 'updateUsername' ? 'chevron-down-outline' : 'chevron-forward-outline'}
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {selectedOptiona === 'updateUsername' && (
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggle}>
                                <Text style={{ color: 'black' }}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleDropdownChange('updateAvatar')}>
                                <Text style={{ color: 'black' }}>Password</Text>
                            </TouchableOpacity>
                            {/* Add more options as needed */}
                        </View>
                    )}


                    <TouchableOpacity
                        style={styles.settingsSectionc}
                        //@ts-ignore
                        onPress={() => setSelectedOptionab((prevOption) => (prevOption === 'updateUsername' ? null : 'updateUsername'))}
                    >
                        <SvgXml xml={Qrka_Svg} />
                        <View style={{ flexDirection: 'column', marginRight: wp(5) }}>
                            <Text style={styles.sectionText}>QRK Story</Text>
                            <Text style={styles.userEmail}>replay of the opening story</Text>
                        </View>
                        <Ionicons
                            name={selectedOptionab === 'updateUsername' ? 'chevron-down-outline' : 'chevron-forward-outline'}
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {selectedOptionab === 'updateUsername' && (
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggle}>
                                <Text style={{ color: 'black' }}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleDropdownChange('updateAvatar')}>
                                <Text style={{ color: 'black' }}>Password</Text>
                            </TouchableOpacity>
                            {/* Add more options as needed */}
                        </View>
                    )}


                    <TouchableOpacity
                        style={styles.settingsSectionh}
                        //@ts-ignore
                        onPress={() => setSelectedOptionabc((prevOption) => (prevOption === 'updateUsername' ? null : 'updateUsername'))}
                    >
                        <SvgXml xml={Frd_Svg} />
                        <View style={{ flexDirection: 'column', marginRight: wp(5) }}>
                            <Text style={styles.sectionText}>Referral Friend</Text>
                            <Text style={styles.userEmail}>Share your code get 10% off </Text>
                        </View>
                        <Ionicons
                            name={selectedOptionabc === 'updateUsername' ? 'chevron-down-outline' : 'chevron-forward-outline'}
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {selectedOptionabc === 'updateUsername' && (
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggle}>
                                <Text style={{ color: 'black' }}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleDropdownChange('updateAvatar')}>
                                <Text style={{ color: 'black' }}>Password</Text>
                            </TouchableOpacity>
                            {/* Add more options as needed */}
                        </View>
                    )}
                </View>

                <View style={styles.headera}>
                    <Text style={styles.headerTexta}>OTHER</Text>
                </View>
                <View style={styles.headeraa}>
                    <Text style={styles.headerTextaa}>Notification</Text>

                    <View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF9900" }}
                            thumbColor={isSwitchOn ? "#FF9900" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isSwitchOn}
                        />
                    </View>
                </View>
                <View >
                    <TouchableOpacity
                        style={styles.settingsSectiond}
                        //@ts-ignore
                        onPress={() => setSelectedOptionabcd((prevOption) => (prevOption === 'updateUsername' ? null : 'updateUsername'))}
                    >
                        <SvgXml xml={Display_Svg} />
                        <View style={{ flexDirection: 'column', marginRight: wp(5) }}>
                            <Text style={styles.sectionText}>Display</Text>
                            <Text style={styles.userEmail}>Change Language, font etc.</Text>
                        </View>
                        <Ionicons
                            name={selectedOptionabcd === 'updateUsername' ? 'chevron-down-outline' : 'chevron-forward-outline'}
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {selectedOptionabcd === 'updateUsername' && (
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={togglea}>
                                <Text style={{ color: 'black' }}>Change Language</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggleab}>
                                <Text style={{ color: 'black' }}>Change Fonts</Text>
                            </TouchableOpacity>
                            {/* Add more options as needed */}
                        </View>
                    )}
                </View>

                <View >
                    <TouchableOpacity
                        style={styles.settingsSectione}
                        //@ts-ignore
                        onPress={() => setSelectedOptionabcde((prevOption) => (prevOption === 'updateUsername' ? null : 'updateUsername'))}
                    >
                        <SvgXml xml={Legal_Svg} />
                        <View style={{ flexDirection: 'column', marginRight: wp(24) }}>
                            <Text style={styles.sectionText}>Legal </Text>
                            <Text style={styles.userEmail}>FAQs and Feedback</Text>
                        </View>
                        <Ionicons
                            name={selectedOptionabcde === 'updateUsername' ? 'chevron-down-outline' : 'chevron-forward-outline'}
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {selectedOptionabcde === 'updateUsername' && (
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggleabcd}>
                                <Text style={{ color: 'black' }}>FAQs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={toggleabc}>
                                <Text style={{ color: 'black' }}>Feedback</Text>
                            </TouchableOpacity>

                            {/* Add more options as needed */}
                        </View>
                    )}
                </View>

                <TouchableOpacity style={styles.headerax} onPress={Logout}>
                    <Text style={styles.headerTextax}>Log Out</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

