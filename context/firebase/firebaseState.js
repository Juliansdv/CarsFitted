import React from "react";
import { useReducer } from "react";
import firebase from '../../firebase';
import firebaseContext from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";

const FirebaseState = props => {
    //crea el state inicial
    const initialState={
        menu:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(firebaseReducer, initialState)

    return(
        <firebaseContext.Provider
            value={{
                menu: state.menu,
                firebase
            }}
        >
            {props.children}
        </firebaseContext.Provider>
    )
}

export default FirebaseState;