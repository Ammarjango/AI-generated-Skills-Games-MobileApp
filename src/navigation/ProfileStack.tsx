import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { Home_Svg } from '../assets/Svgs/SvgGroup';
import { Profiles } from '../screens/index';
import FontFamily from '../assets/fonts';


const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen
                name="Profiles"
                component={Profiles}
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
                    headerTitle: 'Profile',
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

        </Stack.Navigator>
    )
}
export default ProfileStack;