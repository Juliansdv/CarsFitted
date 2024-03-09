import React from 'react';
import { View, ScrollView, Text } from 'react-native';

export const Notifications = () => {

    return (
        <ScrollView>
            <View style={{ margin: 40 }}>
                <View style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                        ¡Solo por hoy! 20% de descuento en nuestro Pegassi Zentorno.
                    </Text>
                </View>
                <View style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                        Tu prueba de manejo ha sido aceptada.
                    </Text>
                </View>
                <View style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                        Te enviamos la cotización que solicitaste a tu correo electrónico.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );

}