import React from "react";
import { useReducer } from "react";
import drivingTestReducer from "./drivingTestReducer";
import DrivingTestContext from "./drivingTestContext";

const DrivingTestState = props => {
    //crea el state inicial
    const initialState={
        drivingTest:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(drivingTestReducer, initialState)

    return(
        <DrivingTestContext.Provider
            value={{
                drivingTest: state.drivingTest
            }}
        >
            {props.children}
        </DrivingTestContext.Provider>
    )
}

export default DrivingTestState;