import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";


export default (workouts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...workouts, action.payload];

        case UPDATE:
            return workouts.map((workout) => workout._id === action.payload ? action.payload : workout)

        case DELETE:
            return workouts.filter((workout => workout._id !== action.payload));


        default:
            return workouts;
    }
}