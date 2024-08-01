import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function FontSelection(props: any) {
    const [selectedFont, setSelectedFont] = useState<string | null>(null);

    const fonts = [
        { name: 'Arial' },
        { name: 'Helvetica' },
        { name: 'Times New Roman' },
        { name: 'Courier New' },
        { name: 'Verdana' },
        { name: 'Georgia' },
    ];

    const handleFontPress = (font: string | null) => {
        setSelectedFont(font);
        // You can add logic here to apply the selected font to your app
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Font List */}
            <Text style={{ left: widthPercentageToDP(5), color: '#FF9900', fontSize: 16 }}>Select Font</Text>
            <View style={{ flex: 1, padding: 10, flexDirection: 'row' }}>
                <FlatList
                    data={fonts}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleFontPress(item.name)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>
                                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                                <Icon
                                    name={item.name === selectedFont ? 'check-circle' : 'circle-o'}
                                    size={20}
                                    color={item.name === selectedFont ? '#FF9900' : 'gray'}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
