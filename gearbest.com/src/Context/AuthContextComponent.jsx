
import React, { useState } from "react"
import reducer from "./reducer.js"
export const AuthContext = React.createContext();

const initialState ={
    isAuth:false,
    isLoading:false,
    token:null,
    isError:false,
    data:[],

}
function AuthContextProvider ({children}){

   const [state,dispatch] = React.useReducer(reducer,initialState)
    
    return (
        <AuthContext.Provider value ={[state,dispatch]}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider