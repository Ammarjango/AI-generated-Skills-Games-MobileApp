import React, { useState } from 'react';
import { Platform, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from '../screens/SignIn/styles';

const CustomInput = ({ placeholder, value, onChangeText, isFocused }) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isIconVisible, setIsIconVisible] = useState(false);

    const toggleIconVisibility = () => {
        setIsIconVisible(!isIconVisible);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[
                    styles.input,
                    isInputFocused && styles.highlightedInput,
                    isInputFocused && { color: '#FF9900' },
                ]}
                placeholder={placeholder}
                placeholderTextColor="#8E8D90"
                onChangeText={onChangeText}
                value={value}
                onFocus={() => { setIsInputFocused(true); toggleIconVisibility(); }}
                onBlur={() => { setIsInputFocused(false); toggleIconVisibility(); }}
            />
            {isIconVisible && <TouchableOpacity onPress={toggleIconVisibility}><Icon name="check-circle" size={20} color="#FF9900" /></TouchableOpacity>}
        </View>
    );
};

export default CustomInput;
