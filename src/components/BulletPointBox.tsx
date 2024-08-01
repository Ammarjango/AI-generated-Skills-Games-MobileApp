import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontFamily from '../assets/fonts';

export const BulletPointBox = (props: any) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: wp(3), bottom: hp(2), paddingVertical: hp(1) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ justifyContent: 'center', right: wp(1) }}>
                    <Icon name="circle" size={15} color="#8E56C6" />
                </View>
                <Text style={{ color: '#2A2A2A', fontSize: 13, fontFamily: FontFamily.OpenSansRegular }}> {props.name} </Text>
            </View>
            <Text style={{ color: '#8E56C6', fontSize: 14, right: wp(4), fontFamily: FontFamily.OpenSansRegular }}> {props.data} </Text>
        </View>

    )
}

