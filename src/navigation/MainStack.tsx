import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {Home_Svg, Arrow_Svg} from '../assets/Svgs/SvgGroup';
import {
  Splash,
  Onboarding,
  Avatar,
  AfterQuiz,
  AfterQuizOne,
  Congrats,
  LevelUp,
  Home,
  Loading,
  PrivacyPolicy,
  Example,
  Quiz,
  SelectHobby,
  SignIn,
  TermsAndConditions,
  VerifyAccounts,
  VerifyPhno,
  Correct,
  Summary,
  SummaryQuestion,
} from '../screens/index';
import HomeTabs from '../navigation/HomeTabs';
import FontFamily from '../assets/fonts';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Create your superhero"
          component={Avatar}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 15,
              fontFamily: FontFamily.OpenSansSemiBold,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Setup Profile"
          component={SignIn}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: FontFamily.OpenSansSemiBold,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Verify PhNo"
          component={VerifyPhno}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: FontFamily.OpenSansSemiBold,
            },
            headerTitleAlign: 'center',
            headerTitle: 'Verify Account',
          }}
        />
        <Stack.Screen
          name="Verify Account"
          component={VerifyAccounts}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: FontFamily.OpenSansSemiBold,
            },
            headerTitleAlign: 'center',
            headerTitle: 'Enter Phone Number',
          }}
        />
        <Stack.Screen
          name="Choose your Interests"
          component={SelectHobby}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: FontFamily.OpenSansSemiBold,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 14,
              fontFamily: FontFamily.OpenSansRegular,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Example"
          component={Example}
          options={{headerShown: false}}
          // options={({ navigation }) => ({
          //   headerStyle: {
          //     backgroundColor: '#CFF4FF',
          //   },
          //   headerTintColor: '#FF9900',
          //   headerTitleStyle: {
          //     fontSize: 18,
          //     fontFamily: FontFamily.OpenSansSemiBold,
          //   },
          //   headerTitleAlign: 'center',
          // })}
        />
        <Stack.Screen
          name="Congrats"
          component={Congrats}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AfterQuiz"
          component={AfterQuiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AfterQuizOne"
          component={AfterQuizOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LevelUp"
          component={LevelUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Correct"
          component={Correct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SummaryQuestion"
          component={SummaryQuestion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QUIZ"
          component={Quiz}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#CFF4FF',
            },
            headerTintColor: '#FF9900',

            headerTitleStyle: {
              fontSize: 14,

              fontFamily: FontFamily.OpenSansRegular,
            },

            headerTitleAlign: 'center',
            headerRight: () => (
              <SvgXml
                xml={Home_Svg}
                width={24}
                height={24}
                style={{marginRight: 15}}
              />
            ),
            headerLeft: () => (
              <SvgXml
                xml={Arrow_Svg}
                width={24}
                height={24}
                style={{marginLeft: 0}}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 14,
              fontFamily: FontFamily.OpenSansRegular,
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <SvgXml
                xml={Home_Svg}
                width={24}
                height={24}
                style={{marginRight: 15}}
              />
            ),
            headerLeft: () => (
              <SvgXml
                xml={Arrow_Svg}
                width={24}
                height={24}
                style={{marginLeft: 0}}
              />
            ),
          })}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#FF9900',
            headerTitleStyle: {
              fontSize: 14,
              fontFamily: FontFamily.OpenSansRegular,
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <SvgXml
                xml={Home_Svg}
                width={24}
                height={24}
                style={{marginRight: 15}}
              />
            ),
            headerLeft: () => (
              <SvgXml
                xml={Arrow_Svg}
                width={24}
                height={24}
                style={{marginLeft: 0}}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
