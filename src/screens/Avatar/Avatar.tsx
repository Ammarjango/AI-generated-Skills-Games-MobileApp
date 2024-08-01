import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Images} from '../../assets/Image/index';
import {styles} from './styles';
import * as Progress from 'react-native-progress';
import {
  Fat_Character_Base,
  Fat_Character_Costume_1,
  Fat_Character_Costume_2,
  Fat_Character_Costume_3,
  Muscular_Character_Base,
  Muscular_Character_Costume_1,
  Muscular_Character_Costume_2,
  Muscular_Character_Costume_3,
  Skinny_Character_Base,
  Skinny_Character_Costume_1,
  Skinny_Character_Costume_2,
  Skinny_Character_Costume_3,
} from '../3dTest/index';
import {ImagesTexture} from '../3dTest/texturesimg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {Texturea, Textureb, Texturec} from '../../redux/reducers/appReducers';
import {RootState} from '../../redux';
import Toast from 'react-native-toast-message';
import FontFamily from '../../assets/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const bodyTypes = [Images.group, Images.group, Images.group, Images.group];
const HeadTypes = [Images.group, Images.group, Images.group, Images.group];
const Character = [
  Fat_Character_Base,
  Fat_Character_Costume_1,
  Fat_Character_Costume_2,
  Fat_Character_Costume_3,
];
const HeadType = [
  Images.Custome,
  Images.Custome,
  Images.Custome,
  Images.Custome,
];
const DataInfo = [Images.image, Images.Skin, Images.coat];
const TextArray = [
  'SELECT BODYTYPES',
  'SELECT A HERO FACE',
  'SELECT A COSTUME',
  'NAME YOUR SUPERHERO',
];

