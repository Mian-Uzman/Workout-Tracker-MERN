import axios from "axios";

const url = "http://localhost:5000/workouts";


export const fetchWorkouts = () => axios.get(`${url}/get-workouts`);
export const createWorkout = (newWorkout) => axios.post(`${url}/create-workout`, newWorkout);
export const updateWorkout = (id, updatedWorkout) => axios.patch(`${url}/${id}`, updatedWorkout);
export const deleteWorkout = (id) => axios.delete(`${url}/${id}`);