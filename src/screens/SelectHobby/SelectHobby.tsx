import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';
import { dataServer } from '../../Service/AxiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface HobbyItem {
    id: string;
    images: any[];
    names: any[];
}

export const ico = {
    footbal: require('../../../src/assets/Image/football.png'),
    music: require('../../../src/assets/Image/musi.png'),
    games: require('../../../src/assets/Image/game-controller.png'),
    cooking: require('../../../src/assets/Image/pan.png'),
    photograph: require('../../../src/assets/Image/camera.png'),
    travel: require('../../../src/assets/Image/rocket.png'),
    technology: require('../../../src/assets/Image/laptop.png'),
    arts: require('../../../src/assets/Image/paint.png'),
    science: require('../../../src/assets/Image/science.png')
}


export default function SelectHobby(props: any) {
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<Map<string, Set<string>>>(new Map());
    console.log('Select Items>>>', selectedItems);
    const [data] = useState<HobbyItem[]>([
        {
            id: '1',
            images: [ico.footbal, ico.music, ico.games], names: ['Science', 'Music', 'Gamer']
        },
        { id: '2', images: [ico.cooking, ico.photograph, ico.travel], names: ['Cooking', 'Photograph', 'Travel'] },
        { id: '3', images: [ico.technology, ico.arts, ico.science], names: ['Technology', 'Arts', 'Science'] },

    ]);

    const handleImagePress = (itemId: string, imageIndex: number) => {
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
    const handleVerify = async () => {
        setLoading(true)
        const selectedHobbyNames: string[] = [];
        for (const [itemId, selectedImages] of selectedItems.entries()) {
            if (selectedImages.size > 0) {
                const selectedHobby = data.find((item: { id: string; }) => item.id === itemId);
                if (selectedHobby) {
                    selectedImages.forEach(imageIndex => {
                        selectedHobbyNames.push(selectedHobby.names[parseInt(imageIndex)]);
                    });
                }
            }
        }

        const uniqueSelectedHobbyNames = Array.from(new Set(selectedHobbyNames));
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (accessToken !== null) {
            console.log('Access Token:', accessToken);
            let config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            };

            const response = await dataServer.post('/auth/updateProfile', {
                hobbies: uniqueSelectedHobbyNames
            }, config);
            setLoading(false)
            console.log("Response:", response.data);
        }
        setLoading(false)
        props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'HomeTabs' }
                ],
            })
        );
    };
    const renderItem = ({ item }: { item: HobbyItem }) => (
        <TouchableOpacity
            style={{ top: hp(6), left: wp(3), }}
            onPress={() => { }}
        >
            <FlatList
                data={item.images}
                keyExtractor={(image, index) => `${item.id}_${index}`}
                renderItem={({ item: image, index }) => (
                    <TouchableOpacity onPress={() => handleImagePress(item.id, index)}>
                        <View style={styles.image}>
                            {selectedItems.has(item.id) && selectedItems.get(item.id)?.has(index.toString()) && (
                                <View style={styles.selectedCircle} />
                            )}
                            <Image source={item.images[index]} style={styles.image1} />

                        </View>
                        <Text style={styles.headerTextax}>{item.names[index]}</Text>
                    </TouchableOpacity>
                )}
                horizontal
            />

        </TouchableOpacity>

    );

    const handleSelectButtonPress = () => {

    };
    return (
        <View style={styles.container}>
            <View style={{ top: hp(6) }}>
                <Text style={styles.headerText}>Choose your interest things hobby</Text>
                <Text style={styles.headerTexty}>Choose your skills to improve knowledge.</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
                <TouchableOpacity style={styles.selectButton} onPress={handleSelectButtonPress}>
                    <Text style={styles.selectButtonText} onPress={handleVerify}>Select</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


