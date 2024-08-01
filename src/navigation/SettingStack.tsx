import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { Home_Svg, Arrow_Svg } from '../assets/Svgs/SvgGroup';
import { FAQs, HelpAndSupport, Fonts, Language, PrivacyPolicy, Profile, Setting, Subscribe, TermsAndConditions } from '../screens/index';
import FontFamily from '../assets/fonts';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();


const SettingStack = () => {
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen
                name="Setting"
                component={Setting}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: '#FF9900',
                    headerTitleStyle: {
                        fontSize: 16,
                        fontFamily: FontFamily.OpenSansSemiBold
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 20 }} />
                    ),
                    // headerLeft: () => (
                    //     <SvgXml
                    //         xml={Arrow_Svg}
                    //         width={30}
                    //         height={30}
                    //         style={{ marginLeft: 20 }}
                    //         onPress={() => navigation.goBack()}
                    //     />

                    // ),
                })}
            />
            <Stack.Screen name="Update Profile" component={Profile} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (
                    <SvgXml
                        xml={Arrow_Svg}
                        width={30}
                        height={30}
                        style={{ marginLeft: 15 }}
                        onPress={() => navigation.goBack()}
                    />

                ),
            })} />
            <Stack.Screen name="Fonts" component={Fonts} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (


                    <SvgXml
                        xml={Arrow_Svg}
                        width={24}
                        height={24}
                        style={{ marginLeft: 0 }}

                    />

                ),
            })} />
            <Stack.Screen name="Language" component={Language} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (


                    <SvgXml
                        xml={Arrow_Svg}
                        width={24}
                        height={24}
                        style={{ marginLeft: 0 }}

                    />

                ),
            })} />
            <Stack.Screen name="Feedback" component={HelpAndSupport} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SvgXml
                            xml={Arrow_Svg}
                            width={30}
                            height={30}
                            style={{ marginLeft: 0 }}
                            
                        />
                    </TouchableOpacity>

                ),
            })} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (


                    <SvgXml
                        xml={Arrow_Svg}
                        width={24}
                        height={24}
                        style={{ marginLeft: 0 }}

                    />

                ),
            })} />
            <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (


                    <SvgXml
                        xml={Arrow_Svg}
                        width={24}
                        height={24}
                        style={{ marginLeft: 0 }}

                    />

                ),
            })} />
            <Stack.Screen name="FAQs" component={FAQs} options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#FF9900',
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: FontFamily.OpenSansSemiBold
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 15 }} />
                ),
                headerLeft: () => (


                    <SvgXml
                        xml={Arrow_Svg}
                        width={24}
                        height={24}
                        style={{ marginLeft: 0 }}

                    />

                ),
            })} />
            <Stack.Screen name="Subscribe" component={Subscribe} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default SettingStack;