import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
}
from "./action.js"
function reducer (state,action) {

        switch(action.type){
            case LOGIN_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    isAuth:false
                }
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    token:action.payload.token
                }
            case LOGIN_FAIL:
                return {
                    ...state,
                    isLoading:false,
                    isAuth:false    
                }
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    isAuth:false
                }
            default :
            return state;
        }
}
export default reducer