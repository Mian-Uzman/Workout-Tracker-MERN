import * as api from "../api/index.js";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getWorkouts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchWorkouts();
        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error);
    }
}


export const createWorkout = (workout) => async (dispatch) => {
    try {
        const { data } = await api.createWorkout(workout);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateWorkout = (id, workout) => async (dispatch) => {
    try {
        const { data } = await api.updateWorkout(id, workout);
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deleteWorkout = (id) => async (dispatch) => {
    try {
        await api.deleteWorkout(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);

    }
}