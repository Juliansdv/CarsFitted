import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Pressable, Text } from 'react-native';

export const HistoricServices = () => {

    return (
        <ScrollView>
            <View style={{ margin: 40 }}>
                <View style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                        Fecha: 20/12/2000
                    </Text>
                    <Text style={{ color: 'black' }}>
                        Solicitado por: Jose Rueda
                    </Text>
                </View>
                <View style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                        Fecha: 10/06/2005
                    </Text>
                    <Text style={{ color: 'black' }}>
                        Solicitado por: Santiago Olmedo
                    </Text>
                </View>
                <View style={{ marginTop: 30, borderWidth: 1, padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                        Fecha: 8/02/2010
                    </Text>
                    <Text style={{ color: 'black' }}>
                        Solicitado por: Juan Rendon
                    </Text>
                </View>
            </View>
        </ScrollView>
    );

}
