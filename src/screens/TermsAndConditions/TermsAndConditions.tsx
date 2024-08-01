import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const TermsAndConditions = (props: any) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.sectionHeading}>Our Terms & Conditions </Text>

            </View>


            <Text style={styles.paragraph}>
                Fermentum erat nisl duis varius risus. Augue ac facilisi porta metus enim. Ullamcorper lacus praesent rhoncus, sapien rutrum nulla mattis vitae ultrices.
            </Text>

            <Text style={styles.bulletList}>
                {'\u2022'} Fermentum erat nisl duis varius risus.
                {'\n\u2022'} Augue ac facilisi porta metus enim.
                {'\n\u2022'} Ullamcorper lacus praesent rhoncus, sapien rutrum nulla mattis vitae ultrices.
                {'\n\u2022'} Nunc, scelerisque adipiscing condimentum massa dignissim tortor leo lacus.
            </Text>

            <Text style={styles.paragraph}>
                Aliquam eget purus sit malesuada tempor euismod. Eget commodo ultricies ut elit hendrerit risus. Elementum tellus nisl lectus bibendum malesuada orci dui. Nunc pharetra.
            </Text>

            <Text style={styles.paragraph}>
                Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim. Nunc, scelerisque adipiscing condimentum massa dignissim tortor leo lacus. Sapien felis ultrices fringilla nisi sit nibh. Etiam volutpat nisl ornare lorem mus at a, et pulvinar.
            </Text>
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

export default TermsAndConditions;
