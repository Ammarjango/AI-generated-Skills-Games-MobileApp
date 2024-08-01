import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../assets/Image/index';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dataServer } from '../../Service/AxiosConfig';
export default function SignUp(props: any) {
    const [username, setUsername] = useState('');
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);

    const [contactNumber, setContactNumber] = useState('');
    const [isContactNumberFocused, setIsContactNumberFocused] = useState(false);

    const [password, setPassword] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const validateContactNumber = (input: any) => {
        const isNumeric = /^[0-9]+$/;
        return isNumeric.test(input) && input.length === 11;
    };
    const renderTickIcon = (focused: boolean) => {
        if (focused) {
            return <Icon name="check-circle" size={20} color="#FF9900" />;
        }
        return null;
    };
    const SignUp = () => {
        props.navigation.navigate('Verify Account');
    };

    const updateProfile = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const userid = await AsyncStorage.getItem('userId')
        // setLoading(true)
        try {
            if (accessToken !== null) {

                console.log('Access Token:', accessToken);
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.patch(`/users/update-user/6638be9748f611001a935f4f`, {
                    fullName: username,
                    phoneNumber: contactNumber,
                    email: password,
                }, config)
                console.log('dddd', response.data)
            }
        } catch (error) {
            console.log('ddd', error)
        }
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.input,
                            isUsernameFocused && styles.highlightedInput,
                            isUsernameFocused && { color: '#FF9900' }, // Highlighted text color
                        ]}
                        placeholder="Update Full Name"
                        placeholderTextColor="black"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        onFocus={() => setIsUsernameFocused(true)}
                        onBlur={() => setIsUsernameFocused(false)}
                    />
                    {renderTickIcon(isUsernameFocused)}
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.input,
                            isPasswordFocused && styles.highlightedInput,
                            isPasswordFocused && { color: '#FF9900' }, // Highlighted text color
                        ]}
                        placeholder="Update Email Address"
                        placeholderTextColor="black"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                    />
                    {renderTickIcon(isPasswordFocused)}
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.input,
                            isContactNumberFocused && styles.highlightedInput,
                            isContactNumberFocused && { color: '#FF9900' }, // Highlighted text color
                        ]}
                        placeholder="Update Phone Number"
                        placeholderTextColor="black"
                        keyboardType="phone-pad"
                        value={contactNumber}
                        onChangeText={(text) => {
                            setContactNumber(text);
                        }}
                        onFocus={() => setIsContactNumberFocused(true)}
                        onBlur={() => setIsContactNumberFocused(false)}
                    />
                    {renderTickIcon(isContactNumberFocused)}
                </View>


                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={styles.signUpButton} onPress={updateProfile}>
                        <Text style={styles.signUpButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    );
}
