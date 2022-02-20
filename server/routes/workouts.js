import express from "express";
import { getWorkouts, createWorkout, updateWorkout, deleteWorkout } from "../controllers/workouts.js";

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;