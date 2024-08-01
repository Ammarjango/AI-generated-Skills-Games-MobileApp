import React, { useState } from 'react';
import {
  View,
  Text, TouchableOpacity, ActivityIndicator
} from 'react-native';
import { styles } from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useDispatch } from 'react-redux';
import { dataServer } from '../../Service/AxiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userData } from '../../redux/reducers/appReducers';
import Toast from 'react-native-toast-message';
import { OneSignal } from 'react-native-onesignal';
const CELL_COUNT = 4;
export default function VerifyPhno(props: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const { contactNumber } = props.route.params;
  const dispatch = useDispatch();
  //  console.log('User Data>>>', userName, userMail, contactNumber);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [clearProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [code, setCode] = useState('');
  const handleResendSMS = () => {
    // Implement SMS resend logic here
    setIsResendDisabled(true);

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsResendDisabled(false);
    }, 5000); // 5000 milliseconds (5 seconds)
  };
  const handleVerify = () => {
    // Implement OTP verification logic here
    // For demonstration purposes, just log the OTP
    props.navigation.navigate('Choose your Interests')
  };
  const SignUp = async () => {
    console.log('contactNumber', contactNumber);
    const pNumber = contactNumber.toString();

    let data = JSON.stringify({
      phoneNumber: contactNumber,
    });

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await dataServer.post('auth/send-otp', data, config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });

  };

  const Verify = async (contactNumber: number) => {
    setLoading(true)
    try {
      let data = JSON.stringify({
        phoneNumber: contactNumber,
        otp: value
      });
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await dataServer.post('/auth/verify-otp', {
        phoneNumber: contactNumber,
        otp: value
      }, config)
      if (response.status === 200) {
        const accessToken = response?.data.access_token;
        await AsyncStorage.setItem('userName', JSON.stringify(response.data.user.fullName))
        await AsyncStorage.setItem('userEmail', JSON.stringify(response.data.user.email))
        await AsyncStorage.setItem('userPhone', (response.data.user.phoneNumber))
        await AsyncStorage.setItem('userPoints', JSON.stringify(response.data.user.points))
        await AsyncStorage.setItem('userId', JSON.stringify(response.data.user._id))
        OneSignal.login(response.data.user._id)
        dispatch(userData(response.data));
        await AsyncStorage.setItem('accessToken', accessToken);
        if (response.data.user.hobbies.length === 0) {
          setLoading(false)
          props.navigation.navigate('Choose your Interests');
        } else {
          setLoading(false)
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'HomeTabs' }]
          });
        }
      } else {
        setLoading(false)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'No data found!',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    }
    catch (err) {
      setLoading(false)
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Otp is invalid try again!',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlee}>Verify Phone Number</Text>

      <Text style={styles.message}>Please enter the 4 digit code sent to</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={styles.phoneNumber}>{contactNumber}</Text>
        <Text style={styles.message}> through SMS</Text>
      </View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.resendButton}
        onPress={SignUp}
        disabled={isResendDisabled}>
        <Text style={styles.txtt}>Didn’t receive a code? </Text>
        <Text style={styles.resendButtonText}>Resend SMS</Text>
      </TouchableOpacity>
      <Text style={styles.wrongNumber}>Wrong number</Text>
      <TouchableOpacity style={styles.verifyButton} onPress={() => Verify(contactNumber)}>
        {loading ?
          (
            <View>
              <ActivityIndicator color={"white"} size={25} />
            </View>
          )
          :
          (
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          )
        }
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By continuing you’re indicating that you accept our Terms of Use and our Privacy Policy
      </Text>
    </View>
  );
}
