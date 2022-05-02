import { combineReducers } from "redux";
import workouts from "./workouts";
import auth from "./auth";


export const reducers = combineReducers({ workouts, auth });