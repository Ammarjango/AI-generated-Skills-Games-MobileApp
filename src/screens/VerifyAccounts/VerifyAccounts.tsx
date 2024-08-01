import React, { useState } from 'react';
import {
  View,
  Text, TouchableOpacity, ActivityIndicator
} from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { dataServer } from '../../Service/AxiosConfig';
import Toast from 'react-native-toast-message';
import CustomPhoneInput from '../../components/CustomPhoneInput';

export default function VerifyAccounts(props: any) {
  const [contactNumber, setContactNumber] = useState('');
  const [loading, setLoading] = useState<boolean>(false)
  const SignUp = async () => {
    setLoading(true)
    try {
      let data = JSON.stringify({
        phoneNumber: contactNumber,
      })

      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await dataServer.post(`/auth/send-otp?isDev=${true}`, data, config);
      setLoading(false)
      props.navigation.navigate('Verify PhNo', { contactNumber: contactNumber });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Otp send!',
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (err) {
      setLoading(false)
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Otp not send!',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const handlePhoneInputChange = (number) => {
    setContactNumber(number);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: '#FF9900',
          alignSelf: 'center',
          bottom: hp(10),
        }}>
        Enter Your Phone Number
      </Text>
      <View>
        <CustomPhoneInput
          placeholder={'Phone Number'}
          onChangeText={handlePhoneInputChange}
        />
      </View>
      <TouchableOpacity style={styles.signUpButton} onPress={SignUp}>
        {loading ?
          (
            <View>
              <ActivityIndicator size={25} color={"white"} />
            </View>
          )
          :
          (
            <Text style={styles.signUpButtonText}>SEND OTP</Text>
          )
        }

      </TouchableOpacity>
    </ScrollView>
  );
}

