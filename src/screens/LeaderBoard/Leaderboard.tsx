import { ActivityIndicator, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, PanResponder, Animated } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { AddIcon_Svg, Crown_Svg, FirstPerson_Svg, Person_Svg, RankSec_Svg, RankTxt_Svg, RankingFirst_Svg, RankingSec_Svg, RankingThird_Svg, SecPerson_Svg, ThirdPerson_Svg } from '../../assets/Svgs/SvgGroup';
import { Images } from '../../assets/Image/index';
import { styles } from './styles';
import { dataServer } from '../../Service/AxiosConfig';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import FontFamily from '../../assets/fonts';
export default function Leaderboard(props: any) {
    const [selectedTab, setSelectedTab] = useState('Country');
    const [loading, setLoading] = useState(true);
    //@ts-ignore
    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };
    const handle = (item: any) => {
        props.navigation.navigate('PlayerProfile', { item: item });
    };

    useFocusEffect(
        React.useCallback(() => {
            GettinAsyncValue();
        }, [])
    );


    const GettinAsyncValue = async () => {
        let number = await AsyncStorage.getItem('userPhone');
        if (number !== null) {
            GetAll(number)
        }
    }
    const [FrdRequest, setFrdRequest] = useState([]);
    const GetAll = async (number: any) => {
        setLoading(true);
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            console.log('token', accessToken);
            if (accessToken !== null) {
                // Access token is retrieved successfully
                console.log('Access Token:', accessToken);
                const config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.get('/users/getUsers', config);
                const users = response?.data?.users || [];
                const filteredUsers = users.filter(user => user.phoneNumber !== number);
                // console.log('users', filteredUsers.map(user => user.friendRequestStatus));
                setFrdRequest(filteredUsers);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    const SendRequest = async (id: any) => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        setLoading(true)
        try {
            if (accessToken !== null) {

                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.post(`/users/sendFriendRequest/${id}`, {}, config)

                console.log('data ', response?.data);
                GettinAsyncValue()
                setLoading(false)
                Toast.show({
                    type: 'info',
                    text1: 'Info',
                    text2: 'Friend Request Send Successfully!',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        }
        catch (error) {
            setLoading(false)
            Toast.show({
                type: 'info',
                text1: 'Info',
                text2: 'Friend Request Already Send!',
                visibilityTime: 3000,
                autoHide: true,
            });
        }

    }



    const handleItemClick = (item: any) => {
        const { fullName, _id, points } = item;
        props.navigation.navigate('PlayerProfile', {
            fullName,
            _id,
            points
        });
    };

    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const renderListItems = () => {
        return
    };
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.mainview}>
                    <Text style={styles.qrk}>Global QRK:</Text>
                    <Text style={styles.txt}>12570</Text>
                </View>

                <View style={styles.secview}>
                    <TouchableOpacity onPress={() => handleTabPress('Country')} style={{ flex: 1, backgroundColor: selectedTab === 'Country' ? '#FF9900' : 'transparent', height: hp(4.3), borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: selectedTab === 'Country' ? 'white' : '#8E8D90', fontSize: 13, fontFamily: FontFamily.OpenSansRegular, fontWeight: 'bold' }}>Country</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('World Rank')} style={{ flex: 1, backgroundColor: selectedTab === 'World Rank' ? '#FF9900' : 'transparent', height: hp(4.3), borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: selectedTab === 'World Rank' ? 'white' : '#8E8D90', fontSize: 13, fontFamily: FontFamily.OpenSansRegular, fontWeight: 'bold', }}>World Rank</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.thirdview}>
                    <TouchableOpacity onPress={() => handleTabPress('ALL')} style={[styles.tab, { backgroundColor: selectedTab === 'ALL' ? 'black' : 'white' }]}>
                        <Text style={{ color: selectedTab === 'ALL' ? 'white' : '#8E8D90', textAlign: 'center' }}>ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('CULTURE')} style={[styles.tab, { backgroundColor: selectedTab === 'CULTURE' ? 'black' : 'white' }]}>
                        <Text style={{ color: selectedTab === 'CULTURE' ? 'white' : '#8E8D90', textAlign: 'center' }}>CULTURE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('MEDIA')} style={[styles.tab, { backgroundColor: selectedTab === 'MEDIA' ? 'black' : 'white' }]}>
                        <Text style={{ color: selectedTab === 'MEDIA' ? 'white' : '#8E8D90', textAlign: 'center' }}>MEDIA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('SPORTS')} style={[styles.tab, { backgroundColor: selectedTab === 'SPORTS' ? 'black' : 'white' }]}>
                        <Text style={{ color: selectedTab === 'SPORTS' ? 'white' : '#8E8D90', textAlign: 'center' }}>SPORTS</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flexDirection: "column", width: wp(30), alignItems: "center", justifyContent: "center", top: hp(9) }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Bruno Kin</Text>
                        <View>
                            <SvgXml xml={SecPerson_Svg} style={{ marginTop: hp(2) }} />
                        </View>
                        <View >
                            <Text style={styles.textxa}>10,000 QRK</Text>
                            <SvgXml xml={RankSec_Svg} />
                        </View>
                        <View>
                            <SvgXml xml={RankingSec_Svg} style={{}} />
                        </View>

                    </View>
                    <View style={{ flexDirection: "column", width: wp(30), alignItems: "center", justifyContent: "center", marginTop: hp(8) }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Anderson</Text>
                        <View>
                            <SvgXml xml={Crown_Svg} style={{ alignSelf: 'center', }} />
                            <SvgXml xml={FirstPerson_Svg} />
                        </View>
                        <View >
                            <Text style={styles.textxa}>12,100 QRK</Text>
                            <SvgXml xml={RankTxt_Svg} />
                        </View>
                        <View>
                            <SvgXml xml={RankingFirst_Svg} />
                        </View>

                    </View>
                    <View style={{ flexDirection: "column", width: wp(30), alignItems: "center", justifyContent: "center", top: hp(9) }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Marz Menz</Text>
                        <View>
                            <SvgXml xml={ThirdPerson_Svg} style={{ marginTop: hp(2) }} />
                        </View>
                        <View >
                            <Text style={styles.textxa}>9,100 QRK</Text>
                            <SvgXml xml={RankTxt_Svg} />
                        </View>
                        <View>
                            <SvgXml xml={RankingThird_Svg} style={{}} />
                        </View>

                    </View>
                </View>
            </ScrollView >

            <BottomSheet
                style={{ width: "90%", marginLeft: "6%" }}
                ref={bottomSheetRef}
                snapPoints={['30%', '75%']}
                onChange={handleSheetChanges}
            >
                {loading ?
                    (
                        <View>
                            <ActivityIndicator color={'#FF9900'} size={25} />
                        </View>
                    )
                    :
                    (
                        <BottomSheetView style={styles.contentContainer}>
                            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                                {FrdRequest.map((item, index) => (
                                    <TouchableOpacity key={index} style={styles.item} onPress={() => handleItemClick(item)}>
                                        <View style={{ backgroundColor: 'white', width: wp(6), height: wp(6), borderRadius: wp(3), alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#FF9900', }}>{index + 1}</Text>
                                        </View>
                                        <View style={styles.leftContent}>
                                            <SvgXml xml={Person_Svg} />
                                            <View style={styles.textContainer}>
                                                <Text style={styles.name}> {item.fullName ? item.fullName.split('-')[0] : ''} </Text>
                                                <Text style={styles.qrkNumber}>{`${item.points} QRK`}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.rightContent}>
                                            {item.friendRequestStatus === null && (
                                                <TouchableOpacity style={styles.followButton} onPress={() => SendRequest(item._id)}>
                                                    <SvgXml xml={AddIcon_Svg} />
                                                    <Text style={styles.followButtonText}>Follow</Text>
                                                </TouchableOpacity>
                                            )}
                                            {item.friendRequestStatus === "Pending" && (
                                                <TouchableOpacity style={{
                                                    backgroundColor: 'white',
                                                    padding: 8,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: 5,
                                                    flexDirection: 'row',
                                                    paddingHorizontal: 6
                                                }}>
                                                    <Text style={styles.followButtonText}>Pending Request</Text>
                                                </TouchableOpacity>
                                            )}
                                            {item.friendRequestStatus === "Accepted" && (
                                                <TouchableOpacity style={{
                                                    backgroundColor: 'white',
                                                    padding: 8,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: 5,

                                                    flexDirection: 'row',
                                                    paddingHorizontal: 12
                                                }}>
                                                    <Text style={styles.followButtonText}>Followed</Text>
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </BottomSheetView>
                    )

                }
            </BottomSheet>
        </View >

    )
}


