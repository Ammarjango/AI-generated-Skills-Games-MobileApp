import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { Home, SearchSkill, CreateGame } from '../screens/index';
import { Home_Svg } from '../assets/Svgs/SvgGroup';
import FontFamily from '../assets/fonts';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const GamesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: '#FF9900',
                    headerTitleStyle: {
                        fontSize: 16,
                        fontFamily: FontFamily.OpenSansSemiBold,
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

                    //     />

                    // ),
                })}
            />
            <Stack.Screen
                name="SearchSkill"
                component={SearchSkill}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateGame"
                component={CreateGame}
                options={{ headerShown: false }}
            />



        </Stack.Navigator>
    )
}
export default GamesStack;