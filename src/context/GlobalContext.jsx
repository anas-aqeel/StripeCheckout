import React, { createContext, useReducer } from 'react'
import reducer from './AppReducer'
import { products } from './utils';

let initialState = {};
export const MYCONTEXT = createContext(initialState);

const GlobalContext = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MYCONTEXT.Provider value={{ state, dispatch, products: products }}>
            {props.children}
        </MYCONTEXT.Provider>
    )
}

export default GlobalContext