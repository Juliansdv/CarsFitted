import { Button, View, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Navbar = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.columns}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Notifications') }}>
                    <Image source={require('../../images/campana.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('WorkshopInfo') }}>
                    <Image source={require('../../images/usuario.png')} style={{ width: 25, height: 25, marginLeft: 200 }} />
                </TouchableOpacity>
            </View>
            <View style={{ margin: 40 }}>
                <Button title="Vehiculos" color="#841584" />
            </View >
        </View>
    )

}

const styles = StyleSheet.create({
    columns: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        justifyContent: 'center',
        marginTop: 40
    },
});