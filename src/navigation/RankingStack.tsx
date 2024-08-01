import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Home_Svg, Arrow_Svg, search } from '../assets/Svgs/SvgGroup';
import { Leaderboard, PlayerProfile } from '../screens/index';
import FontFamily from '../assets/fonts';

const Stack = createStackNavigator();

const RankingStack = () => {
    const navigation: any = useNavigation()
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen
                name="Leaderboard"
                component={Leaderboard}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#FF9900',

                    },
                    headerTintColor: '#FF9900',
                    headerTitleStyle: {
                        fontSize: 16,
                        color: "white",

                        fontFamily: FontFamily.MONTSERRAT_SemiBold
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <SvgXml xml={search} width={24} height={24} style={{ marginRight: 20 }} />
                    ),
                    // headerLeft: () => (


                    //     <SvgXml
                    //         xml={homesvg2}
                    //         width={30}
                    //         height={30}
                    //         style={{ marginLeft: 20 }}
                    //         onPress={() => navigation.goBack()}
                    //     />

                    // ),
                })}
            />
            <Stack.Screen
                name="PlayerProfile"
                component={PlayerProfile}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: 'white',

                    },
                    headerTintColor: '#FF9900',
                    headerTitleStyle: {
                        fontSize: 14,

                        fontFamily: FontFamily.MONTSERRAT_SemiBold

                    },
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity>
                            <SvgXml xml={Home_Svg} width={24} height={24} style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                            <SvgXml
                                xml={Arrow_Svg}
                                width={30}
                                height={30}
                                style={{ marginLeft: 16 }}
                            />
                        </TouchableOpacity>

                    ),
                })}
            />

        </Stack.Navigator>
    )
}
export default RankingStack;