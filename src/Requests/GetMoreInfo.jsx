import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const GetMoreInfo = () => {

    const navigation = useNavigation();

    const [mail, setMail] = React.useState('');

    const [errors, setErrors] = React.useState({});

    React.useEffect(() => {
        validateForm();
    }, [mail]);

    const validateForm = () => {
        let errors = {};

        if (!mail) {
            errors.mail = 'El correo es requerido.';
        }
        setErrors(errors);
    };

    return (
        <ScrollView>
            <View style={{ margin: 40 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={setMail}
                    value={mail}
                    placeholder='Ingresa tu correo:'
                />

                {Object.values(errors).map((error, index) => (
                    <Text key={index} style={styles.error}>
                        {error}
                    </Text>
                ))}

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
    error: { 
        color: 'red', 
        fontSize: 15, 
        marginTop: 12, 
    },
});
