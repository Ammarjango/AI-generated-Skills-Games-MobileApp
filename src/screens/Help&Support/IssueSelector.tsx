import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontFamily from '../../assets/fonts';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const IssueSelector = (props:any) => {
  const options = [
    'Facing Bugs Error',
    'Display issue',
    'Account Problem',
    'Game Issue',
  ];

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => props.handleOptionSelect(option)}
        >
          <View style={styles.radioCircle}>
            {props.selectedOption === option && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionContainer} onPress={() => props.handleOptionSelect('Other')}>
          <View style={styles.radioCircle}>
            {props.selectedOption === 'Other' && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.optionText}>Other</Text>
        </TouchableOpacity>
        {props.selectedOption === 'Other' && (
          <TextInput
            style={styles.textInput}
            placeholder="Type your issue here"
            value={props.otherText}
            onChangeText={props.setOtherText}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1),
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFA500',
  },
  optionText: {
    fontSize: 12,
    fontFamily: FontFamily.OpenSansRegular,
    alignSelf: 'center'
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#FFA500',
    flex: 1,
    paddingHorizontal: widthPercentageToDP(2)
  },
});

export default IssueSelector;