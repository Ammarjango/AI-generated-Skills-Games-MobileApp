import React, { useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomPhoneInput = ({ placeholder, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isIconVisible, setIsIconVisible] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        setIsIconVisible(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setIsIconVisible(false);
    };

    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
        setIsIconVisible(number.trim().length > 0);
        onChangeText(number); // Call the onChangeText prop with the updated number
    };

    return (
        <View style={{
            marginTop: hp(1),
            borderBottomWidth: 1,
            alignSelf: 'center',
            color: 'black',
            width: hp(40),
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: isIconVisible ? 'orange' : 'black',
        }}>
            <PhoneInput
                codeTextStyle={{
                    color: 'black'
                }}
                textInputStyle={{
                    fontSize: hp(2),
                    color: 'black',
                    borderColor: isFocused ? "#FF9900" : "black",
                    left: wp(3),
                }}
                textContainerStyle={{
                    paddingVertical: Platform.OS === "ios" ? hp(1.4) : 0,
                    paddingHorizontal: 0,
                    backgroundColor: 'white',
                    left: wp(20)
                }}
                containerStyle={{
                    width: "75%",
                    marginLeft: wp(1),
                }}
                textInputProps={{
                    maxLength: 15,
                    placeholderTextColor: "rgba(153, 153, 153, 0.5)",
                }}
                renderDropdownImage={
                    <AntDesign name="down" color='black' style={{ marginLeft: 5 }} />
                }
                countryPickerButtonStyle={{
                    position: "absolute",
                    justifyContent: "center",
                    width: "18%",
                    left: wp(2),
                    zIndex: 100,
                    borderRightWidth: 1,
                    borderRightColor: "#fff",
                }}
                defaultValue={""}
                defaultCode="US"
                disableArrowIcon={false}
                layout="first"
                placeholder={placeholder}
                onChangeText={handlePhoneNumberChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <TouchableOpacity style={{ marginTop: hp(2) }} onPress={() => setIsIconVisible(!isIconVisible)}>
                {isIconVisible && <Icon name="check-circle" size={20} color="#FF9900" />}
            </TouchableOpacity>
        </View>
    );
};

export default CustomPhoneInput;