export default function Avatar1(props: any) {
  const model = useMemo(
    () => ({
      fat: {
        base: <Fat_Character_Base />,
        costume1: <Fat_Character_Costume_1 />,
        costume2: <Fat_Character_Costume_2 />,
        costume3: <Fat_Character_Costume_3 />,
      },
      muscular: {
        base: <Muscular_Character_Base />,
        costume1: <Muscular_Character_Costume_1 />,
        costume2: <Muscular_Character_Costume_2 />,
        costume3: <Muscular_Character_Costume_3 />,
      },
      skinny: {
        base: <Skinny_Character_Base />,
        costume1: <Skinny_Character_Costume_1 />,
        costume2: <Skinny_Character_Costume_2 />,
        costume3: <Skinny_Character_Costume_3 />,
      },
      texture: {
        skintone0: ImagesTexture.skintone0,
        skintone1: ImagesTexture.skintone1,
        skintone2: ImagesTexture.skintone2,
        skintone3: ImagesTexture.skintone3,
        skintone4: ImagesTexture.skintone4,
      },
    }),
    [],
  );

  const dispatch = useDispatch();
  const scrollViewRef = useRef<ScrollView>(null);

  const [selectedBodyType, setSelectedBodyType] = useState(0);
  const [page, setPage] = useState(0);
  const [isPrevDisabled, setIsPrevDisable] = useState<boolean>(true);
  const [isNextDisabled, setIsNextDisable] = useState<boolean>(false);
  const [modelName, setModelName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savemodel, setSaveModel] = useState<any>(model.fat.base);
  const [saveCostume, setSaveCostume] = useState<any>(model.muscular.costume1);
  const [listProgress, setListProgress] = useState<Array<number>>([0, 0, 0, 0]);

  const updatePagination = () => {
    const newListProgress = [...listProgress];
    newListProgress[page] = 1; // Set the progress of the current page to 1
    setListProgress(newListProgress);

    setSelectedBodyType(0);
    setIsNextDisable(false);
    setIsPrevDisable(false);
    setCurrentIndex(0);
    const newPage = page < bodyTypes.length - 1 ? page + 1 : 0;
    setPage(newPage);
  };

  const checkData = async (modelName: any) => {
    if (modelName === '') {
      Toast.show({
        type: 'info',
        text1: 'Empty',
        text2: 'Enter Hero Name',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      try {
        const data = await AsyncStorage.getItem('accessToken');
        props.navigation.navigate(data ? 'Verify Account' : 'Setup Profile');
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
        props.navigation.navigate('Setup Profile');
      }
    }
  };

  const handlePrev = () => {
    const newSelectedBodyType =
      selectedBodyType > 0 ? selectedBodyType - 1 : 3 - 1;
    setSelectedBodyType(newSelectedBodyType);
    scrollScrollView(-1);
    const prevIndex =
      currentIndex - 1 < 0 ? DataInfo.length - 1 : currentIndex - 1;
    const newProgress = (prevIndex + 1) / DataInfo.length;
    // setProgress(newProgress);

    if (newProgress === 0.3333333333333333) {
      setIsPrevDisable(true);
      setIsNextDisable(false);
      setSaveModel(model.fat.base);
    } else if (newProgress === 0.6666666666666666) {
      setIsPrevDisable(false);
      setIsNextDisable(false);
      setSaveModel(model.muscular.base);
    } else if (newProgress === 1) {
      setIsPrevDisable(true);
      setIsNextDisable(false);
      setSaveModel(model.skinny.base);
    } else {
      setIsPrevDisable(true);
      setIsNextDisable(false);
      setSaveModel(model.fat.base);
    }

    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? DataInfo.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    const newSelectedBodyType =
      selectedBodyType < 3 - 1 ? selectedBodyType + 1 : 0;
    setSelectedBodyType(newSelectedBodyType);

    const nextIndex = currentIndex + 1 >= 3 ? 0 : currentIndex + 1;
    const newProgress = (nextIndex + 1) / 3;

    // setProgress(newProgress);

    if (newProgress === 0.3333333333333333) {
      setIsNextDisable(true);
      setIsPrevDisable(false);
      setSaveModel(model.fat.base);
    } else if (newProgress === 0.6666666666666666) {
      setIsPrevDisable(false);
      setIsNextDisable(false);
      setSaveModel(model.muscular.base);
    } else if (newProgress === 1) {
      setIsNextDisable(true);
      setIsPrevDisable(false);
      setSaveModel(model.skinny.base);
    } else {
      setIsNextDisable(true);
      setIsPrevDisable(false);
      setSaveModel(model.fat.base);
    }

    setCurrentIndex(prevIndex => (prevIndex === 3 - 1 ? 0 : prevIndex + 1));
    scrollScrollView(1);
  };

  const handlePrevcostume = () => {
    const newSelectedBodyType =
      selectedBodyType > 0 ? selectedBodyType - 1 : 3 - 1;
    setSelectedBodyType(newSelectedBodyType);
    scrollScrollView(-1);
    const prevIndex =
      currentIndex - 1 < 0 ? DataInfo.length - 1 : currentIndex - 1;
    const newProgress = (prevIndex + 1) / DataInfo.length;
    // setProgress(newProgress);

    if (savemodel === model.fat.base) {
      if (newProgress === 0.3333333333333333) {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.fat.costume1);
      } else if (newProgress === 0.6666666666666666) {
        setIsPrevDisable(false);
        setIsNextDisable(false);
        setSaveCostume(model.fat.costume2);
      } else if (newProgress === 1) {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.fat.costume3);
      } else {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.fat.costume1);
      }
    } else if (savemodel === model.muscular.base) {
      if (newProgress === 0.3333333333333333) {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.muscular.costume1);
      } else if (newProgress === 0.6666666666666666) {
        setIsPrevDisable(false);
        setIsNextDisable(false);
        setSaveCostume(model.muscular.costume2);
      } else if (newProgress === 1) {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.muscular.costume3);
      } else {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.muscular.costume1);
      }
    } else if (savemodel === model.skinny.base) {
      if (newProgress === 0.3333333333333333) {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.skinny.costume1);
      } else if (newProgress === 0.6666666666666666) {
        setIsPrevDisable(false);
        setIsNextDisable(false);
        setSaveCostume(model.skinny.costume2);
      } else if (newProgress === 1) {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.skinny.costume3);
      } else {
        setIsPrevDisable(true);
        setIsNextDisable(false);
        setSaveCostume(model.skinny.costume1);
      }
    }

    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? DataInfo.length - 1 : prevIndex - 1,
    );
  };

  const handleNextcostume = () => {
    const newSelectedBodyType =
      selectedBodyType < 3 - 1 ? selectedBodyType + 1 : 0;
    setSelectedBodyType(newSelectedBodyType);
    const nextIndex = currentIndex + 1 >= 3 ? 0 : currentIndex + 1;

    const newProgress = (nextIndex + 1) / 3;
    // setProgress(newProgress);

    if (savemodel === model.fat.base) {
      if (newProgress === 0.3333333333333333) {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.fat.costume1);
      } else if (newProgress === 0.6666666666666666) {
        setIsPrevDisable(false);
        setIsNextDisable(false);
        setSaveCostume(model.fat.costume2);
      } else if (newProgress === 1) {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.fat.costume3);
      } else {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.fat.costume1);
      }
    } else if (savemodel === model.muscular.base) {
      if (newProgress === 0.3333333333333333) {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.muscular.costume1);
      } else if (newProgress === 0.6666666666666666) {
        setIsPrevDisable(false);
        setIsNextDisable(false);
        setSaveCostume(model.muscular.costume2);
      } else if (newProgress === 1) {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.muscular.costume3);
      } else {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.muscular.costume1);
      }
    } else if (savemodel === model.skinny.base) {
      if (newProgress === 0.3333333333333333) {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.skinny.costume1);
      } else if (newProgress === 0.6666666666666666) {
        setIsPrevDisable(false);
        setIsNextDisable(false);
        setSaveCostume(model.skinny.costume2);
      } else if (newProgress === 1) {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.skinny.costume3);
      } else {
        setIsNextDisable(true);
        setIsPrevDisable(false);
        setSaveCostume(model.skinny.costume1);
      }
    }
    setCurrentIndex(prevIndex =>
      prevIndex === DataInfo.length - 1 ? 0 : prevIndex + 1,
    );
    scrollScrollView(1);
  };

  const handlePrevTexture = () => {
    const newSelectedBodyType =
      selectedBodyType > 0 ? selectedBodyType - 1 : 5 - 1;
    setSelectedBodyType(newSelectedBodyType);
    const prevIndex = currentIndex - 1 < 0 ? 5 - 1 : currentIndex - 1;
    const newProgress = (prevIndex + 1) / 5;

    if (newProgress === 0.2) {
      setIsNextDisable(false);
      setIsPrevDisable(true);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone0));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone0));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone0));
      }
    } else if (newProgress === 0.4) {
      setIsPrevDisable(false);
      setIsNextDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone1));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone1));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone1));
      }
    } else if (newProgress === 0.6) {
      setIsNextDisable(false);
      setIsPrevDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone2));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone2));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone2));
      }
    } else if (newProgress === 0.8) {
      setIsNextDisable(false);
      setIsPrevDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone3));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone3));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone3));
      }
    } else if (newProgress === 1) {
      setIsNextDisable(true);
      setIsPrevDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone4));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone4));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone4));
      }
    } else {
      setIsNextDisable(true);
      setIsPrevDisable(false);
    }
    setCurrentIndex(prevIndex => (prevIndex === 0 ? 5 - 1 : prevIndex - 1));
  };

  const handleNextTexture = () => {
    const newSelectedBodyType =
      selectedBodyType < 5 - 1 ? selectedBodyType + 1 : 0;
    setSelectedBodyType(newSelectedBodyType);
    const nextIndex = currentIndex + 1 >= 5 ? 0 : currentIndex + 1;
    const newProgress = (nextIndex + 1) / 5;

    if (newProgress === 0.2) {
      setIsNextDisable(false);
      setIsPrevDisable(true);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone0));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone0));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone0));
      }
    } else if (newProgress === 0.4) {
      setIsPrevDisable(false);
      setIsNextDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone1));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone1));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone1));
      }
    } else if (newProgress === 0.6) {
      setIsNextDisable(false);
      setIsPrevDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone2));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone2));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone2));
      }
    } else if (newProgress === 0.8) {
      setIsNextDisable(false);
      setIsPrevDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone3));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone3));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone3));
      }
    } else if (newProgress === 1) {
      setIsNextDisable(true);
      setIsPrevDisable(false);
      if (savemodel === model.fat.base) {
        dispatch(Texturea(ImagesTexture.skintone4));
      } else if (savemodel === model.muscular.base) {
        dispatch(Textureb(ImagesTexture.skintone4));
      } else if (savemodel === model.skinny.base) {
        dispatch(Texturec(ImagesTexture.skintone4));
      }
    } else {
      setIsNextDisable(true);
      setIsPrevDisable(false);
    }
    setCurrentIndex(prevIndex => (prevIndex === 5 - 1 ? 0 : prevIndex + 1));
  };

  const scrollScrollView = (direction: number) => {
    if (scrollViewRef.current) {
      const newOffset = selectedBodyType * wp(100) + direction * wp(100);
      scrollViewRef.current.scrollTo({
        x: newOffset,
        animated: Platform.OS === 'ios' ? false : true,
      });
    }
  };

  const handlePagination = (index: number) => {
    setPage(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pagination}>
        {bodyTypes.map((_, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width: '20%',
              justifyContent: 'space-between',
              paddingVertical: hp(1),
            }}>
            <TouchableOpacity
              style={[
                styles.paginationItem,
                (index === page || index < page) &&
                  styles.paginationItemSelected,
              ]}
              onPress={() => handlePagination(index)}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  fontFamily: FontFamily.OpenSansRegular,
                  color: index === page || index < page ? 'white' : 'black',
                }}>
                {index + 1}
              </Text>
            </TouchableOpacity>
            {index < bodyTypes.length - 1 && (
              <View style={{justifyContent: 'center', width: '100%'}}>
                <Progress.Bar
                  animated={true}
                  progress={listProgress[index]}
                  width={56}
                  unfilledColor="#CFF4FF"
                  color="#FF9900"
                  borderWidth={0}
                />
              </View>
            )}
          </View>
        ))}
      </View>

      {page === 0 && (
        <>
          <Text style={styles.text2}>{TextArray[page]}</Text>
          <View style={styles.navigation}>
            <TouchableOpacity
              disabled={isPrevDisabled}
              style={{
                borderRadius: wp(2),
                paddingHorizontal: wp(2),
              }}
              onPress={handlePrev}>
              <Text style={styles.arrowButtontext}>{'<'}</Text>
            </TouchableOpacity>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={event => {
                const offset = event.nativeEvent.contentOffset.x;
                const index = Math.floor(offset / wp(100));
                setPage(index);
              }}
              scrollEnabled={false}>
              <View>
                <View style={styles.bodyTypeContainer}>{model.fat.base}</View>
              </View>
              <View>
                <View style={styles.bodyTypeContainer}>
                  {model.muscular.base}
                </View>
              </View>
              <View>
                <View style={styles.bodyTypeContainer}>
                  {model.skinny.base}
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={{
                borderRadius: wp(2),
                paddingHorizontal: wp(2),
              }}
              disabled={isNextDisabled}
              onPress={handleNext}>
              <Text style={styles.arrowButtontext}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {page === 1 && (
        <>
          <Text style={styles.text2}>{TextArray[page]}</Text>
          <View style={styles.navigation}>
            <TouchableOpacity
              disabled={isPrevDisabled}
              style={{
                borderRadius: wp(2),
                paddingHorizontal: wp(2),
              }}
              onPress={handlePrevTexture}>
              <Text style={styles.arrowButtontext}>{'<'}</Text>
            </TouchableOpacity>
            <ScrollView
              ref={scrollViewRef}
              showsHorizontalScrollIndicator={false}
              horizontal
              onMomentumScrollEnd={event => {
                const offset = event.nativeEvent.contentOffset.x;
                const index = Math.floor(offset / wp(100));
                setPage(index);
              }}
              scrollEnabled={false}>
              <View style={styles.bodyTypeContainer}>{savemodel}</View>
            </ScrollView>
            <TouchableOpacity
              style={{
                padding: wp(2),
                borderRadius: wp(2),
              }}
              disabled={isNextDisabled}
              onPress={handleNextTexture}>
              <Text style={styles.arrowButtontext}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {page === 2 && (
        <>
          <Text style={styles.text2}>{TextArray[page]}</Text>
          <View style={styles.navigation}>
            <TouchableOpacity
              disabled={isPrevDisabled}
              style={{
                borderRadius: wp(2),
                paddingHorizontal: wp(2),
              }}
              onPress={handlePrevcostume}>
              <Text style={styles.arrowButtontext}>{'<'}</Text>
            </TouchableOpacity>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={event => {
                const offset = event.nativeEvent.contentOffset.x;
                const index = Math.floor(offset / wp(100));
                setPage(index);
              }}
              scrollEnabled={false}>
              {savemodel === model.fat.base && (
                <>
                  <View style={styles.bodyTypeContainer}>
                    {model.fat.costume1}
                  </View>
                  <View style={styles.bodyTypeContainer}>
                    {model.fat.costume2}
                  </View>
                  <View style={styles.bodyTypeContainer}>
                    {model.fat.costume3}
                  </View>
                </>
              )}
              {savemodel === model.skinny.base && (
                <>
                  <View style={styles.bodyTypeContainer}>
                    {model.skinny.costume1}
                  </View>
                  <View style={styles.bodyTypeContainer}>
                    {model.skinny.costume2}
                  </View>
                  <View style={styles.bodyTypeContainer}>
                    {model.skinny.costume3}
                  </View>
                </>
              )}
              {savemodel === model.muscular.base && (
                <>
                  <View style={styles.bodyTypeContainer}>
                    {model.muscular.costume1}
                  </View>
                  <View style={styles.bodyTypeContainer}>
                    {model.muscular.costume2}
                  </View>
                  <View style={styles.bodyTypeContainer}>
                    {model.muscular.costume3}
                  </View>
                </>
              )}
            </ScrollView>
            <TouchableOpacity
              style={{
                padding: wp(2),
                borderRadius: wp(2),
              }}
              disabled={isNextDisabled}
              onPress={handleNextcostume}>
              <Text style={styles.arrowButtontext}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {page !== 3 && (
        <TouchableOpacity style={styles.nextButton} onPress={updatePagination}>
          <Text style={styles.nextButtontext}>Next</Text>
        </TouchableOpacity>
      )}

      {page === 3 && (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{
              width: '100%',
              flex: 1,
              height: hp(100),
              alignSelf: 'center',
            }}>
            <View style={{width: '100%', height: hp(100)}}>{saveCostume}</View>
            <View style={styles.navigation2}>
              <Text style={styles.text3}>{TextArray[page]}</Text>
              <TextInput
                style={styles.inputx}
                placeholder="Enter Your Hero Name"
                placeholderTextColor={'black'}
                onChangeText={text => setModelName(text)}
              />
              <TouchableOpacity
                style={styles.nextButton2}
                onPress={() => checkData(modelName)}>
                <Text style={styles.nextButtontext}>Next</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      )}
    </View>
  );
}
