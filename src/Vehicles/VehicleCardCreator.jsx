import React from 'react';
import { Image, Text, View } from 'react-native';
import { VehicleCard } from './VehicleCard'

export const VehicleCardCreator = ({ data }) => {

    return (
        data.map((vehicle) => {
            return (
                <VehicleCard key={vehicle.key} name={vehicle.name} type={vehicle.type} price={vehicle.price} image={vehicle.image} style={{ width: "50%" }} />
            )
        })
    )

}

