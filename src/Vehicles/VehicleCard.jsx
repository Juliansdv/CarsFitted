import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const VehicleCard = ({ name, type, price, image }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() =>
            navigation.navigate('VehicleDetail')
        }>
            <View style={{ margin: 20, minHeight: 210, width: 150, borderWidth: 1, padding: 10 }}>
                <Image style={{ width: 120, height: 120 }} source={{ uri: (image) }} />
                <Text style={{ fontSize: 12, color: 'black' }}>
                    Nombre: {name}
                </Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                    Tipo: {type}
                </Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                    Precio: {price}
                </Text>
            </View>
        </TouchableOpacity>

    );

}

