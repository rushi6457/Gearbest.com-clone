import React from 'react';
import { useReducer } from 'react';
import {createContext}from "react"
import cartReducer from './cartreducer';

export const CartContext = createContext()

const CartContextComponent = ({children}) => {
    const [cartState,cartDispatch] = useReducer(cartReducer,{
        cart:[]
    })
    return (
        <CartContext.Provider value={[cartState,cartDispatch]}>{children}</CartContext.Provider>
    );
}

export default CartContextComponent;
