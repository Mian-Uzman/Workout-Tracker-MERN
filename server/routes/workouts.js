import express from "express";
import { getWorkouts, createWorkout, updateWorkout, deleteWorkout } from "../controllers/workouts.js";

const router = express.Router();

router.get('/get-workouts', getWorkouts);
router.post('/create-workout', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;