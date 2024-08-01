import {Platform, StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontFamily from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flex: 1,
    backgroundColor: '#CFF4FF',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 5,
    color: '#FF9900',
    marginTop: hp(2),
    width: wp(95),
    alignSelf: 'center',
    textAlignVertical: 'top',
    paddingVertical: Platform.OS === 'ios' ? hp(16) : hp(0),
    paddingHorizontal: Platform.OS === 'ios' ? wp(2) : wp(2),
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  optionsRow: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  feedbackIcon: {
    width: wp(6),
    height: hp(0),
    borderRadius: hp(10),
    marginRight: wp(8),
    bottom: hp(3.2),
    left: wp(2.9),
    borderColor: 'white',
  },
  feedbackIcone: {
    width: wp(6),
    height: hp(0),
    borderRadius: hp(10),
    marginRight: wp(8),
    bottom: hp(3),
    left: wp(3),
    borderColor: 'white',
  },

  feedbackText: {
    color: '#FF9900',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: hp(0.3),
  },
  optionItem: {
    width: wp(95),
    height: hp(8),
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF9900',
    margin: 4,
    alignSelf: 'center',
  },
  pagination: {
    flexDirection: 'row',

    marginTop: hp(1),
  },
  paginationItem: {
    marginHorizontal: wp(2),
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    borderRadius: wp(5),
    bottom: hp(0.5),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF9900',
  },
  paginationItemSelected: {
    backgroundColor: '#FF9900',
    color: 'white',
  },

  firstView: {
    flexDirection: 'row',
    backgroundColor: '#FF9900',
    marginTop: hp(0),
    height: hp(10),
    width: wp(96),
    marginLeft: wp(2),
    borderRadius: hp(2),
  },

  image: {
    width: wp(100),
    height: hp(7.5),
    resizeMode: 'contain',
    borderRadius: wp(40),
    marginTop: hp(1),
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  imagea: {
    width: wp(96),
    height: hp(50),
    resizeMode: 'contain',
    // overflow: "hidden",
    // borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp(-12),
    right: wp(0.5),
  },

  FirstText: {
    marginTop: hp(1),
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  SecText: {
    marginTop: hp(1),
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  SecTexta: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: FontFamily.MONTSERRAT_SemiBold,
    marginLeft: wp(4),
  },
  circle: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF9900',
    borderWidth: 1,
    right: wp(4),
  },
  circlee: {
    width: wp(6), // adjust the width based on your preference
    padding: 3,
    borderRadius: 15, // half of the width and height to make it a circle
    backgroundColor: 'white', // background color of the circle
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#FF9900',
    borderWidth: 1,
    textAlign: 'center',
    right: wp(4),
  },
  SecTextab: {
    fontSize: wp(5),
    color: 'black',
    textAlign: 'center',
    width: wp(90),
    alignSelf: 'center',
    paddingVertical: hp(1),
    fontWeight: 'bold',
    fontFamily: FontFamily.OpenSansRegular,
  },
  toturialBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: wp(2),
    alignContent: 'center',
    backgroundColor: '#FF9900',
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5),
    width: wp(95),
  },
});
