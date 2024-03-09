import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Navbar } from './NavBar'
import { SearchBar } from './SearchBar'
import { VehicleCardCreator } from './VehicleCardCreator'

const data = [
    { "key": 1, "name": "Pegassi Zentorno", "type": "Usado", "price": "20'000.000", "description": "Un vehículo muy adecuado", "image": "https://cdn.discordapp.com/attachments/793216364202164274/1215434434250149998/iu.png?ex=65fcbc86&is=65ea4786&hm=6b597afd942884c8d7d5d92c53f1908146438f4ab19105a540eb9b1f8f5b099a&" },
    { "key": 2, "name": "Dinka Jester", "type": "Nuevo", "price": "10'000.000", "description": "Un vehículo muy adecuado", "image": "https://cdn.discordapp.com/attachments/793216364202164274/1215434531666923560/iu.png?ex=65fcbc9e&is=65ea479e&hm=0e2e60bbd4e080666a9786265b67adadb593763c4ce68b2ef2367e13065ab863&" },
    { "key": 3, "name": "Benefactor Surano", "type": "Usado", "price": "20'000.000", "description": "Un vehículo muy adecuado", "image": "https://cdn.discordapp.com/attachments/793216364202164274/1215434790673719326/iu.png?ex=65fcbcdb&is=65ea47db&hm=764ad3c9ec655fcddd9ba915e329b2d5f61e4e64c413ad0793e4d390cdce7c85&" },
    { "key": 4, "name": "Bravado Buffalo", "type": "Nuevo", "price": "40'000.000", "description": "Un vehículo muy adecuado", "image": "https://cdn.discordapp.com/attachments/793216364202164274/1215435206509600768/iu.png?ex=65fcbd3e&is=65ea483e&hm=e6c46643980b644753cdd9ecff0fac340de580ca7013f11597052b038f85f3d3&" },
    { "key": 5, "name": "Obey 9F", "type": "Usado", "price": "100'000.000", "description": "Un vehículo muy adecuado", "image": "https://cdn.discordapp.com/attachments/793216364202164274/1215435338340638730/iu.png?ex=65fcbd5e&is=65ea485e&hm=0b99edfb566a9709c1144acb5ff37ef145ac71aa709d9641da35b0d0280f4f03&" },
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