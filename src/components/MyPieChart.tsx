import React from 'react';
import { Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { OpenSans_Bold } from '../assets/fonts';
export const MyPieChart = (props: {
    widthAndHeight: number;
    series: number[];
    sliceColor: string[];
    coverFill: string;
    skillData: { skill: string; value: number; color: string }[];
}) => {
    const calculateTotalValue = () => {
        return props.skillData.reduce((total, skill) => total + skill.value, 0);
    };

    const calculateDataPercentages = () => {
        const totalValue = calculateTotalValue();
        return props.skillData.map((skill) => (skill.value / totalValue) * 100);
    };

    const dataPercentages = calculateDataPercentages();

    const calculateTextPosition = (index: number): { x: number; y: number } => {
        const startPercentage = index === 0 ? 0 : dataPercentages.slice(0, index).reduce((sum, value) => sum + value, 0);
        const valuePosition = startPercentage + dataPercentages[index] / 2;

        const WidthHeight = props.widthAndHeight;
        const radius = WidthHeight / 4;

        const angle = (2 * Math.PI * valuePosition) / 100;

        const x = WidthHeight / 2 + Math.cos(angle) * radius;
        const y = WidthHeight / 2 + Math.sin(angle) * radius;

        const textWidth = 50;
        const textHeight = 10;

        const adjustedX = x - textWidth / 2;
        const adjustedY = y - textHeight / 2;

        return { x: adjustedX, y: adjustedY };
    };



    return (
        <View style={{ alignItems: 'center', margin: 10 }}>
            <PieChart
                style={{ alignItems: "center", justifyContent: "center" }}
                widthAndHeight={props.widthAndHeight}
                series={props.series}
                sliceColor={props.sliceColor}
                coverFill={props.coverFill}
            />
            {props.skillData.map((item, index) => {
                const textPosition = calculateTextPosition(index);

                return (
                    <View key={index} style={{
                        position: 'absolute', left: textPosition.x, top: textPosition.y
                    }}>

                        <Text style={{ color: '#FFF', textAlign: 'center', fontFamily: OpenSans_Bold }}>
                            {`${item.value}%\n${item.skill}`}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};