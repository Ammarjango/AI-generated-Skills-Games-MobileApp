// ImageRow.js
import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
//@ts-ignore
const ImageRow = ({ images }) => {
    //@ts-ignoreS
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const rows = chunkArray(images, 3);

    return (
        <View style={{ alignItems: 'center' }}>
            {rows.map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', marginBottom: 10, width: widthPercentageToDP(100) }}>

                    {row.map((imageSource: ImageSourcePropType, index: React.Key | null | undefined) => (
                        <Image key={index} source={imageSource} style={{ width: 85, height: 80, alignSelf: 'center', marginHorizontal: widthPercentageToDP(2), margin: 5, marginLeft: widthPercentageToDP(8) }} />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default ImageRow;
