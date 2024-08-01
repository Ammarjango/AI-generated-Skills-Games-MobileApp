

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Images } from '../../assets/Image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Music_Svg, QuizTest_Svg, Submit_Svg } from '../../assets/Svgs/SvgGroup';
import { styles } from './styles';
import { IsAny } from '@reduxjs/toolkit/dist/tsHelpers';
import { SvgXml } from 'react-native-svg';
import { Tick_Svg, Crosss_Svg, Nex_Svg } from '../../assets/Svgs/SvgGroup';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const quizData = [

    {
        id: '1',
        question: 'What do turtles typically eat in their natural habitat?',
        options: ['Insects', 'Plants', 'Fish', 'Meat'],
        correctAnswer: 'Plants',
    },
    {
        id: '2',
        question: 'What do turtles typically eat in their natural habitat?',
        options: ['Insects', 'Plants', 'Fish', 'Meat'],
        correctAnswer: 'Plants',
    },
    {
        id: '3',
        question: 'What do turtles typically eat in their natural habitat?',
        options: ['Insects', 'Plants', 'Fish', 'Meat'],
        correctAnswer: 'Plants',
    },
    {
        id: '4',
        question: 'What do turtles typically eat in their natural habitat?',
        options: ['Insects', 'Plants', 'Fish', 'Meat'],
        correctAnswer: 'Plants',
    },
    {
        id: '5',
        question: 'What do turtles typically eat in their natural habitat?',
        options: ['Insects', 'Plants', 'Fish', 'Meat'],
        correctAnswer: 'Plants',
    },
    {
        id: '6',
        question: 'What do turtles typically eat in their natural habitat?',
        options: ['Insects', 'Plants', 'Fish', 'Meat'],
        correctAnswer: 'Plants',
    },
];


const maxPagesToShow = 6;
console.log('After QUIZZZZZZZZZZZZZZ Oneeeeeeeee');
interface QuizItem {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}
export default function QuizOne(props: any) {
    const UserData = useSelector(
        (state: RootState) => state?.appReducer?.UserData,
    );

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleOptionPress = (correctAnswer: string, selectedOption: string) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(selectedOption);

        }
    };



    const keyExtractor = (item: QuizItem) => item.id;

    const handlePagePress = (index: number) => {
        console.log(index);
        if (index < 6) {
            setCurrentPage(index);
            setSelectedAnswer(null);
            console.log('cureent page', currentPage);
        }
        console.log('jsdbjfc')
    };

    const renderItem = ({ item }: { item: QuizItem }) => (
        <View style={styles.container}>
            {/* Your existing content */}
            <Image source={Images.xx} style={styles.imagea} />
            <Text style={styles.SecTextab}>{item.question}</Text>

            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    {item.options.slice(0, 2).map((option, index) =>

                    (

                        <TouchableOpacity
                            key={index}
                            onPress={() => handleOptionPress(item.correctAnswer, option)}
                            style={[
                                styles.optionItem,
                                {
                                    backgroundColor:
                                        selectedAnswer === option
                                            ? option === item.correctAnswer
                                                ? '#20E74B'
                                                : '#FF5F5F'
                                            : 'white',
                                },
                            ]}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', left: hp(4) }}>
                                <View style={styles.circle}>
                                    <Text style={{ color: selectedAnswer === option ? 'white' : '#FF9900', alignSelf: 'center', bottom: hp(0.3), }}>
                                        {String.fromCharCode(65 + index)}
                                    </Text></View>
                                <Text style={{ color: selectedAnswer === option ? 'white' : '#FF9900', }}>{option}</Text>
                            </View>
                            {selectedAnswer === option && (
                                <View
                                    style={[
                                        styles.feedbackIcon,
                                        {
                                            backgroundColor:
                                                option === item.correctAnswer ? 'green' : 'red',
                                        },
                                    ]}
                                >
                                    {option === item.correctAnswer ? (
                                        // <Text style={styles.feedbackText}>✓</Text>
                                        <SvgXml xml={Tick_Svg} />
                                    ) : (
                                        <SvgXml xml={Crosss_Svg} style={{ backgroundColor: '#FF5F5F' }} />
                                        // <Text style={styles.feedbackText}>✗</Text>
                                    )}
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.optionsRow}>
                    {item.options.slice(2, 4).map((option, index) => (

                        <TouchableOpacity
                            key={index}
                            onPress={() => handleOptionPress(item.correctAnswer, option)}
                            style={[
                                styles.optionItem,
                                {
                                    backgroundColor:
                                        selectedAnswer === option
                                            ? option === item.correctAnswer
                                                ? '#20E74B'
                                                : '#FF5F5F'
                                            : 'white',
                                },
                            ]}
                        >

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', left: hp(4) }}>
                                <View style={styles.circlee}>
                                    <Text style={{ color: selectedAnswer === option ? 'white' : '#FF9900', alignSelf: 'center', bottom: hp(0.3) }}>
                                        {String.fromCharCode(67 + index)}
                                    </Text></View>
                                <Text style={{ color: selectedAnswer === option ? 'white' : '#FF9900', }}>{option}</Text>
                            </View>
                            {selectedAnswer === option && (
                                <View
                                    style={[
                                        styles.feedbackIcone,
                                        {
                                            backgroundColor:
                                                option === item.correctAnswer ? 'green' : 'red',
                                        },
                                    ]}
                                >
                                    {option === item.correctAnswer ? (
                                        // <Text style={styles.feedbackText}>✓</Text>
                                        <SvgXml xml={Tick_Svg} />
                                    ) : (
                                        <SvgXml xml={Crosss_Svg} style={{ backgroundColor: '#FF5F5F' }} />
                                        // <Text style={styles.feedbackText}>✗</Text>
                                    )}
                                </View>
                            )}

                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );


    function wp(arg0: number): import("react-native").DimensionValue | undefined {
        throw new Error('Function not implemented.');
    }

    return (
        <ScrollView style={styles.container}>


            <View style={styles.firstView}>

                <Image source={Images.Avatar} style={styles.image} />
                <Text style={styles.FirstText}>Wisdom Warrior</Text>

                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.SecTextx}>QRK 1250</Text>
                </View>

            </View>
            <View style={styles.firstViewa}>

                <View style={{ flexDirection: 'row', marginTop: hp(1), alignSelf: 'center', }}>
                    <SvgXml xml={QuizTest_Svg} />
                    <Text style={styles.SecTexta}>Level 1</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16 }}>
                {quizData.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handlePagePress(index)}
                        style={[
                            styles.paginationItem,
                            { backgroundColor: index === currentPage ? 'green' : 'white' },
                        ]}
                    >
                        <Text style={{ color: index === currentPage ? 'white' : 'black' }}>{index + 1}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={quizData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                getItemLayout={(data, index) => ({
                    length: hp(100),
                    offset: hp(100) * index,
                    index,
                })}
            />
            <TouchableOpacity
                style={{ alignSelf: 'center', margin: 14 }}
                onPress={() => {
                    props.navigation.navigate('AfterQuiz');
                }}
            >
                <SvgXml xml={Submit_Svg} />
            </TouchableOpacity>
        </ScrollView>
    );
}
