import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {
  ADD_Svg,
  Cup_Svg,
  Flag_Svg,
  Lock_Svg,
  ProfilePerson_Svg,
  World_Svg,
} from '../../assets/Svgs/SvgGroup';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {MyPieChart} from '../../components/MyPieChart';
import {Images} from '../../assets/Image';
import ImageRow from '../../components/ImageRow';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataServer} from '../../Service/AxiosConfig';
import axios from 'axios';
import Toast from 'react-native-toast-message';
const skillsData = [
  {skill: 'Sci', value: 55, color: '#FF9900'},
  {skill: 'Music', value: 30, color: '#56A8C6'},
  {skill: 'Arts', value: 24, color: '#FF5E77'},
  {skill: 'Sports', value: 22, color: '#8E56C6'},
];
const Img = [
  {id: 1, img: Images.Puzzle},
  {id: 2, img: Images.Lock},
  {id: 3, img: Images.Timer},
  {id: 4, img: Images.Smile},
  {id: 5, img: Images.Star},
  {id: 6, img: Images.Rank},
];
export default function PlayerProfile(props: any) {
  let playerName = props?.route?.params?.fullName;
  let playerid = props?.route?.params?._id;
  let playerpoints = props?.route?.params?.points;

  const widthAndHeight = 240;
  const series = [50, 30, 38, 22];
  const sliceColor = ['#FF9900', '#56A8C6', '#FF5E77', '#8E56C6'];
  const [correctAnswers, setCorrectAnswers] = useState('05');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const totalQuestions = '06';
  const UserData = useSelector(
    (state: RootState) => state?.appReducer?.UserData,
  );
  const SendRequest = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    setLoading(true);
    try {
      if (accessToken !== null) {
        console.log('Access Token:', accessToken);
        let config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await dataServer.post(
          `/users/sendFriendRequest/${playerid}`,
          {},
          config,
        );

        console.log('data ', response?.data);
        setResponseMessage(response?.data.message);
        setLoading(false);
        Toast.show({
          type: 'info',
          text1: 'Info',
          text2: 'Friend Request Send Successfully!',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'info',
        text1: 'Info',
        text2: 'Friend Request Already Send!',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  useEffect(() => {
    getUserStatus();
  }, []);

  const [response, setResponse] = useState('');

  const getUserStatus = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    // setLoading(true)
    try {
      if (accessToken !== null) {
        console.log('Access Token:', accessToken);
        let config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await dataServer.get(
          `/users/getUserById/${playerid}`,
          config,
        );

        const status = response?.data?.friends[0]?.status;
        console.log('data', status);
        setResponse(status);
      }
    } catch (error) {
      // setLoading(false)
      Toast.show({
        type: 'info',
        text1: 'Info',
        text2: 'Friend Request Already Send!',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const percentage =
    (parseInt(correctAnswers) / parseInt(totalQuestions)) * 100;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginTop: hp(5), alignItems: 'center'}}>
          <SvgXml xml={ProfilePerson_Svg} />
          <SvgXml xml={Flag_Svg} style={{left: wp(10), bottom: hp(3)}} />
          <Text style={styles.playerProfileText}>{playerName}</Text>

          {loading ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={25} color={'orange'} />
            </View>
          ) : (
            <>
              {responseMessage === 'Friend request sent successfully' ? (
                <View
                  style={{
                    backgroundColor: '#00A9FF',
                    padding: 6,
                    bottom: hp(2),
                    borderRadius: 2,
                  }}>
                  <Text style={{color: 'white', fontSize: 14}}>
                    Pending Request
                  </Text>
                </View>
              ) : (
                <View>
                  {response == null && (
                    <TouchableOpacity onPress={SendRequest}>
                      <SvgXml xml={ADD_Svg} style={{bottom: hp(2)}} />
                    </TouchableOpacity>
                  )}
                  {response === 'Pending' && (
                    <View
                      style={{
                        backgroundColor: '#00A9FF',
                        padding: 6,
                        bottom: hp(2),
                        borderRadius: 2,
                      }}>
                      <Text style={{color: 'white', fontSize: 14}}>
                        Pending Request
                      </Text>
                    </View>
                  )}
                  {response === 'Accepted' && (
                    <View
                      style={{
                        backgroundColor: '#00A9FF',
                        padding: 6,
                        bottom: hp(2),
                        borderRadius: 2,
                      }}>
                      <Text style={{color: 'white', fontSize: 14}}>
                        Followed
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </>
          )}
        </View>
      </View>
      <View style={styles.SecView}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <SvgXml xml={Lock_Svg} />
          <Text style={styles.FrstTextView}>QRK</Text>
          <Text style={styles.SecTextView}>{playerpoints}</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <SvgXml xml={World_Svg} />
          <Text style={styles.FrstTextView}>WORLD RANK</Text>
          <Text style={styles.SecTextView}>1,438</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <SvgXml xml={Cup_Svg} />
          <Text style={styles.FrstTextView}>USA</Text>
          <Text style={styles.SecTextView}>56</Text>
        </View>
      </View>
      <View>
        <MyPieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          //   coverRadius={0.45}
          coverFill={'#FFF'}
          skillData={skillsData}
        />
      </View>
      <View style={{width: wp(100)}}>
        <Text style={{color: '#FF9900', fontWeight: 'bold', marginLeft: wp(5)}}>
          Superpowers
        </Text>
        <View style={{marginTop: hp(1)}}>
          <ImageRow images={Img.map(item => item.img)} />
        </View>
      </View>
      <View style={{width: wp(100)}}>
        <Text style={{color: '#FF9900', fontWeight: 'bold', marginLeft: wp(5)}}>
          No of Games Played
        </Text>
      </View>
      <View
        style={{alignSelf: 'center', marginTop: hp(1), marginBottom: hp(2)}}>
        <CircularProgress
          value={percentage}
          showProgressValue={false}
          radius={60}
          duration={2000}
          title={`${correctAnswers}/${totalQuestions}`}
          titleColor={'#8E56C6'}
          titleStyle={{fontWeight: 'bold', fontSize: 24}}
          inActiveStrokeColor={'#B1DFFF'}
          activeStrokeColor={'#8E56C6'}
          subtitle={'Games'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,

    bottom: 10,
    left: 10,
  },
  FirstTextx: {
    marginTop: hp(2),
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FF9900',
  },
  FrstTextView: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FF9900',
  },
  verticalLine: {
    height: '60%',
    borderRightWidth: 1,
    borderRightColor: '#FF9900',
  },
  SecTextView: {
    fontSize: 10,
    color: '#FF9900',
  },
  playerProfileText: {
    fontSize: 15,
    bottom: hp(3),
    color: '#FF9900',
    textAlign: 'center',
  },
  countryFlag: {
    width: 30,
    height: 20,

    bottom: 10,
    right: 10,
  },
  SecView: {
    flexDirection: 'row',
    borderColor: '#FF9900',
    marginTop: hp(1),
    padding: 10,
    width: wp(90),
    marginLeft: wp(2),
    borderRadius: hp(2),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
