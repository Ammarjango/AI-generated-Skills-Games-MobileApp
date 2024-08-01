import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput, Modal, Button, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you have a vector icon library installed
import Svg, { ClipPath, Ellipse, LinearGradient, Path, Polygon, Rect, Stop, SvgXml } from 'react-native-svg';
import { Splash_Svg, Music_Svg, Lock_Svg, Hero_Svg, World_Svg, Pro_Svg, Hr_Svg, Btn_Svg, Next_Svg, Cup_Svg, Maths_Svg, Sci_Svg, Mathss_Svg, History_Svg, Cross_Svg, Geography_Svg, Art_Svg, Sports_Svg, Gam_Svg, Star_Svg, Fire_Svg, Rocket_Svg, Skill_Svg, Levels_Svg, Cate_Svg, Qrk_Svg, SS_SVg, Search_Svg, ADD_Svg } from '../../assets/Svgs/SvgGroup';
import { Images } from '../../assets/Image/index';
import { styles } from './styles';
import ActionSheet from "react-native-actions-sheet";
import Slider from '@react-native-community/slider';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CircularProgress from 'react-native-circular-progress-indicator';
// import { ScrollView } from 'react-native-gesture-handler';
import { Line, G, Text as SvgText } from 'react-native-svg';
import { Circle } from 'react-native-svg';

import ImageRow from '../../components/ImageRow';
//@ts-ignore
import { ProgressCircle } from 'react-native-svg-charts';
import { BulletPointBox } from '../../components/BulletPointBox';
import { MyPieChart } from '../../components/MyPieChart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { dataServer } from '../../Service/AxiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userData } from '../../redux/reducers/appReducers';
import { Fat_Character_Base, Fat_Character_Costume_1, Fat_Character_Costume_2, Fat_Character_Costume_3, Muscular_Character_Base, Muscular_Character_Costume_1, Muscular_Character_Costume_2, Muscular_Character_Costume_3, Skinny_Character_Base, Skinny_Character_Costume_1, Skinny_Character_Costume_2, Skinny_Character_Costume_3 } from '../3dTest';
import { RefreshControl } from 'react-native';
import Toast from 'react-native-toast-message';
import { err } from 'react-native-svg/lib/typescript/xml';


const skillsData = [
    { skill: 'Sci', value: 50, color: '#FF9900' },
    { skill: 'Music', value: 30, color: '#56A8C6' },
    { skill: 'Arts', value: 30, color: '#FF5E77' },
    { skill: 'Sports', value: 30, color: '#8E56C6' },
];
const Img = [
    { id: 1, img: Images.One },
    { id: 2, img: Images.Two },
    { id: 3, img: Images.Three },
    { id: 4, img: Images.Four },
    { id: 5, img: Images.Five },
    { id: 6, img: Images.Six },
];
const pendingRequests = [
    { id: 1, name: 'John Doe', email: 'john@example.com', img: Images.One },
    { id: 2, name: 'John Doe', email: 'john@example.com', img: Images.One },
    // Add more pending request items
];

const pendingInvitations = [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com', img: Images.One },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', img: Images.One },
    // Add more pending invitation items
];

const alliesList = [
    { id: 1, name: 'Alice', email: 'alice@example.com', img: Images.One },
    { id: 2, name: 'Alice', email: 'alice@example.com', img: Images.One },
    // Add more allies items
];


