import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import IssueSelector from './IssueSelector';
import FontFamily from '../../assets/fonts';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dataServer } from '../../Service/AxiosConfig';

const HelpAndSupport = (props:any) => {
    const [press, setPress] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [otherText, setOtherText] = useState('');
    const [text, setText] = useState('');

    const handleOptionSelect = (option:any) => {
        setSelectedOption(option);
        if (option !== 'Other') {
            setOtherText('');
        }
    };

    const SendRequest = async (FeedbackTitle:any, FeedbackDescription:any) => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        setLoading(true);
        try {
            if (accessToken !== null) {
                let config = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                };
                const response = await dataServer.post('/feedback/send-feedback', {
                    FeedbackTitle: FeedbackTitle,
                    FeedbackDescription: FeedbackDescription
                }, config);
                setLoading(false);
                Toast.show({
                    type: 'info',
                    text1: 'Info',
                    text2: 'Feedback Sent Successfully!',
                    visibilityTime: 3000,
                    autoHide: true,
                });
                props.navigation.goBack()
            }
        } catch (error) {
            setLoading(false);
            Toast.show({
                type: 'info',
                text1: 'Info',
                text2: 'Failed to send feedback!',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Give us feedback</Text>
            <View style={styles.buttonsview}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        press ? styles.button1Active : styles.buttonInactive
                    ]}
                    onPress={() => setPress(true)}
                >
                    <Text style={styles.buttonText}>Loving the app?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        press ? styles.buttonInactive : styles.button2Active
                    ]}
                    onPress={() => setPress(false)}
                >
                    <Text style={styles.buttonText}>I have an issue</Text>
                </TouchableOpacity>
            </View>
            {press ? (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.textInput,
                            Platform.OS === 'ios'
                                ? styles.textInputPaddingIOS
                                : styles.textInputPaddingAndroid
                        ]}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your answer"
                        placeholderTextColor={'black'}
                        onChangeText={setText}
                        value={text}
                    />
                </View>
            ) : (
                <IssueSelector
                    setSelectedOption={setSelectedOption}
                    selectedOption={selectedOption}
                    setOtherText={setOtherText}
                    otherText={otherText}
                    handleOptionSelect={handleOptionSelect}
                />
            )}
            <View style={styles.submitContainer}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {
                        if (press) {
                            SendRequest("Loving this app", text);
                        } else {
                            SendRequest("I have an issue", selectedOption === 'Other' ? otherText : selectedOption);
                        }
                    }}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    text: {
        alignSelf: 'center',
        color: '#FF9900',
        fontSize: 18,
        fontWeight: '600',
        marginTop: heightPercentageToDP(5)
    },
    buttonsview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: heightPercentageToDP(5)
    },
    button: {
        borderRadius: 8,
        padding: 10
    },
    buttonText: {
        color: 'black'
    },
    button1Active: {
        borderWidth: 1,
        borderColor: '#00A9FF',
        backgroundColor: '#CFF4FF'
    },
    button2Active: {
        borderWidth: 1,
        borderColor: '#00A9FF',
        backgroundColor: '#CFF4FF',
        padding: 10
    },
    buttonInactive: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: 'lightgrey'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: heightPercentageToDP(5),
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        color: 'grey',
        marginTop: heightPercentageToDP(2),
        width: widthPercentageToDP(90),
        textAlignVertical: 'top',
        paddingVertical: heightPercentageToDP(10)
    },
    textInputPaddingIOS: {
        paddingHorizontal: widthPercentageToDP(2),
        paddingVertical: widthPercentageToDP(30)
    },
    textInputPaddingAndroid: {
        paddingHorizontal: widthPercentageToDP(5),
        paddingVertical: widthPercentageToDP(10)
    },
    submitContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: heightPercentageToDP(2)
    },
    submitButton: {
        backgroundColor: '#FF9900',
        width: widthPercentageToDP(90),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10
    },
    submitButtonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: FontFamily.OpenSansBold
    }
});

export default HelpAndSupport;