import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Navbar } from './NavBar'
import { SearchBar } from './SearchBar'
import { VehicleCardCreator } from './VehicleCardCreator'

const data = [
    { "key": 1, "name": "Pegassi Zentorno", "type": "Usado", "price": "20'000.000", "description": "Un vehículo muy adecuado", "image": "https://firebasestorage.googleapis.com/v0/b/carsfitted-e4763.appspot.com/o/car1.png?alt=media&token=ab1aa6bb-21a7-461c-887a-5398947b3665" },
    { "key": 2, "name": "Dinka Jester", "type": "Nuevo", "price": "10'000.000", "description": "Un vehículo muy adecuado", "image": "https://firebasestorage.googleapis.com/v0/b/carsfitted-e4763.appspot.com/o/car2.png?alt=media&token=5b43d96a-54bb-47aa-8a68-a5e1a7e65311" },
    { "key": 3, "name": "Benefactor Surano", "type": "Usado", "price": "20'000.000", "description": "Un vehículo muy adecuado", "image": "https://firebasestorage.googleapis.com/v0/b/carsfitted-e4763.appspot.com/o/car3.png?alt=media&token=73fa4473-f37b-4a27-9a83-934e4c19b473" },
    { "key": 4, "name": "Bravado Buffalo", "type": "Nuevo", "price": "40'000.000", "description": "Un vehículo muy adecuado", "image": "https://firebasestorage.googleapis.com/v0/b/carsfitted-e4763.appspot.com/o/car4.png?alt=media&token=41b9db9d-e992-4bca-9ee4-67f009bbd380" },
    { "key": 5, "name": "Obey 9F", "type": "Usado", "price": "100'000.000", "description": "Un vehículo muy adecuado", "image": "https://firebasestorage.googleapis.com/v0/b/carsfitted-e4763.appspot.com/o/car5.png?alt=media&token=38917177-3f6a-4c33-ac7d-bf5606abb02c" },
]

export const Vehicles = () => {

    return (
        <ScrollView>
            <View>
                <Navbar />
                <SearchBar />
                <View style={styles.columns}>
                    <VehicleCardCreator data={data} />
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    columns: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        justifyContent: 'center'
    },
});