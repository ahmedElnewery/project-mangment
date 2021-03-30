
import { Link } from 'react-router-dom';
import React from 'react' 
const initialState = {
    authError: null

}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case ("LOGIN_ERROR"):
            return {
                ...state,
                authError: `Login Failed ` 
            };
        case ("LOGIN_SUCCESS"):
            return {
                ...state,
                authError: null
            }
        case ("SIGNOUT_ERROR"):
            return {
                ...state,
                authError: "There is an Error"
            };
        case ("SIGNOUT_SUCCESS"):
            console.log("signout")
            return {
                ...state,
                authError: null
            }
        case ("SIGNUP_SUCCESS"):
            return {
                ...state,
                authError: null
            }
        case ("SIGNUP_ERROR"):
            return {
                ...state,
                authError: "Sign Up failed"
            }
        default:
            return state

    }
}
export default authReducer