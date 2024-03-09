import { View, SafeAreaView, TextInput, StyleSheet, Text } from 'react-native';
import React from 'react';

export const SearchBar = () => {

    const [text, setText] = React.useState('Ingresa la búsqueda');

    return (
        <View >
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black',
    },
});