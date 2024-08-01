import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, ScrollView, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Maths_Svg, Sci_Svg, History_Svg, Geography_Svg, Art_Svg, Sports_Svg, Cal_Svg, Algebra_Svg, Fin_Svg, Stat_Svg, Num_Svg } from '../../assets/Svgs/SvgGroup';
import { Images } from '../../assets/Image/index';
import { styles } from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HobbyItem {
    id: string;
    images: any[];
    names: any[]; // Replace 'any' with the type of your image objects
}
interface HobbyItema {
    id: string;
    images: any;

}


export default function Home(props: any) {

    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userPoint, setUserPoint] = useState('')
    const [skill, setSkill] = useState('');

    const [selectedItems, setSelectedItems] = useState<Map<string, Set<string>>>(new Map());
    const [data] = useState<HobbyItem[]>([
        { id: '1', images: [Sci_Svg, History_Svg, Maths_Svg], names: ['Arts & Acts', 'Culture & Society', 'Media & Music'] },
        { id: '2', images: [Geography_Svg, Art_Svg, Sports_Svg], names: ['Science & Technology', 'Sports & Recreation', 'This & That'] },
    ]);
    const [dataa] = useState<HobbyItema[]>([
        { id: '1', images: Cal_Svg },
        { id: '2', images: Stat_Svg },
        { id: '3', images: Algebra_Svg },
        { id: '4', images: Num_Svg },
        { id: '5', images: Fin_Svg },
        // Add more interests/skills/hobbies as needed
    ]);
    const UserData = useSelector(
        (state: RootState) => state?.appReducer?.UserData,
    );

    useEffect(() => {
        GettinAsyncValue()
    }, [])

    const GettinAsyncValue = async () => {
        let name = await AsyncStorage.getItem('userName');
        let email = await AsyncStorage.getItem('userEmail');
        let phonenumber = await AsyncStorage.getItem('userPhone');
        let poin = await AsyncStorage.getItem('userPoints');

        if (name !== null || email !== null || phonenumber !== null || poin !== null) {
            const parsedName = JSON.parse(name);
            setUsername(parsedName);
            setUserEmail(email); // Just set the email directly
            setPhoneNumber(phonenumber); // Set the phone number directly
            const points = JSON.parse(poin);
            setUserPoint(points);
        }
    }

    const renderItem = ({ item }: { item: HobbyItem }) => (
        <TouchableOpacity onPress={handleModalOpen}>
            <FlatList
                data={item.images}
                nestedScrollEnabled={true}
                scrollEnabled={false}
                keyExtractor={(image, index) => `${item.id}_${index}`}
                renderItem={({ item: image, index }) => (
                    <TouchableOpacity onPress={() => handleImagePress(item.id, index)}>
                        <View style={styles.imagea}>
                            {selectedItems.has(item.id) && selectedItems.get(item.id)?.has(index.toString()) && (
                                <View style={styles.selectedCircle} />
                            )}
                            <SvgXml xml={item.images[index]} style={styles.image1} />
                            <Text style={styles.headerTextax}>{item.names[index]}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                horizontal
            />
        </TouchableOpacity>
    );

    const handleModalOpen = (prop: any) => {
        setModalVisible(true);
    };

    // const handleModalClose = () => {
    //     setModalVisible(false);
    // };
    // const handleModalOpena = () => {
    //     setModalVisiblea(true);
    // };
    // const handleModalOpenax = () => {
    //     props.navigation.navigate('Loading');
    // };

    // const handleModalClosea = () => {
    //     setModalVisiblea(false);
    // };
    // const handleModalOpenaa = () => {
    //     setModalVisibleaa(true);
    // };
    // const handleItemPress = (id: any) => {
    //     setSelectedItemId(id);
    //     setModalVisiblea(true);
    // };

    // const handleModalCloseaa = () => {
    //     setModalVisibleaa(false);
    // };

    // const handleValuesChange = (values: any) => {
    //     setSliderValue(values[0]); // For this example, we assume using a single value
    //     //  onValuesChange(values);
    // };


    const [sliderValue, setSliderValue] = useState(0.5);
    const handleImagePress = (itemId: string, imageIndex: number) => {
        // handleModalOpen();
        // handleModalOpena();
        props.navigation.navigate('SearchSkill');
        setSelectedItems((prevSelectedItems) => {
            const newSelectedItems = new Map(prevSelectedItems);

            if (!newSelectedItems.has(itemId)) {
                newSelectedItems.set(itemId, new Set());
            }

            const selectedImages = newSelectedItems.get(itemId);

            if (selectedImages?.has(imageIndex.toString())) {
                selectedImages?.delete(imageIndex.toString());
            } else {
                selectedImages?.add(imageIndex.toString());
            }

            return newSelectedItems;
        });
    };
    const renderCustomLabel = (value: any) => (
        <View
            style={{
                width: 30, // Adjust the width of the thumb as needed
                height: 30,
                backgroundColor: '#FF9900',
                borderRadius: 25, // Make the thumb circular
                // position: 'absolute',
                top: hp(0.5),
                // left: `${(value / 10) * 90}%`, // Adjust the position of the thumb horizontally based on the slider value
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Text style={{ color: '#FBFDFF', fontWeight: 'bold' }}>
                {Math.round(value)}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.firstView}>
                    <View style={{ flexDirection: "row", marginLeft: wp(4) }}>
                        <Image source={Images.Avatar} style={styles.image} />
                        <View style={{ flexDirection: 'column', alignSelf: "center", marginLeft: wp(4) }}>
                            <Text style={styles.FirstText}>{username}</Text>
                            <Text style={styles.SecText}>Words Power</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', width: wp(25), height: hp(4.5), borderWidth: 1, justifyContent: 'space-around', borderRadius: wp(10), flexDirection: 'row', alignItems: 'center', borderColor: '#FF9900', marginRight: wp(4) }}>
                        <Text style={{ color: '#FF9900', fontWeight: 'bold', fontSize: 14, alignSelf: 'center', textAlign: 'center' }}>QRK</Text>
                        <Text style={{ color: '#FF9900', fontWeight: 'bold', fontSize: 14, alignSelf: 'center', textAlign: 'center' }}>{userPoint}</Text>
                    </View>
                </View>


                {/* <Text style={styles.FirstTextaa}>Continue playing</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <Image source={Images.g1} style={styles.image11} />
                <Image source={Images.g2} style={styles.image11} />
            </View> */}
                <View style={{ marginLeft: wp(5), marginTop: hp(3) }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Choose An Adventure</Text>
                </View>
                <View style={{ margin: "4%" }}>
                    <Text style={styles.FirstTextaa}>Trending Games</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    <Image source={Images.g1} style={styles.image11} />
                    <Image source={Images.g2} style={styles.image11} />
                </View>
                <Text style={styles.FirstTexta}>Suggested Skills</Text>
                <View>
                    <FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />

                </View>
                <View style={{ marginBottom: Platform.OS === 'android' ? hp(10) : hp(3) }}>
                    <Text style={styles.FirstTextaaa}> Add Your Own Skill</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Skill'
                        placeholderTextColor={'black'}
                        value={skill}
                        onChangeText={(text) => setSkill(text)}
                    />
                </View>
            </ScrollView>
        </View>
    );
};


