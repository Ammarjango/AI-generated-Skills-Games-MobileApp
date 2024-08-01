import {View, StyleSheet, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Con_Svg, Button_Svg} from '../../assets/Svgs/SvgGroup';
import React, {useEffect} from 'react';
import {Images} from '../../assets/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Congrats(props: any) {
  return (
    <View style={styles.container}>
      <Image
        source={Images.congratss}
        style={{width: wp(99.9), height: hp(100)}}
      />
      <SvgXml xml={Con_Svg} style={{position: 'absolute'}} />

      <SvgXml
        xml={Button_Svg}
        style={{position: 'absolute', bottom: hp(10)}}
        onPress={() => {
          if (props.navigation) {
            // Call the navigate function from the props
            props.navigation.replace('Create your superhero');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});
