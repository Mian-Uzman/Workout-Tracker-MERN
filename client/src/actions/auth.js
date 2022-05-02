import * as api from "../api/index.js";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //Login user
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //Login user
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}