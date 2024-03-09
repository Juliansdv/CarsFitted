import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DrivingTest = () => {

    const navigation = useNavigation();

    const [date, setDate] = React.useState('Ingresa la fecha: ');
    const [name, setName] = React.useState('Ingresa tus nombres: ');
    const [lastname, setLastname] = React.useState('Ingresa tus apellidos: ');
    const [id, setId] = React.useState('Ingresa tu cédula: ');
    const [phone, setPhone] = React.useState('Ingresa tu número de celular: ');

    return (
        <ScrollView>
            <View style={{ margin: 40 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={setDate}
                    value={date}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setLastname}
                    value={lastname}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                />
                <Pressable style={styles.button} onPress={() => { navigation.navigate('VehicleDetail') }}>
                    <Text style={styles.text}>Solicitar</Text>
                </Pressable>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 25,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
