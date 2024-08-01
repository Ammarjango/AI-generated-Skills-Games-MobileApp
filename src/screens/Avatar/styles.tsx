import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontFamily from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    width: wp(100),
    backgroundColor: 'white',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', // You can set the color according to your design
    marginBottom: 20, // Adjust the margin as needed
  },
  input: {
    height: hp(50),
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Adjust this color as needed
    marginBottom: 5,
    width: hp(40),
    alignSelf: 'center',
  },
  inputx: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: hp(40),
    height: hp(6),
    marginTop: hp(2),
    alignSelf: 'center',
    fontFamily: '600',
    fontSize: 15,
    color: 'black',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(0),

    color: 'black',
    //backgroundColor: 'red',
    width: '100%',
    // height: '5%',
    left: hp(1.5),
  },
  stepIndicatorLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  stepIndicator: {
    height: 2,
    backgroundColor: '#CFF4FF',
  },
  stepIndicatorSelected: {
    backgroundColor: '#CFF4FF',
  },
  sliderLabel: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'center',
    fontWeight: 'bold',

    justifyContent: 'space-between',
  },
  previewStyle: {
    height: 55,
    borderRadius: 50,
    marginBottom: 30,
  },
  shadow: {
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  paginationItem: {
    marginHorizontal: wp(2),
    height: wp(8),
    width: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(8),
    borderWidth: 1,
    borderColor: '#CFF4FF',
    backgroundColor: '#CFF4FF',
  },
  paginationItemSelected: {
    backgroundColor: '#FF9900',
    color: 'white',
  },
  bodyTypeContainer: {
    top: hp(3),
    right: wp(10),
    width: wp(100),
    height: hp(100),
  },
  bodyTypeContainermodel: {
    flex: 1,
    width: wp(100),
    backgroundColor: 'lightblue',
  },
  bodyTypeContainer2: {
    flex: 1,
    width: wp(100),

    backgroundColor: 'lightblue',
  },
  bodyTypeContainertexture: {
    width: wp(100),
    top: hp(2),
    // height: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red"
  },
  bodyTypeContainerx: {
    width: wp(100),
    marginBottom: hp(20),
    // marginTop: hp(8),
    // bottom: hp(6),
  },
  bodyTypeContainerlast: {
    flex: 1,
    width: wp(100),
    // backgroundColor:"lightblue",
    // height:hp(100),
    // marginTop:hp(10)
  },
  navigationImage: {
    width: wp(10),
    height: hp(10),
    resizeMode: 'contain',
  },
  navigationImagex: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: '#eca883',
    borderRadius: 40,
  },
  navigationImagex1: {
    width: wp(20),
    height: hp(10),
    resizeMode: 'contain',
    backgroundColor: '#bf6f4e',
    borderRadius: 40,
  },
  navigationImagex2: {
    width: wp(20),
    height: hp(10),
    resizeMode: 'contain',
    backgroundColor: '#b1653d',
    borderRadius: 40,
  },
  navigationImagex3: {
    width: wp(20),
    height: hp(10),
    resizeMode: 'contain',
    backgroundColor: '#814024',
    borderRadius: 40,
  },
  navigationImagex4: {
    width: wp(20),
    height: hp(10),
    resizeMode: 'contain',
    backgroundColor: '#321610',
    borderRadius: 40,
  },
  bodyTypeImage: {
    width: '90%',
    height: hp(40),
    resizeMode: 'contain',
  },
  bodyTypeImagex: {
    width: '90%',
    height: hp(40),
    resizeMode: 'contain',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  navigation2: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: wp(80),
    // marginTop: hp(2),
    alignSelf: 'center',
    // flex:1,
    height: hp(20),
    bottom: hp(40),
  },
  navigationlast: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    width: wp(80),
    marginTop: hp(2),
    bottom: hp(19),
  },
  navigationx: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(80),
    marginTop: hp(2),
    bottom: hp(15),
  },
  arrowButton: {
    padding: wp(2),
    fontWeight: 'bold',
    borderRadius: wp(2),
    color: '#FF9900',
  },
  arrowButtontext: {
    fontWeight: 'bold',
    fontSize: 34,
    color: '#FF9900',
    fontFamily: FontFamily.OpenSansRegular,
  },
  nextButton: {
    padding: hp(2),
    backgroundColor: '#FF9900',
    borderRadius: wp(2),
    width: wp(80),
    bottom: hp(6),
  },
  nextButton2: {
    padding: hp(2),
    backgroundColor: '#FF9900',
    borderRadius: wp(2),
    alignSelf: 'center',
    marginTop: hp(2),
    width: wp(80),
  },
  nextButtonx: {
    // marginTop: hp(3),
    padding: hp(1.5),
    backgroundColor: '#FF9900',
    borderRadius: wp(2),
    width: hp(30),
    bottom: hp(8),
  },
  nextButtonx2: {
    marginTop: hp(3),
    padding: hp(1.5),
    backgroundColor: '#FF9900',
    borderRadius: wp(2),
    width: hp(30),
  },
  nextButtontext: {
    color: 'white',
    fontFamily: FontFamily.OpenSansRegular,
    alignSelf: 'center',
    fontSize: hp(2.5),
  },
  nextButtontextx: {
    color: 'white',
    fontFamily: FontFamily.OpenSansRegular,
    alignSelf: 'center',
    fontSize: 16,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    // bottom: hp(5)
  },
  text2: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: hp(2),
  },
  texti: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',

    // bottom: hp(12)
  },
  textx: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: hp(1),
    top: hp(5),
    fontFamily: FontFamily.OpenSansRegular,
  },
  text3: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    // bottom: hp(40)
  },
});
