import React from 'react';
import { Image, Text, View, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const VehicleDetail = ({ name, type, price, image }) => {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={{ margin: 50 }}>
                <Image style={{ width: 300, height: 300 }} source={{ uri: ("https://www.hdcarwallpapers.com/thumbs/2013/2014_porsche_911_turbo_s-t2.jpg") }} />
                <Text style={{ fontSize: 20, marginTop: 25, fontWeight: "bold", color: 'black' }}>
                    Nombre: {"Pegassi Zentorno"}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 5, fontWeight: "bold", color: 'black' }}>
                    Tipo: {"Usado"}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 5, fontWeight: "bold", color: 'black' }}>
                    Precio: {"20'000.000"}
                </Text>
                <Text style={{ fontSize: 15, marginTop: 30, color: 'black' }}>
                    {"Un vehículo muy adecuado, apto para todo tipo de terrenos, poco uso."}
                </Text>
                <Pressable style={styles.button} onPress={() => { navigation.navigate('GetMoreInfo') }}>
                    <Text style={styles.text}>Solicitar Cotización</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => { navigation.navigate('DrivingTest') }}>
                    <Text style={styles.text}>Solicitar Prueba Manejo</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => { navigation.navigate('MaintenanceService') }}>
                    <Text style={styles.text}>Solicitar Mantenimiento</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => { navigation.navigate('HistoricServices') }}>
                    <Text style={styles.text}>Historial de Mantenimientos</Text>
                </Pressable>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
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
