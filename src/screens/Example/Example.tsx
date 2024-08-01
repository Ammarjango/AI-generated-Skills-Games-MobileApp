import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {Images} from '../../assets/Image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {tick, Crosss_Svg} from '../../assets/Svgs/SvgGroup';
import {styles} from './styles';
import {dataServer} from '../../Service/AxiosConfig';
import Toast from 'react-native-toast-message';
import FontFamily from '../../assets/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const maxPagesToShow = 3;

export default function Quiz(props: any) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(10);
  const [RandomGames, setRandomGames] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [GameQuestion, setGameQuestion] = useState<any[]>([]);
  const [answerStatus, setAnswerStatus] = useState<{[key: string]: string}>({});
  const [currentSelected, setCurrentSelected] = useState<string | null>(null);
  const [selectedAnswerColor, setSelectedAnswerColor] = useState<string | null>(
    null,
  );
  const [submittedQuestions, setSubmittedQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const GetGames = async () => {
    try {
      const AllGames = await dataServer.get('/games/getrandomexamplegame');
      const responseData = AllGames.data;
      const gamesArray = responseData.data.games;
      if (gamesArray) {
        setRandomGames(gamesArray._id);
        console.log('random game after set state', gamesArray);
      } else {
        Alert.alert('No Games Available');
      }
      if (responseData) {
        GetGamesQuestion(gamesArray._id);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const GetGamesQuestion = async (id: string) => {
    try {
      const SpecificGame = await dataServer.get(
        `/games/questionsOfLevelOfExampleGame/${id}`,
      );
      const responseData = SpecificGame.data;
      const firstThreeQuestions = responseData.data.questions.slice(0, 3);
      setGameQuestion(firstThreeQuestions);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const SubmitGamesQuestion = async (
    gameId: string,
    questionId: string,
    userAnswer: string,
  ) => {
    setLoader(true);
    try {
      if (!userAnswer.trim()) {
        setLoader(false);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Please select an option or fill in the input field',
          visibilityTime: 3000,
          autoHide: true,
        });
        return;
      } else {
        const response = await dataServer.post(
          '/games/answerExampleQuestion/',
          {
            gameId,
            questionId,
            userAnswer,
          },
        );
        const correct = response.data.message;
        const isCorrect =
          correct === 'Correct answer, move to the next question';

        const newSubmittedQuestion = {
          questionId,
          selectedAnswer: userAnswer,
          isCorrect,
        };

        setSubmittedQuestions(prevState => [
          ...prevState,
          newSubmittedQuestion,
        ]);

        if (isCorrect) {
          setLoader(false);
          setAnswerStatus(prevStatus => ({
            ...prevStatus,
            [questionId]: 'correct',
          }));
          setSelectedAnswerColor('#20E74B');
        } else if (correct === 'Game completed') {
          setLoader(false);
          console.log('Submitted Questions:', [
            ...submittedQuestions,
            newSubmittedQuestion,
          ]);
          props.navigation.replace('Congrats');
          return;
        } else {
          setLoader(false);
          setAnswerStatus(prevStatus => ({
            ...prevStatus,
            [questionId]: 'wrong',
          }));
          setSelectedAnswerColor('red');
        }

        setTimeout(() => {
          setCurrentSelected(null);
          setSelectedAnswer(null);
          setSelectedAnswerColor(null);
          handlePagePress(currentPage + 1);
          const updatedQuestions = GameQuestion.slice(1);
          setGameQuestion(updatedQuestions);
          if (updatedQuestions.length === 0) {
            console.log('Submitted Questions:', [
              ...submittedQuestions,
              newSubmittedQuestion,
            ]);
            props.navigation.replace('Congrats');
          }
        }, 1000);
      }
    } catch (err) {
      setLoader(false);
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    GetGames();
  }, []);

  const handleOptionPress = (letter: string) => {
    setCurrentSelected(letter);
    setSelectedAnswerColor(null);
  };

  const handlePagePress = (index: number) => {
    setCurrentPage(index);
    setCurrentSelected(null);
    setSelectedAnswer(null);
    setRemainingTime(3);
  };

  const renderItem = ({item, index}: any) => (
    <View style={styles.container} key={item._id}>
      <Text style={styles.SecTextab} numberOfLines={2} ellipsizeMode="tail">
        {item.question}
      </Text>
      {item.questionType === 'mcq' ? (
        <View style={styles.optionsContainer}>{renderMCQOptions(item)}</View>
      ) : (
        <>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={8}
            placeholder="Enter your answer"
            placeholderTextColor={'black'}
            onChangeText={text => setSelectedAnswer(text)}
            value={selectedAnswer}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() =>
                SubmitGamesQuestion(RandomGames, item._id, selectedAnswer)
              }
              style={{
                backgroundColor: '#FF9900',
                width: wp(80),
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                borderRadius: 10,
                marginTop: hp(2),
              }}>
              {loader ? (
                <View style={{alignSelf: 'center'}}>
                  <ActivityIndicator color={'white'} size={25} />
                </View>
              ) : (
                <Text
                  style={{
                    color: 'white',
                    fontFamily: FontFamily.OpenSansMedium,
                    fontSize: 18,
                  }}>
                  Submit
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  const renderPaginationItemStyle = (index: number) => {
    let backgroundColor = 'white';

    if (index === currentPage) {
      backgroundColor = 'white';
    } else if (
      index < 3 &&
      submittedQuestions[index] &&
      submittedQuestions[index].isCorrect !== undefined
    ) {
      backgroundColor = submittedQuestions[index].isCorrect
        ? '#20E74B'
        : '#FF5F5F';
    }

    return {backgroundColor};
  };

  const renderMCQOptions = (item: any) => {
    const options: {letter: string; text: string}[] = [];
    let correctAnswer = item.correctAnswer;
    const correctAnswers: {[key: string]: boolean} = {};
    ['optionOne', 'optionTwo', 'optionThree'].forEach((optionKey, index) => {
      if (item[optionKey] && item[optionKey].text) {
        const letter = String.fromCharCode(65 + index);
        options.push({letter, text: item[optionKey].text});
        // if (correctAnswer === selectedAnswer) {
        //   correctAnswers[letter] = true;
        // }
      }
    });

    return (
      <>
        {options.map(({letter, text}) => (
          <TouchableOpacity
            key={letter}
            onPress={() => handleOptionPress(letter)}
            style={[
              styles.optionItem,
              {
                backgroundColor:
                  currentSelected === letter
                    ? selectedAnswerColor || '#FF9900'
                    : 'white',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp(7),
              }}>
              {selectedAnswerColor && currentSelected === letter ? (
                <SvgXml
                  xml={selectedAnswerColor === '#20E74B' ? tick : Crosss_Svg}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: wp(4),
                  }}
                />
              ) : (
                <View style={styles.circle}>
                  <Text style={{color: '#FF9900', alignSelf: 'center'}}>
                    {letter}
                  </Text>
                </View>
              )}
              <Text
                style={{
                  color: currentSelected === letter ? 'white' : '#FF9900',
                  fontFamily: FontFamily.MONTSERRAT_Regular,
                }}>
                {' '}
                {text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: hp(1),
          }}>
          <TouchableOpacity
            onPress={() =>
              SubmitGamesQuestion(RandomGames, item._id, currentSelected)
            }
            style={{
              backgroundColor: '#FF9900',
              width: wp(80),
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
              borderRadius: 10,
            }}>
            {loader ? (
              <View style={{alignSelf: 'center'}}>
                <ActivityIndicator color={'white'} size={25} />
              </View>
            ) : (
              <Text
                style={{
                  color: 'white',
                  fontFamily: FontFamily.OpenSansMedium,
                  fontSize: 18,
                }}>
                Submit
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              height: hp(90),
            }}>
            <ActivityIndicator size="large" color="#FF9900" />
          </View>
        ) : (
          <>
            <View style={styles.toturialBtn}>
              {/* <SvgXml xml={tut_Svg} /> */}
              <Text style={styles.SecTexta}>Tutorial</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingVertical: hp(2),
              }}>
              {[...Array(Math.min(maxPagesToShow, maxPagesToShow)).keys()].map(
                index => (
                  <View
                    key={index}
                    style={[
                      styles.paginationItem,
                      renderPaginationItemStyle(index),
                    ]}>
                    <Text style={{color: 'black'}}>{index + 1}</Text>
                  </View>
                ),
              )}
            </View>
            {GameQuestion.length > 0 && (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
                <View>
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: wp(95),
                      height: hp(30),
                      alignSelf: 'center',
                      overflow: 'hidden',
                      borderRadius: 10,
                    }}>
                    <Image
                      source={Images.xx}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                </View>
                <FlatList
                  data={GameQuestion}
                  renderItem={renderItem}
                  pagingEnabled
                  horizontal={true}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  getItemLayout={(data, index) => ({
                    length: hp(100),
                    offset: hp(100) * index,
                    index,
                  })}
                />
              </KeyboardAvoidingView>
            )}
          </>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
}
