// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply } from '../Redux/Reducers'; // Adjust the import path
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function Counter() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
            <Button title="Multiply" onPress={() => dispatch(multiply(2))} />
        </View>
    );
}

export default Counter;