export default function Profiles(props: any) {



    const [username, setUsername] = useState('');
    const [userPoint, setUserPoint] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [visibleItems, setVisibleItems] = useState(2);
    const [showMore, setShowMore] = useState(false);
    const [visibleItemsPend, setVisibleItemsPend] = useState(2);
    const [showMorePend, setShowMorePend] = useState(false);
    const [visibleItemsInvit, setVisibleItemsInvit] = useState(2);
    const [showMoreInvit, setShowMoreInvit] = useState(false);
    const [visibleItemsSearch, setVisibleItemsSearch] = useState(2);
    const [showMoreSearch, setShowMoreSearch] = useState(false);
    const [loading, setloading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [modelname, setModelName] = useState<any>();
    const widthAndHeight = 240
    const series = [50, 30, 30, 39]
    const sliceColor = ['#FF9900', '#56A8C6', '#FF5E77', '#8E56C6']
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(5);
    const totalQuestions = 6;
    const [FrdRequest, setFrdRequest] = useState([]);
    const [Frd, setFrd] = useState([]);
    const UserData = useSelector(
        (state: RootState) => state?.appReducer?.UserData,
    );

    const percentage = (correctAnswers / totalQuestions) * 100;

    const GetRequest = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            if (accessToken !== null) {
                // Access token is retrieved successfully
                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.get('/users/getFriendRequests', config)
                // console.log('data of request of user', response?.data?.data?.friendRequests);
                setFrdRequest(response?.data?.data?.friendRequests || []);
            }
        } catch (error) {
            console.log('Error', error)
        }
    }
    const GetFrd = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            if (accessToken !== null) {
                // Access token is retrieved successfully
                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.get('/users/getFriendsOfUser', config)
                console.log('data of all firend', response?.data?.data?.friends);
                GetRequest()
                setFrd(response?.data?.data?.friends || []);
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    const searchUser = async (text: any) => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            if (accessToken !== null) {
                // Access token is retrieved successfully
                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.get(`/users/search-user?searchQuery=${text}`, config)
                console.log('Search user', response?.data?.data?.users);
                setSearchResults(response?.data?.data?.users || []);
                // setFrd(response?.data?.data?.friends);

                // console.log("Status:", status);
                // console.log("Friend Requests:", friendRequests);
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        GetRequest();
        GetFrd();

    }, [userData]);

    const [selectedTab, setSelectedTab] = useState('Stats');
    const [isStatsViewVisible, setIsStatsViewVisible] = useState(true);
    const [isStatsViewVisiblea, setIsStatsViewVisiblea] = useState(false);
    const [isStatsViewVisibleaa, setIsStatsViewVisibleaa] = useState(false);
    const [isStatsViewVisibleaaa, setIsStatsViewVisibleaaa] = useState(false);
    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
        if (tab === 'Stats') {
            setIsStatsViewVisible(true);
            setIsStatsViewVisiblea(false);
            setIsStatsViewVisibleaa(false);
            setIsStatsViewVisibleaaa(false);
            console.log('frddddddd', FrdRequest)
        } else if (tab == 'Skills') {
            console.log('2ndview', tab)
            setIsStatsViewVisiblea(true);
            setIsStatsViewVisible(false);
            setIsStatsViewVisibleaa(false);
            setIsStatsViewVisibleaaa(false);
        }
        else if (tab == 'Power') {

            setIsStatsViewVisiblea(false);
            setIsStatsViewVisible(false);
            setIsStatsViewVisibleaa(true);
            setIsStatsViewVisibleaaa(false);
        }
        else if (tab == 'Allies') {
            setIsStatsViewVisibleaaa(true);
            setIsStatsViewVisiblea(false);
            setIsStatsViewVisible(false);
            setIsStatsViewVisibleaa(false);

        }
    };
    const [timeData, setTimeData] = useState([2, 4, 6, 8, 10]); // Sample time data in seconds

    // Calculate the maximum value for scaling
    const maxTime = Math.max(...timeData);

    // SVG chart dimensions
    const chartWidth = wp(95);
    const chartHeight = hp(30);
    const chartPadding = 20;
    const label = percentage >= 60 ? 'UNLOCKED' : `${correctAnswers}/${totalQuestions}`;
    const integerValue = Math.floor(percentage);
    const renderLegend = () => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            {skillsData.map(({ skill, color }, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: color, borderRadius: 5, marginRight: 5 }} />
                    <Text>{skill}</Text>
                </View>
            ))}
        </View>
    );
    const chartRadius = 100;
    const chartCenter = chartRadius + 10;
    const circumference = 2 * Math.PI * chartRadius;
    let currentAngle = -Math.PI / 2;
    // function handleRetractInvitation(id: number): void {
    //     throw new Error('Function not implemented.');
    // }
    const handleAcceptRequest = async (id: any) => {
        setloading(true)
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            if (accessToken !== null) {
                // Access token is retrieved successfully

                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.patch(`/users/acceptOrRejectRequest/${id}`, {
                    data: { status: 'accept' }
                }, config)

                // console.log('accept frnd request ', response?.data);
                GetFrd()
                setloading(false)
                Toast.show({
                    type: 'info',
                    text1: 'Info',
                    text2: 'Friend Request Accept Successfully!',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        }
        catch (error) {
            setloading(false)
            Toast.show({
                type: 'info',
                text1: 'Info',
                text2: 'Something went wrong!',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    }

    const handleRejectRequest = async (id: any) => {
        setloading(true)
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            if (accessToken !== null) {
                // Access token is retrieved successfully

                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.patch(`/users/acceptOrRejectRequest/${id}`, {
                    data: { status: 'reject' }
                }, config)

                // console.log('accept frnd request ', response?.data);
                GetFrd()
                setloading(false)
                Toast.show({
                    type: 'info',
                    text1: 'Info',
                    text2: 'Friend Request Rejected Successfully!',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        }
        catch (error) {
            setloading(false)
            Toast.show({
                type: 'info',
                text1: 'Info',
                text2: 'Something went wrong!',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    }

    const SendRequest = async (id: any) => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        // setLoading(true)
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
                // setLoading(false)
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
            // setLoading(false)
            Toast.show({
                type: 'info',
                text1: 'Info',
                text2: 'Friend Request Already Send!',
                visibilityTime: 3000,
                autoHide: true,
            });
        }

    }

    const handleRemoveRequest = async (id: any) => {
        setloading(true)
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            if (accessToken !== null) {
                // Access token is retrieved successfully

                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.delete(`/users/remove-friend/${id}`, config)

                console.log('accept frnd request ', response?.data);
                GetFrd()
                setloading(false)
                Toast.show({
                    type: 'info',
                    text1: 'Info',
                    text2: 'Friend Removed Successfully!',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        }
        catch (error) {
            setloading(false)
            Toast.show({
                type: 'info',
                text1: 'Info',
                text2: 'Something went wrong!',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    }


    function handleRemoveAlly(id: number): void {
        throw new Error('Function not implemented.');
    }
    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: 'space-between' }}>
                <SvgXml xml={SS_SVg} />
                {/* <Image source={{ uri: item.img }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} /> */}
                <Text style={{ color: 'black', width: wp(50) }}>{`${item.name}\n${item.email}`}</Text>

                <TouchableOpacity onPress={() => handleAcceptRequest(item.id)} style={{ backgroundColor: '#00A9FF', width: wp(25), height: hp(5), alignItems: 'center', borderRadius: 5 }} >
                    <Text style={{ color: 'white', top: hp(1), fontWeight: 'bold' }}>Accept</Text>
                </TouchableOpacity>
            </View>
        );
    };

    useEffect(() => {
        GettinAsyncValue()
        // GetModelName()
    }, [])

    const GettinAsyncValue = async () => {
        let name: any = await AsyncStorage.getItem('userName');
        let poin: any = await AsyncStorage.getItem('userPoints');

        if (name !== null || poin !== null) {
            const parsedName = JSON.parse(name);
            setUsername(parsedName);
            const points = JSON.parse(poin);
            setUserPoint(points);
        }
    }


    const handleViewMore = () => {
        setVisibleItems(visibleItems + 5);
        setShowMore(true);
    };

    const handleViewLess = () => {
        setVisibleItems(2);
        setShowMore(false);
    };

    const handleViewMorePend = () => {
        setVisibleItemsPend(visibleItemsPend + 5);
        setShowMorePend(true);
    };

    const handleViewLessPend = () => {
        setVisibleItemsPend(2);
        setShowMorePend(false);
    };

    const handleViewMoreInvit = () => {
        setVisibleItemsInvit(visibleItemsInvit + 5);
        setShowMoreInvit(true);
    };

    const handleViewLessInvit = () => {
        setVisibleItemsInvit(2);
        setShowMoreInvit(false);
    };

    const handleViewMoreSearch = () => {
        setVisibleItemsSearch(visibleItemsSearch + 5);
        setShowMoreSearch(true);
    };

    const handleViewLessSearch = () => {
        setVisibleItemsSearch(2);
        setShowMoreSearch(false);
    };

    const onRefresh = () => {
        setRefreshing(true);
        GetRequest();
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    // const [contentHeight, setContentHeight] = useState(5);
    // const [scrollY, setScrollY] = useState(0);

    // const handleContentSizeChange = (width: any, height: any) => {
    //     setContentHeight(height);
    // };

    // const handleScroll = (event: any) => {
    //     setScrollY(event.nativeEvent.contentOffset.y);
    // };

    // const scrollIndicatorHeight = () => {
    //     const visibleHeight = Dimensions.get('window').height;
    //     return Math.max((visibleHeight / contentHeight) * visibleHeight, 0.2);
    // };

    // const scrollIndicatorPosition = () => {
    //     const visibleHeight = Dimensions.get('window').height;
    //     return (scrollY / contentHeight) * visibleHeight;
    // };


    return (
        <ScrollView
            // onContentSizeChange={handleContentSizeChange}
            // onScroll={handleScroll}

            // scrollEventThrottle={80}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {/* {contentHeight > Dimensions.get('window').height && (
                <View
                    style={{
                        position: 'absolute',
                        right: 2, // Position from the right edge
                        width: 5, // Width of custom scroll indicator
                        height: scrollIndicatorHeight(), // Dynamic height
                        backgroundColor: 'orange', // Color of custom scroll indicator
                        borderRadius: 2.5,
                        transform: [{ translateY: scrollIndicatorPosition() }], // Dynamic position
                    }}
                />
            )} */}
            <View style={styles.firstView}>
                <View style={{ flexDirection: "row", marginLeft: wp(4) }}>
                    <Image source={Images.Avatar} style={styles.image} />
                    <View style={{ flexDirection: 'column', alignSelf: "center", marginLeft: wp(4) }}>
                        <Text style={styles.FirstText}>{username}</Text>
                        <Text style={styles.SecText}>Words Power</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', width: wp(25), height: hp(4.5), borderWidth: 1, justifyContent: 'space-around', borderRadius: wp(10), flexDirection: 'row', alignItems: 'center', borderColor: '#FF9900', marginRight: wp(4) }}>
                    <Text style={{ color: '#FF9900', fontWeight: 'bold', fontSize: 14, alignSelf: 'center', textAlign: 'center' }}>QRK</Text>
                    <Text style={{ color: '#FF9900', fontWeight: 'bold', fontSize: 14, alignSelf: 'center', textAlign: 'center' }}>{userPoint}</Text>
                </View>
            </View>
            <Image source={Images.SuperHero} style={styles.bodyTypeImagex} />
            <View>
                <View style={{ flexDirection: 'row', marginTop: hp(3), justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => handleTabPress('Stats')} style={{ left: wp(2) }}>

                        <Text style={[styles.SecTextxx, selectedTab === 'Stats' && styles.selectedTab]}>Stats</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleTabPress('Skills')}>
                        <Text style={[styles.SecTextxx, selectedTab === 'Skills' && styles.selectedTab]}>Skills</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleTabPress('Power')}>
                        <Text style={[styles.SecTextxx, selectedTab === 'Power' && styles.selectedTab]}>Power</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleTabPress('Allies')} style={{ right: wp(2) }}>
                        <Text style={[styles.SecTextxx, selectedTab === 'Allies' && styles.selectedTab]}>Allies</Text>
                    </TouchableOpacity>

                </View>

            </View>

            {isStatsViewVisible &&
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={styles.SecView}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <SvgXml xml={Lock_Svg} />
                            <Text style={styles.FrstTextView}>QRK</Text>
                            <Text style={styles.SecTextView}>590</Text>
                        </View>
                        <View style={styles.verticalLine} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <SvgXml xml={World_Svg} />
                            <Text style={styles.FrstTextView}>WORLD RANK</Text>
                            <Text style={styles.SecTextView}>1,438</Text>
                        </View>
                        <View style={styles.verticalLine} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <SvgXml xml={Cup_Svg} />
                            <Text style={styles.FrstTextView}>USA</Text>
                            <Text style={styles.SecTextView}>56</Text>
                        </View>
                    </View>

                    <Text style={styles.FirstTextx}>Number of superpower gained</Text>
                    <View style={{ alignSelf: 'center', marginTop: hp(1), top: hp(2) }}>
                        <CircularProgress
                            value={percentage}
                            showProgressValue={false}
                            radius={60}
                            duration={2000}
                            title={`${correctAnswers}/${totalQuestions}`}
                            titleColor={'#FF9900'}
                            titleStyle={{ fontWeight: 'bold', fontSize: 24 }}
                            inActiveStrokeColor={'#B1DFFF'}
                            activeStrokeColor={'#FF9900'}
                            subtitle={"Unlocked"}

                        />
                    </View>
                    <View style={{ bottom: hp(6) }}>
                        <Text style={styles.FirstTextxx}>Overall Accuracy</Text>
                        <View style={{ top: hp(14) }}>
                            <View style={{ top: hp(0) }}>
                                <ProgressCircle
                                    style={{ height: hp(17.5) }}
                                    progress={percentage / 100}
                                    progressColor={'#FF9900'}
                                    backgroundColor={'#B1DFFF'}
                                    strokeWidth={10}
                                    startAngle={-Math.PI / 2}
                                    endAngle={Math.PI / 2}

                                /></View>
                            <Text style={styles.FirstTextxxx}>{integerValue}%</Text>
                            <View style={{ flexDirection: 'row', bottom: hp(13), justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
                                <Text style={styles.FirstTexta}>0%</Text>
                                <Text style={styles.FirstTextaa}>100%</Text>
                            </View>
                        </View>
                        <Text style={styles.FirstTextxxa}>Average Time Per Question</Text>
                        <View style={{ alignItems: 'center', alignSelf: 'center', left: wp(2), top: hp(3) }}>
                            <Svg width={chartWidth} height={chartHeight}>
                                <Line x1={chartPadding} y1={chartPadding} x2={chartPadding} y2={chartHeight - chartPadding} stroke="white" strokeWidth="1" />
                                {[2, 4, 6, 8, 10,].map((label, index) => (
                                    <React.Fragment key={index}>

                                        <Line x1={chartPadding} y1={(chartHeight - chartPadding) - ((label / maxTime) * (chartHeight - 2 * chartPadding))} x2={chartWidth - chartPadding} y2={(chartHeight - chartPadding) - ((label / maxTime) * (chartHeight - 2 * chartPadding))} stroke="#B1DFFF" strokeWidth="0.8" />

                                        <SvgText key={index} x={chartPadding - 10} y={(chartHeight - chartPadding) - ((label / maxTime) * (chartHeight - 2 * chartPadding))} fontSize="10" fill="#555" textAnchor="end" >
                                            {label}
                                        </SvgText>
                                    </React.Fragment>
                                ))}

                                {timeData.map((time, index) => (
                                    <React.Fragment key={index}>
                                        <LinearGradient id={`color${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            <Stop offset="0%" stopColor="#FFA41D" />
                                            <Stop offset="61.98%" stopColor="#FF9900" />
                                            <Stop offset="100%" stopColor="#BA7002" />
                                        </LinearGradient>

                                        <Path
                                            d={timeData.map((time, index) => {
                                                const x = chartPadding + (index * (chartWidth - 2 * chartPadding) + 50) / (timeData.length);
                                                const maxBarHeight = 10;
                                                const y = Math.min(((chartHeight - chartPadding)) - ((time / maxTime) * (chartHeight - 2 * chartPadding)), chartHeight - chartPadding - maxBarHeight);
                                                const barWidth = wp(5);
                                                const flatY = chartHeight - chartPadding;


                                                let path = `M${x} ${flatY}`;

                                                path += `L${x} ${y - barWidth / 2} A${barWidth / 2} ${barWidth / 2} 0 0 1 ${x + barWidth} ${y - barWidth / 2}`;


                                                path += `L${x + barWidth} ${flatY}`;

                                                return path;
                                            }).join(' ')}
                                            fill={`url(#color${index})`}
                                        />

                                    </React.Fragment>
                                ))}


                                <Line x1={chartPadding} y1={chartHeight - chartPadding} x2={chartWidth - chartPadding} y2={chartHeight - chartPadding} stroke="#B1DFFF" strokeWidth="1" />

                                {timeData.map((_, index) => (
                                    <SvgText key={index} x={chartPadding + (index * (chartWidth - 2 * chartPadding)) / (timeData.length) + 15} y={chartHeight - chartPadding + 15} fontSize="14" fill="#555" textAnchor="middle" >
                                        Q{index + 1}
                                    </SvgText>
                                ))}
                            </Svg>
                        </View>
                    </View>
                </View>
            }

            {isStatsViewVisiblea && <View >

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}>
                    <MyPieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}

                        coverFill={'ddd'}
                        skillData={skillsData}
                    />
                </View>
                <View style={{ backgroundColor: "white" }}>
                    <Text style={{ color: '#8E56C6', fontSize: 16, fontWeight: 'bold', left: wp(1), bottom: hp(3) }}> Summary </Text>
                    <BulletPointBox name={'No of games created'} data={'05'} />
                    <BulletPointBox name={'No of games completed'} data={'04'} />
                    <BulletPointBox name={'Incomplete Games'} data={'01'} />
                </View>


            </View>
            }

            <View>
                {isStatsViewVisibleaa && <View >

                    <ImageRow images={Img.map((item) => item.img)} />

                </View>
                }
            </View>

            {isStatsViewVisibleaaa &&
                <View style={{ flex: 1 }} >
                    <View style={{ flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: wp(90), alignSelf: 'center', margin: 6, borderRadius: 10, paddingVertical: hp(1), gap: wp(2) }} >
                        <SvgXml xml={Search_Svg} style={{ alignSelf: 'center', left: wp(1) }} />
                        <TextInput
                            style={{
                                color: 'black',
                                alignSelf: 'center',
                                left: wp(1)
                            }}
                            placeholder="Search friends"
                            placeholderTextColor={'black'}
                            value={searchQuery}
                            onChangeText={(text) => {
                                setSearchQuery(text);
                                searchUser(text);

                            }}
                        />
                    </View>

                    {searchResults && searchResults.length > 0 && (
                        <>
                            {searchResults.map((item: any) => (
                                // console.log('searcresult', searchResults),
                                <><View key={item._id} style={{ flexDirection: 'row', alignItems: 'center', width: wp(90), marginLeft: wp(5), justifyContent: 'space-between', }}>
                                    <SvgXml xml={SS_SVg} />
                                    <Text numberOfLines={2} style={{ color: 'black', width: wp(45) }}>{`${item.fullName}\n ${item.email}`}</Text>
                                    <TouchableOpacity
                                        style={{ width: wp(25), height: hp(5), alignItems: 'center', borderRadius: 5 }} 
                                        onPress={()=>{SendRequest(item._id)}}>
                                        <Text style={{ color: 'white', top: hp(1), fontWeight: 'bold' }}>Add</Text>
                                        <SvgXml xml={ADD_Svg} style={{ bottom: hp(2) }} />
                                    </TouchableOpacity>
                                </View>
                                </>
                            ))}
                        </>
                    )}

                    {loading ?
                        (
                            <View>
                                <ActivityIndicator size={25} color={'orange'} />
                            </View>
                        )
                        :
                        (

                            <View style={{ width: wp(100), marginTop: hp(2) }}>
                                <Text style={{ color: '#8E8D90', bottom: hp(2), marginLeft: wp(5) }}>Pending Requests</Text>
                                {FrdRequest.length === 0 ? (
                                    <Text style={{ textAlign: 'center', color: "black" }}>No friend requests</Text>
                                ) : (
                                    <>
                                        {FrdRequest.slice(0, visibleItemsInvit).map((request: any) => (
                                            <View key={request._id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: "space-around", width: wp(100) }}>
                                                <View>
                                                    <SvgXml xml={SS_SVg} />
                                                </View>
                                                <View style={{ width: wp(50) }}>
                                                    <Text numberOfLines={2} style={{ color: 'black', }}>{`${request?.requestFrom?.fullName}\n${request?.requestFrom?.email}`}</Text>
                                                </View>
                                                <View style={{ flexDirection: "column", justifyContent: "space-evenly", marginRight: wp(2) }}>
                                                    <TouchableOpacity onPress={() => handleAcceptRequest(request.requestFrom._id)} style={{ backgroundColor: '#00A9FF', padding: 5, alignItems: 'center', borderRadius: 5 }} >
                                                        <Text style={{ color: 'white', }}>Accept</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => handleRejectRequest(request.requestFrom._id)} style={{ backgroundColor: 'red', padding: 5, alignItems: 'center', borderRadius: 5, marginTop: hp(1) }} >
                                                        <Text style={{ color: 'white', }}>Reject</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        ))}
                                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                                            <TouchableOpacity onPress={showMoreInvit ? handleViewLessInvit : handleViewMoreInvit}>
                                                <Text style={{ color: '#00A9FF', fontWeight: 'bold' }}>{showMoreInvit ? 'View Less' : 'View More'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </>
                                )}
                            </View>
                        )}


                    <View style={{ padding: 16 }}>
                        <Text style={{ color: '#8E8D90', bottom: hp(2) }}>Pending Invitations</Text>
                        {pendingInvitations.length === 0 ? (
                            <Text style={{ textAlign: 'center', color: "black" }}>No friend requests</Text>
                        ) : (
                            <>
                                {pendingInvitations.slice(0, visibleItemsPend).map((invitation) => (
                                    <View key={invitation.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: 'space-between' }}>

                                        <SvgXml xml={SS_SVg} />
                                        <Text numberOfLines={2} style={{ color: 'black', width: wp(45) }}>{`${invitation.name}\n${invitation.email}`}</Text>
                                        <TouchableOpacity

                                            style={{ backgroundColor: 'grey', width: wp(25), padding: 10, alignItems: 'center', justifyContent: "center", borderRadius: 5 }} >
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Retract</Text>
                                        </TouchableOpacity>

                                    </View>
                                ))}
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <TouchableOpacity onPress={showMorePend ? handleViewLessPend : handleViewMorePend}>
                                        <Text style={{ color: '#00A9FF', fontWeight: 'bold' }}>{showMorePend ? 'View Less' : 'View More'}</Text>
                                    </TouchableOpacity>

                                </View>
                            </>
                        )}
                    </View>

                    <View style={{ padding: 16 }}>
                        <Text style={{ color: '#8E8D90', bottom: hp(2) }}>Allies List</Text>
                        {Frd.length === 0 ? (
                            <Text style={{ textAlign: 'center', color: "black" }}>No Firend Added</Text>
                        ) : (
                            <>
                                {Frd.slice(0, visibleItems)?.map((ally: any) => (
                                    <View key={ally._id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: 'space-between' }}>
                                        <SvgXml xml={SS_SVg} />
                                        <Text numberOfLines={2} style={{ color: 'black', width: wp(45) }}>{`${ally.fullName}\n${ally.email}`}</Text>
                                        <TouchableOpacity
                                            onPress={() => handleRemoveRequest(ally._id)}
                                            style={{ backgroundColor: '#FF5F5F', width: wp(25), padding: 10, alignItems: 'center', justifyContent: "center", borderRadius: 5 }} >
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Remove</Text>
                                        </TouchableOpacity>

                                    </View>
                                ))}
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <TouchableOpacity onPress={showMore ? handleViewLess : handleViewMore}>
                                        <Text style={{ color: '#00A9FF', fontWeight: 'bold' }}>{showMore ? 'View Less' : 'View More'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>



                </View>
            }
        </ScrollView>
    );
};


