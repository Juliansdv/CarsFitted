import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DrivingTest = () => {

    const navigation = useNavigation();

    const [date, setDate] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [id, setId] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [errors, setErrors] = React.useState({});

    React.useEffect(() => {

        // Trigger form validation when phone changes 
        validateForm();
    }, [phone, name, lastname, id]);

    const validateForm = () => {
        let errors = {};

        // Validate phone, name, last and cedula field 
        if (!name) {
            errors.name = 'El nombre es requerido.';
        } else if (!/[a-zA-Z]+/.test(name)) {
            errors.name = 'El nombre contiene un caracter inválido.';
        }
        if (!lastname) {
            errors.lastname = 'El apellido es requerido.';
        } else if (!/[a-zA-Z]+/.test(lastname)) {
            errors.lastname = 'El apellido contiene un caracter inválido.';
        }
        if (!id) {
            errors.id = 'El número de cédula es requerido.';
        } else if (!/\d+/.test(id)) {
            errors.id = 'El número de cédula contiene un caracter inválido.';
        }
        if (!phone) {
            errors.phone = 'El número de celular es requerido.';
        } else if (!/\d+/.test(phone)) {
            errors.phone = 'El número de celular contiene un caracter inválido.';
        }

         /*Validate email field 
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        } */

        // Set the errors and update form validity 
        setErrors(errors);
    };

    return (
        <ScrollView>
            <View style={{ margin: 40 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={setDate}
                    value={date}
                    keyboardType='numeric'
                    placeholder='Ingresa la fecha:'
                    maxLength={10}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Ingresa tus nombres:'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setLastname}
                    value={lastname}
                    placeholder='Ingresa tus apellidos:'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                    keyboardType='numeric'
                    placeholder='Ingresa tu cédula:'
                    maxLength={10}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType='numeric'
                    placeholder='Ingresa tu número de celular:'
                    maxLength={10}
                />

                <Pressable style={styles.button} onPress={() => { navigation.navigate('VehicleDetail') }}>
                    <Text style={styles.text}>Solicitar</Text>
                </Pressable>

                {Object.values(errors).map((error, index) => ( 
                <Text key={index} style={styles.error}> 
                    {error} 
                </Text> 
            ))} 
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
    error: { 
        color: 'red', 
        fontSize: 15, 
        marginTop: 12, 
    },
});
