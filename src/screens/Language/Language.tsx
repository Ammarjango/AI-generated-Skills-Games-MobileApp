import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Checkbox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';
export default function Language(props: any) {
    const [selectedLanguage, setSelectedLanguage] = useState<{ id: number; name: string; } | null>(null);

    const languages = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Spanish' },
        { id: 3, name: 'French' },
        { id: 4, name: 'German' },
        { id: 5, name: 'Chinese' },
        { id: 6, name: 'Japanese' },
    ];

    const handleLanguagePress = (language: { id: number; name: string; } | null) => {
        setSelectedLanguage(language);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Language List */}
            <Text style={{ left: widthPercentageToDP(5), color: '#FF9900', fontSize: 16 }}>Language You Speak</Text>
            <View style={{ flex: 1, padding: 10, flexDirection: 'row' }}>
                <FlatList
                    data={languages}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleLanguagePress(item)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>

                                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                                <Icon
                                    name={item.id === selectedLanguage?.id ? 'check-circle' : 'circle-o'}
                                    size={20}
                                    color={item.id === selectedLanguage?.id ? '#FF9900' : 'gray'}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />

            </View>


        </View>
    );
};

