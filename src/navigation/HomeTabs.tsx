import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { Ranks_Svg, RankingIcon_Svg } from '../assets/Svgs/SvgGroup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GamesStack from '../navigation/GamesStack';
import SettingStack from '../navigation/SettingStack';
import ProfileStack from '../navigation/ProfileStack';
import RankingStack from '../navigation/RankingStack';


const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            // @ts-ignore
            screenOptions={{
                tabBarActiveTintColor: '#FF9900',
                tabBarStyle: {
                    display: 'flex',
                },
            }}
        >
            <Tab.Screen
                name="Games"
                component={GamesStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="game-controller-outline" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Rankings"
                component={RankingStack}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SvgXml xml={RankingIcon_Svg} width="100%" />
                        ) : (
                            <SvgXml xml={Ranks_Svg} width="100%" />
                        ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};
export default HomeTabs;