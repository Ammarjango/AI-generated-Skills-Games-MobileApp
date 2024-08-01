import React, { useState } from 'react';
import {
  View,
  Text, TouchableOpacity, Platform, ActivityIndicator
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import {
  Google_Svg,
  Dis_Svg,
  Apple_Svg,
  Facebook_Svg,
} from '../../assets/Svgs/SvgGroup';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import CustomInput from '../../components/CustomInput';
import { dataServer } from '../../Service/AxiosConfig';
import CustomPhoneInput from '../../components/CustomPhoneInput';
export default function SignIn(props: any) {
  const [username, setUsername] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [isContactNumberFocused, setIsContactNumberFocused] = useState(false);
  const [loading, setLoading] = useState<boolean>(false)

  // const renderTickIcon = (focused: boolean) => {
  //   if (focused) {
  //     return <Icon name="check-circle" size={20} color="#FF9900" />;
  //   }
  //   return null;
  // };
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // function isValidUsername(name) {
  //   const regex = /^[a-zA-Z0-9]+_[0-9]+$/;
  //   return regex.test(name);
  // }
  const Register = async (email: any, username: any, contactNumber: any, name: any) => {
    setLoading(true)
    if (username === '') {
      setLoading(false)
      Toast.show({
        type: 'info',
        text1: 'Empty',
        text2: 'Empty Name',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
    else if (name === '') {
      setLoading(false)
      Toast.show({
        type: 'info',
        text1: 'Empty',
        text2: 'Empty Username',
        visibilityTime: 3000,
        autoHide: true,
      });
      // } else if (!isValidUsername(name)) {
      //   Toast.show({
      //     type: 'info',
      //     text1: 'Invalid',
      //     text2: 'Invalid Name Format',
      //     visibilityTime: 3000,
      //     autoHide: true,
      //   });
      // } 
    } else if (email === '') {
      setLoading(false)
      Toast.show({
        type: 'info',
        text1: 'Empty',
        text2: 'Empty Email',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
    else if (contactNumber === '') {
      setLoading(false)
      Toast.show({
        type: 'info',
        text1: 'Empty',
        text2: 'Empty Phone Number',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
    else if (!validateEmail(email)) {
      setLoading(false)
      Toast.show({
        type: 'info',
        text1: 'Invalid',
        text2: 'Invalid Email Format',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
    else {
      try {

        let config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await dataServer.post('/auth/register', {
          email: email,
          fullName: username,
          userName: name,
          phoneNumber: contactNumber
        }, config);
        // console.log("Response:", response);
        if (response.status == 500) {
          setLoading(false)
          console.log('ionside 500')
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Register!',
            visibilityTime: 3000,
            autoHide: true,
          });
          props.navigation.navigate('Verify PhNo', {
            contactNumber: contactNumber,
          });
        } else if (response.status === 409) {
          setLoading(false)
          console.log('ionside 409')
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Already Register!',
            visibilityTime: 3000,
            autoHide: true,
          });
        }
        else {
          setLoading(false)
          console.log("Response in else:", response.status);
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Already Register!',
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      }
      catch (err) {
        setLoading(false)
        // console.log('werrrr in catch', err)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Already Register User',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    }
  };

  const handleSignInButtonPressed = () => {
    props.navigation.navigate('Verify Account');
  }

  // Add event handlers for focus and blur
  const handle = () => {
    props.navigation.navigate('PrivacyPolicy')
    // Add your logic for handling the selected option here
  };
  const handlea = () => {
    props.navigation.navigate('TermsAndConditions')
    // Add your logic for handling the selected option here
  };

  const handlePhoneInputChange = (number: any) => {
    setContactNumber(number);
    // Do whatever you need with the phone number here
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={{ color: '#FF9900', fontSize: 16, fontWeight: 'bold', right: Platform.OS === 'ios' ? wp(36) : wp(31.5), marginTop: hp(5) }}>Full Name</Text>
        <CustomInput
          placeholder="Your Name"
          value={username}
          onChangeText={(text: React.SetStateAction<string>) => setUsername(text)}
          isFocused={true} // You can handle focus state according to your requirement
        />
        <Text style={{ color: '#FF9900', fontSize: 16, fontWeight: 'bold', right: Platform.OS === 'ios' ? wp(36) : wp(31.5), marginTop: hp(5) }}>Username</Text>
        <CustomInput
          placeholder="Username"
          value={name}
          onChangeText={(text: React.SetStateAction<string>) => setName(text)}
          isFocused={true} // You can handle focus state according to your requirement
        />
        <Text style={{ color: '#FF9900', fontSize: 16, fontWeight: 'bold', right: Platform.OS === 'ios' ? wp(32) : wp(27.5), marginTop: hp(4) }}>Email Address</Text>
        <CustomInput
          placeholder="yourexample@email.com"
          value={email}
          onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
          isFocused={true}
        />
        <Text style={{ color: '#FF9900', fontSize: 16, fontWeight: 'bold', right: Platform.OS === 'ios' ? wp(32) : wp(27.5), marginTop: hp(4) }}>Phone Number</Text>
        <View>
          <CustomPhoneInput
            placeholder={'Phone Number'}
            onChangeText={handlePhoneInputChange}
          />
        </View>
        <View style={styles.alreadyHaveAccountContainer}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleSignInButtonPressed}>
            <Text style={styles.signInLink}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerx}>
          <Text style={styles.text}>
            By continuing you're indicating that you accept our
          </Text>
          <Text style={styles.containerxx}>
            <Text style={styles.hyperlink} onPress={handlea}>Terms of Use </Text>
            and our
            <Text style={styles.hyperlink} onPress={handle}> Privacy Policy</Text></Text>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={() => Register(email, username, contactNumber, name)}>
          {loading ?
            (
              <View style={{ alignItems: "center" }}>
                <ActivityIndicator size={25} color={"white"} />
              </View>
            )
            :
            (
              <Text style={styles.signUpButtonText}>Next</Text>
            )
          }
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>or signup with</Text>
          <View style={styles.orLine} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: hp(25), marginTop: hp(7) }}>
          <TouchableOpacity style={{}}>
            <SvgXml xml={Google_Svg} />

          </TouchableOpacity>

          <TouchableOpacity style={{}}>
            <SvgXml xml={Facebook_Svg} />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <SvgXml xml={Dis_Svg} />
          </TouchableOpacity>
          {
            Platform.OS === 'ios' && (
              <TouchableOpacity style={{}}>
                <SvgXml xml={Apple_Svg} />
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </ScrollView>
  );
}
