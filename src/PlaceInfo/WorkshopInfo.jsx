import React from 'react';
import { View, ScrollView, Text } from 'react-native';

export const WorkshopInfo = () => {

    return (
        <ScrollView>
            <View style={{ margin: 60 }}>
                <Text style={{ fontSize: 22, color: 'black' }}>
                    Concesionario CarsFitted
                </Text>
                <Text style={{ fontSize: 14, marginTop: 20, color: 'black' }}>
                    Teléfono: 3206504040
                </Text>
                <Text style={{ fontSize: 14, marginTop: 5, color: 'black' }}>
                    Dirección: Cra 77 #30 - 22 / Medellín
                </Text>
                <Text style={{ fontSize: 14, marginTop: 5, color: 'black' }}>
                    Correo: carsfitted@gmail.com
                </Text>
            </View>
        </ScrollView>
    );

}