import React from 'react';
import { Vehicles } from './src/Vehicles/Vehicles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VehicleDetail } from './src/Vehicles/VehicleDetail';
import { DrivingTest } from './src/Requests/DrivingTest';
import { MaintenanceService } from './src/Requests/MaintenanceService';
import { HistoricServices } from './src/Requests/HistoricServices';
import { GetMoreInfo } from './src/Requests/GetMoreInfo';
import { WorkshopInfo } from './src/PlaceInfo/WorkshopInfo';
import { Notifications } from './src/PlaceInfo/Notifications';

const Stack = createNativeStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Vehicles"
					component={Vehicles}
					options={{title: 'Vehiculos'}}
				/>
				<Stack.Screen
					name="VehicleDetail"
					component={VehicleDetail}
					options={{title: 'Detalles del vehiculo'}}
				/>
				<Stack.Screen
					name="DrivingTest"
					component={DrivingTest}
					options={{title: 'Solicitar prueba de manejo'}}
				/>
				<Stack.Screen
					name="MaintenanceService"
					component={MaintenanceService}
					options={{title: 'Solicitar mantenimiento'}}
				/>
				<Stack.Screen
					name="HistoricServices"
					component={HistoricServices}
					options={{title: 'Historial de mantenimientos'}}
				/>
				<Stack.Screen
					name="GetMoreInfo"
					component={GetMoreInfo}
					options={{title: 'Solicitar cotización'}}
				/>
				<Stack.Screen
					name="WorkshopInfo"
					component={WorkshopInfo}
					options={{title: 'Información del concesionario'}}
				/>
				<Stack.Screen
					name="Notifications"
					component={Notifications}
					options={{title: 'Notificaciones'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);

}
