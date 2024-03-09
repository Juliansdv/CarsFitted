import { Image, Text, View } from 'react-native';
import React from 'react';
import { VehicleCard } from './VehicleCard'

export const VehicleCardCreator = ({ data }) => {

    return (
        data.map((vehicle) => {
            return (
                <VehicleCard name={vehicle.name} type={vehicle.type} price={vehicle.price} image={vehicle.image} style={{ width: "50%" }} />
            )
        })
    )

}

