import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Video_Svg } from '../../assets/Svgs/SvgGroup';
const FAQs = (props: any) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.sectionHeading}>Intro to Quiz apps</Text>

            </View>


            <Text style={styles.paragraph}>
                Quiz apps offer gamified quizzes with many different topics to test out your knowledge.            </Text>



            <Text style={styles.paragraph}>
                With Quiz you can also take part in challenges with friends or against others. Fermentum erat nisl duis varius risus. Augue ac facilisi porta metus enim. Ullamcorper lacus praesent rhoncus, sapien rutrum nulla mattis vitae ultrices.             </Text>
            <SvgXml xml={Video_Svg} />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: 'white'
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    paragraph: {
        marginBottom: 16,
        lineHeight: 20,
    },
    bulletList: {
        marginBottom: 16,
        marginLeft: 20, // Adjust the margin to control the indentation of the bullets
    },
});

export default FAQs;
